import { Logger } from '../shared/logger';
import { Button, Dialog } from './Gui';

class HtmlButton implements Button {
  render(): void {
    Logger.log('<h1>HtmlButton: rendering</h1>');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick(_listener: () => void): void {
    Logger.log('HtmlButton: adding listener');
  }
}

export class HtmlDialog extends Dialog {
  createButton() {
    return new HtmlButton();
  }
}
