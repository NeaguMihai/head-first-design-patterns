export abstract class NotificationTemplate {
  public async sendNotification(): Promise<void> {
    const title = this.createTitle();
    const body = this.createBody();
    const image = this.attachImage();
    this.onBeforeSend();
    try {
      const result = await this.send({title, body, image});
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

  protected onBeforeSend(): void { }

  protected onAfterSend(): void { }

  protected onError(_error: any): void { }

  protected onSuccess(_result: any): void { }

  protected abstract send(payload: any): Promise<void>;
}