import { Logger } from '../../../shared/logger';
import { Checkbox } from '../GuiFactory';

export class WindowsCheckbox implements Checkbox {
  render() {
    Logger.log('WindowsCheckbox: rendering');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onCheck(_listener: () => void) {
    Logger.log('WindowsCheckbox: adding listener');
  }
}
