import { Logger } from '../../../shared/logger';
import { Button } from '../GuiFactory';

export class LinuxButton implements Button {
  render(): void {
    Logger.log('LinuxButton: rendering');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick(_listener: () => void): void {
    Logger.log('LinuxButton: adding listener');
  }
}
