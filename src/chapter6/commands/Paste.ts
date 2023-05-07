import { Editor } from '..';
import { Logger } from '../../shared/logger';
import { Command } from '../Command';
import { Clipboard } from '../.';

// concrete command
export class PasteCommand implements Command {
  private editorBackup: string;
  private readonly editor: Editor;
  private readonly clipboard: Clipboard;

  constructor(editor: Editor, clipboard: Clipboard) {
    this.editor = editor;
    this.clipboard = clipboard;
  }

  execute(): boolean {
    Logger.log(`PasteCommand: execute`);
    this.editorBackup = this.editor.text;
    this.editor.text += this.clipboard.clipboard;

    return true;
  }
  undo(): boolean {
    Logger.log(`PasteCommand: undo`);
    if (!this.editorBackup) return false;

    this.editor.text = this.editorBackup;

    return true;
  }
}
