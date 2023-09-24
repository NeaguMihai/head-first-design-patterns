import { Node } from './Node';

export class MenuItem implements Node {
  private name: string;
  private parent: Node | null = undefined;
  constructor(name: string, parent: Node | null) {
    this.name = name;
    this.parent = parent;
  }

  getName(): string {
    return this.name;
  }
  isComposite(): boolean {
    return false;
  }
  getRepresentation(): string {
    return this.getName();
  }
  getParent(): Node {
    return this.parent;
  }
  setParent(parent: Node): void {
    this.parent = parent;
  }
  addItem(): void {
    throw new Error('Method not implemented.');
  }
}
