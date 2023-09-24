import { Logger } from '../../shared/logger';
import { Context } from '../Context';
import { EndedState } from './Ended';
import { State } from './State';

export class ActiveState implements State {
  private context: Context;
  setContext(context: Context): void {
    this.context = context;
  }
  joinTournament(): boolean {
    Logger.error('Tournament is already started');

    return false;
  }
  quitTournament(): boolean {
    this.context.decrementRegistrations();

    return true;
  }
  claimReward(): boolean {
    Logger.error('Tournament is not ended yet');

    return false;
  }
  startRegistration(): boolean {
    Logger.error('Registration already ended');

    return false;
  }
  startTournament(): boolean {
    Logger.error('Tournament already started');

    return false;
  }
  endTournament(): boolean {
    this.context.transitionTo(new EndedState());

    return true;
  }
}
