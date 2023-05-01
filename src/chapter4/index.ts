import { AndroidDialog } from './AndroidGui';
import { Dialog } from './Gui';
import { HtmlDialog } from './HtmlGui';

class App {
  private dialog: Dialog;

  initialize() {
    switch (process.env.TARGET) {
      case 'android': {
        this.dialog = new AndroidDialog();
        break;
      }
      case 'web': {
        this.dialog = new HtmlDialog();
        break;
      }
      default: {
        throw new Error('Unknown target');
      }
    }
  }

  bootstrap() {
    this.initialize();
    this.dialog.render();
    this.dialog.refresh();
  }
}

const app = new App();

process.env.TARGET = 'android';
app.bootstrap();
