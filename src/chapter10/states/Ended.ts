import { Logger } from '../../shared/logger';
import { Context } from '../Context';
import { State } from './State';

export class EndedState implements State {
  private context: Context;
  setContext(context: Context): void {
    this.context = context;
  }
  joinTournament(): boolean {
    Logger.error('Tournament is already ended');

    return false;
  }
  quitTournament(): boolean {
    Logger.error('Cannot quit after end');

    return false;
  }
  claimReward(): boolean {
    this.context.claim();

    return true;
  }
  startRegistration(): boolean {
    Logger.error('Cannot start registration after tournament ended');

    return false;
  }
  startTournament(): boolean {
    Logger.error('Cannot start after end');

    return false;
  }
  endTournament(): boolean {
    Logger.error('Already ended');

    return false;
  }
}
