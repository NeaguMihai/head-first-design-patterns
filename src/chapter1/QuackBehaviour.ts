import { Logger } from '../shared/logger';

export interface QuackBehavior {
  quack(): void;
}

export class Quack implements QuackBehavior {
  quack(): void {
    Logger.log('Quack');
  }
}

export class Squeak implements QuackBehavior {
  quack(): void {
    Logger.log('Squeak');
  }
}
