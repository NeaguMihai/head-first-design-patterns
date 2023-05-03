import { Logger } from '../../../shared/logger';
import { Checkbox } from '../GuiFactory';

export class LinuxCheckbox implements Checkbox {
  render() {
    Logger.log('LinuxCheckbox: rendering');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onCheck(_listener: () => void) {
    Logger.log('LinuxCheckbox: adding listener');
  }
}
