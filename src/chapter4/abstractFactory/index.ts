import { Button } from '../Gui';
import { Checkbox, GuiFactory } from './GuiFactory';
import { LinuxGuiFactory } from './linuxGui/LinuxGuiFactory';
import { WindowsGuiFactory } from './windowsGui/WindowsGuiFactory';

class App {
  private factory: GuiFactory;
  private button: Button;
  private checkbox: Checkbox;

  initialize() {
    switch (process.env.TARGET) {
      case 'windows': {
        this.factory = new WindowsGuiFactory();
        break;
      }
      case 'linux': {
        this.factory = new LinuxGuiFactory();
        break;
      }
      default: {
        throw new Error('Unknown target');
      }
    }
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }
  bootstrap() {
    this.initialize();
    this.button.render();
    this.checkbox.render();
  }
}

const app = new App();

process.env.TARGET = 'linux';

app.bootstrap();
