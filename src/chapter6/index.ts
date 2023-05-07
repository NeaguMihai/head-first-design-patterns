import { Logger } from '../shared/logger';
import { Command } from './Command';
import { CopyCommand } from './commands/Copy';
import { CutCommand } from './commands/Cut';
import { PasteCommand } from './commands/Paste';

export class Editor {
  text: string;
  commandHistory: Command[];

  constructor() {
    this.text = '';
    this.commandHistory = [];
  }
}

export class Clipboard {
  private _clipboard: string[];

  constructor() {
    this._clipboard = [];
  }

  set clipboard(value: string) {
    if (this._clipboard.length >= 10) {
      this._clipboard.shift();
    }
    this._clipboard.push(value);
  }

  get clipboard(): string {
    return this._clipboard[this._clipboard.length - 1];
  }

  getAllClipboard(): string[] {
    return this._clipboard;
  }

  overrideClipboard(value: string[]): void {
    this._clipboard = value;
  }
}

export class App {
  private _clipboard: Clipboard;
  private _editor: Editor = new Editor();

  constructor() {
    this._editor.text = '';
    this._clipboard = new Clipboard();
  }

  get editor(): Editor {
    return this._editor;
  }

  set clipboard(value: string) {
    this._clipboard.clipboard = value;
  }

  get clipboard(): string {
    return this._clipboard.clipboard;
  }

  getAllClipboard(): string[] {
    return this._clipboard.getAllClipboard();
  }

  overrideClipboard(value: string[]): void {
    this._clipboard.overrideClipboard(value);
  }

  executeCommand(command: Command): boolean {
    if (command.execute()) {
      this._editor.commandHistory.push(command);

      return true;
    }

    return false;
  }

  undo(): boolean {
    const command = this._editor.commandHistory.pop();

    if (!command) return false;

    if (!command.undo()) {
      this._editor.commandHistory.push(command);
    }

    return true;
  }

  copy(): boolean {
    const command = new CopyCommand(this._editor, this._clipboard);

    return this.executeCommand(command);
  }

  cut(): boolean {
    const command = new CutCommand(this._editor, this._clipboard);

    return this.executeCommand(command);
  }

  paste(): boolean {
    const command = new PasteCommand(this._editor, this._clipboard);

    return this.executeCommand(command);
  }

  write(text: string): void {
    this._editor.text = text;
  }
}

const app = new App();

app.write('Hello World!');
Logger.log(app.editor.text);

app.copy();
Logger.log(app.editor.text);

app.paste();
Logger.log(app.editor.text);

app.undo();
Logger.log(app.editor.text);

app.cut();
Logger.log(app.editor.text);

app.paste();
Logger.log(app.editor.text);
