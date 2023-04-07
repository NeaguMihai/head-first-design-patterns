import { Logger } from '../shared/logger';
import Duck from './Duck';
import { FlyNoWay, FlyWithWings } from './FlyBehaviour';
import { Quack, Squeak } from './QuackBehaviour';

const quack = new Quack();
const squeak = new Squeak();

const fly = new FlyWithWings();
const noFly = new FlyNoWay();

class RubberDuck extends Duck {
  constructor() {
    super(noFly, squeak);
  }

  display(): void {
    Logger.log('I am a rubber duck');
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(fly, quack);
  }

  display(): void {
    Logger.log('I am a mallard duck');
  }
}

const rubberDuck: Duck = new RubberDuck();
const mallardDuck: Duck = new MallardDuck();

const ducks: Duck[] = [rubberDuck, mallardDuck];

for (const duck of ducks) {
  duck.display();
  duck.performFly();
  duck.performQuack();
}
