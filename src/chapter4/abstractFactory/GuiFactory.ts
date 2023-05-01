export interface Button {
  render(): void;
  onClick(listener: () => void): void;
}

export interface Checkbox {
  render(): void;
  onCheck(listener: () => void): void;
}

export interface GuiFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
