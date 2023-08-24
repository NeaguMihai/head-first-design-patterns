import { NotificationTemplate } from "./NotificationTemplate";

export class SystemNotification extends NotificationTemplate {
    createBody() {
        return 'System Notification Body';
    }
    createTitle() {
        return 'System Notification Title';
    }
  protected send(payload: any): Promise<void> {
    return new Promise((resolve, _reject) => {
      console.log('System Notification', payload);
      resolve();
    });
  }

  protected onBeforeSend(): void {
      console.log('System Notification onBeforeSend');
  }
}