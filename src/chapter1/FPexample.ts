import { Logger } from '../shared/logger';

type FlyBehaviour = () => void;
type QuackBehaviour = () => void;

abstract class Duck {
  private flyBehaviour: FlyBehaviour;
  private quackBehaviour: QuackBehaviour;

  constructor(flyBehaviour: FlyBehaviour, quackBehaviour: QuackBehaviour) {
    this.flyBehaviour = flyBehaviour;
    this.quackBehaviour = quackBehaviour;
  }

  public performFly(): void {
    this.flyBehaviour();
  }

  public performQuack(): void {
    this.quackBehaviour();
  }
}

const flyWithWings: FlyBehaviour = () => {
  Logger.log('I am flying');
};

const flyNoWay: FlyBehaviour = () => {
  Logger.log('I cannot fly');
};

const quack: QuackBehaviour = () => {
  Logger.log('Quack');
};

const squeak: QuackBehaviour = () => {
  Logger.log('Squeak');
};

class RubberDuck extends Duck {
  constructor() {
    super(flyNoWay, squeak);
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(flyWithWings, quack);
  }
}

const rubberDuck: Duck = new RubberDuck();
const mallardDuck: Duck = new MallardDuck();

const ducks: Duck[] = [rubberDuck, mallardDuck];

for (const duck of ducks) {
  duck.performFly();
  duck.performQuack();
}
