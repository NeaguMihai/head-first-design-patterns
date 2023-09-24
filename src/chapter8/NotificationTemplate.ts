import { Logger } from '../shared/logger';

export abstract class NotificationTemplate {
  public async sendNotification(): Promise<void> {
    const title = this.createTitle();
    const body = this.createBody();
    const image = this.attachImage();

    this.onBeforeSend();
    try {
      const result = await this.send({ title, body, image });

      this.onSuccess(result);
    } catch (error) {
      this.onError(error);
    }
    this.onAfterSend();
  }

  protected abstract createBody(): string;

  protected abstract createTitle(): string;

  protected attachImage(): File | undefined {
    return undefined;
  }

  protected onBeforeSend(): void {
    Logger.log('Notification is about to be sent');
  }

  protected onAfterSend(): void {
    Logger.log('Notification sent');
  }

  protected onError(_error: unknown): void {
    Logger.error(_error);
  }

  protected onSuccess(result: unknown): void {
    Logger.log('Notification sent successfully', result);
  }

  protected abstract send(payload: unknown): Promise<void>;
}
