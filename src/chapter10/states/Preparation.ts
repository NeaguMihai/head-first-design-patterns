import { Logger } from '../../shared/logger';
import { Context } from '../Context';
import { RegistrationState } from './Registration';
import { State } from './State';

export class PreparationState implements State {
  private context: Context;
  setContext(context: Context): void {
    this.context = context;
  }
  joinTournament(): boolean {
    Logger.error('Tournament is not started yet');

    return false;
  }
  quitTournament(): boolean {
    Logger.error('You are not in the tournament');

    return false;
  }
  claimReward(): boolean {
    Logger.error('Tournament is not ended yet');

    return false;
  }
  startRegistration(): boolean {
    this.context.transitionTo(new RegistrationState());

    return true;
  }
  startTournament(): boolean {
    Logger.error('Cannot start before registration');

    return false;
  }
  endTournament(): boolean {
    Logger.error('Cannot end before start');

    return false;
  }
}
