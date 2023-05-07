import { Editor } from '..';
import { Logger } from '../../shared/logger';
import { Command } from '../Command';
import { Clipboard } from '../.';

export class CopyCommand implements Command {
  private _clipboardState: string[];
  private clipboard: Clipboard;
  private editor: Editor;

  constructor(editor: Editor, clipboard: Clipboard) {
    this.editor = editor;
    this.clipboard = clipboard;
  }

  execute(): boolean {
    Logger.log(`CopyCommand: execute`);
    this.clipboard.clipboard = this.editor.text;
    this._clipboardState = this.clipboard.getAllClipboard();

    return true;
  }
  undo(): boolean {
    Logger.log(`CopyCommand: undo`);
    if (!this._clipboardState) return false;

    this.clipboard.overrideClipboard(this._clipboardState);

    return true;
  }
}
