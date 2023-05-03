import { Logger } from '../shared/logger';
import { Button, Dialog } from './Gui';

class AndroidButton implements Button {
  render() {
    Logger.log('AdnroidButton: rendering');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick(_listener: () => void): void {
    Logger.log('AdnroidButton: adding listener');
  }
}

export class AndroidDialog extends Dialog {
  createButton() {
    return new AndroidButton();
  }
}
