import { GuiFactory } from '../GuiFactory';
import { WindowsButton } from './WindowsButon';
import { WindowsCheckbox } from './WindowsCheckbox';

export class WindowsGuiFactory implements GuiFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox() {
    return new WindowsCheckbox();
  }
}
