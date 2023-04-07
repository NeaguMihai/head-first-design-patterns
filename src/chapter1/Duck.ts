import { FlyBehavior } from './FlyBehaviour';
import { QuackBehavior } from './QuackBehaviour';

abstract class Duck {
  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  abstract display(): void;

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }
}

export default Duck;
