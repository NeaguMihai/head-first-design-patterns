import { Node } from './Node';

export class Menu implements Iterable<Node>, Node {
  private items: Node[] = [];
  private name: string;
  private parent: Node | null = undefined;

  constructor(name: string, parent?: Node | null) {
    this.name = name;
    this.parent = parent;
  }

  getName(): string {
    return this.name;
  }
  isComposite(): boolean {
    return true;
  }
  getRepresentation(): string {
    return [
      this.getName(),
      ...this.items.map(i =>
        i.isComposite()
          ? `${this.representComposite(i.getRepresentation())}`
          : `--${i.getRepresentation()}`,
      ),
    ].join('\n');
  }

  private representComposite(compositeRepresentation: string): string {
    const [menu, ...items] = compositeRepresentation.split('\n');

    return [`--${menu.toUpperCase()}`, ...items.map(element => `  |${element}`)].join('\n');
  }

  getParent(): Node {
    throw new Error('Method not implemented.');
  }
  setParent(parent: Node): void {
    this.parent = parent;
  }
  [Symbol.iterator](): Iterator<Node, Node, undefined> {
    return this.items[Symbol.iterator]();
  }
  addItem(item: Node): void {
    this.items.push(item);
  }
  removeItem(item: Node): void {
    this.items = this.items.filter(i => i.getName() !== item.getName());
  }
  getAllItems(): Node[] {
    return this.items;
  }
}
