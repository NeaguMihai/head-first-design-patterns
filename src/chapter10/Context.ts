import { State } from './states/State';

export class Context {
  private registrations: number;
  private claimed: number;
  private transitionCallback: (state: State) => void;

  constructor(transitionTo: (state: State) => void) {
    this.transitionCallback = transitionTo;
    this.registrations = 0;
    this.claimed = 0;
  }

  public inicrementRegistrations(): void {
    this.registrations++;
  }

  public decrementRegistrations(): void {
    this.registrations--;
  }

  public claim(): void {
    this.claimed++;
  }

  public transitionTo(state: State): void {
    this.transitionCallback(state);
  }
}
