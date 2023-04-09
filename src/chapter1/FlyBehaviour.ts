import { Logger } from '../shared/logger';

export interface FlyBehavior {
  fly(): void;
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    Logger.log("I'm flying!");
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    Logger.log("I can't fly");
  }
}
