export abstract class Beverage {
  description = 'Unknown Beverage';
  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
