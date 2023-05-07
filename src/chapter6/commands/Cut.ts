import { Editor } from '..';
import { Logger } from '../../shared/logger';
import { Command } from '../Command';
import { Clipboard } from '../.';

export class CutCommand implements Command {
  private _clipboardState: string[];
  private _editorState: string;
  private clipboard: Clipboard;
  private editor: Editor;

  constructor(editor: Editor, clipboard: Clipboard) {
    this.editor = editor;
    this.clipboard = clipboard;
  }

  execute(): boolean {
    Logger.log(`CutCommand: execute`);
    this._clipboardState = this.clipboard.getAllClipboard();
    this.editor.text = '';

    return true;
  }
  undo(): boolean {
    Logger.log(`CutCommand: undo`);
    if (!this._clipboardState) return false;

    this.clipboard.overrideClipboard(this._clipboardState);
    this.editor.text = this._editorState;

    return true;
  }
}
