import { Editor } from '..';
import { Logger } from '../../shared/logger';
import { Command } from '../Command';

// concrete command
export class WriteCommand implements Command {
  private editorBackup: string;
  private readonly editor: Editor;
  private readonly text: string;

  constructor(editor: Editor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  execute(): boolean {
    Logger.log(`WriteCommand: execute`);
    this.editorBackup = this.editor.text;
    this.editor.text += this.text;

    return true;
  }
  undo(): boolean {
    Logger.log(`WriteCommand: undo`);
    if (!this.editorBackup) return false;

    this.editor.text = this.editorBackup;

    return true;
  }
}
