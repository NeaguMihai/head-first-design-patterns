import { Logger } from '../shared/logger';

export interface Button {
  render(): void;
  onClick(listener: () => void): void;
}

export abstract class Dialog {
  abstract createButton(): Button;
  render(): void {
    const button = this.createButton();

    button.render();
  }

  refresh(): void {
    Logger.log('Dialog: refreshing dialog');
  }
}
