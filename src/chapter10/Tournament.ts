import { Logger } from '../shared/logger';
import { Context } from './Context';
import { PreparationState } from './states/Preparation';
import { State } from './states/State';

export class Tournament {
  private state: State;
  private context: Context;

  constructor() {
    this.context = new Context(this.transitionTo.bind(this));
    this.transitionTo(new PreparationState());
  }

  public transitionTo(state: State): void {
    Logger.log(`Context: Transition to ${state.constructor.name}.`);
    this.state = state;
    this.state.setContext(this.context);
  }

  public join(): boolean {
    return this.state.joinTournament();
  }

  public quit(): boolean {
    return this.state.quitTournament();
  }

  public claimReward(): boolean {
    return this.state.claimReward();
  }

  public startRegistration(): boolean {
    return this.state.startRegistration();
  }

  public start(): boolean {
    return this.state.startTournament();
  }

  public end(): boolean {
    return this.state.endTournament();
  }
}
