import { GuiFactory } from '../GuiFactory';
import { LinuxButton } from './LinuxButton';
import { LinuxCheckbox } from './LinuxCheckbox';

export class LinuxGuiFactory implements GuiFactory {
  createButton() {
    return new LinuxButton();
  }
  createCheckbox() {
    return new LinuxCheckbox();
  }
}
