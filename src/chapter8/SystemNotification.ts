import { Logger } from '../shared/logger';
import { NotificationTemplate } from './NotificationTemplate';

export class SystemNotification extends NotificationTemplate {
  createBody() {
    return 'System Notification Body';
  }
  createTitle() {
    return 'System Notification Title';
  }
  protected send(payload: unknown): Promise<void> {
    return new Promise(resolve => {
      Logger.log('System Notification', payload);
      resolve();
    });
  }

  protected onBeforeSend(): void {
    Logger.log('System Notification onBeforeSend');
  }
}
