// command interface

export interface Command {
  execute(): boolean;
  undo(): boolean;
}
