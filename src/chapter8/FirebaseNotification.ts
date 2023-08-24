import { NotificationTemplate } from "./NotificationTemplate";

export class FirebaseNotification extends NotificationTemplate {
    createBody() {
        return 'Firebase Notification Body';
    }
    createTitle() {
        return 'Firebase Notification Title';
    }
  protected send(payload: any): Promise<void> {
    return new Promise((resolve, _reject) => {
      console.log('Firebase Notification', payload);
      resolve();
    });
  }

  protected onAfterSend(): void {
      console.log('Firebase Notification onAfterSend');
  }
}