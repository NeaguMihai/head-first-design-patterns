export interface Node {
  getName(): string;
  isComposite(): boolean;

  getRepresentation(): string;

  getParent(): Node | null;
  setParent(parent: Node | null): void;
  addItem(item: Node): void;
}
