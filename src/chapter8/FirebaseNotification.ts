import { Logger } from '../shared/logger';
import { NotificationTemplate } from './NotificationTemplate';

export class FirebaseNotification extends NotificationTemplate {
  createBody() {
    return 'Firebase Notification Body';
  }
  createTitle() {
    return 'Firebase Notification Title';
  }
  protected send(payload: unknown): Promise<void> {
    return new Promise(resolve => {
      Logger.log('Firebase Notification', payload);
      resolve();
    });
  }

  protected onAfterSend(): void {
    Logger.log('Firebase Notification onAfterSend');
  }
}
