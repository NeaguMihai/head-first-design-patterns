import { Logger } from '../../../shared/logger';
import { Button } from '../GuiFactory';

export class WindowsButton implements Button {
  render(): void {
    Logger.log('WindowsButton: rendering');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick(_listener: () => void): void {
    Logger.log('WindowsButton: adding listener');
  }
}
