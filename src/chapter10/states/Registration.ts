import { Logger } from '../../shared/logger';
import { Context } from '../Context';
import { ActiveState } from './Active';
import { State } from './State';

export class RegistrationState implements State {
  private context: Context;

  setContext(context: Context): void {
    this.context = context;
  }
  joinTournament(): boolean {
    this.context.inicrementRegistrations();

    return true;
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
    Logger.error('Registration is already started');

    return false;
  }
  startTournament(): boolean {
    this.context.transitionTo(new ActiveState());

    return true;
  }
  endTournament(): boolean {
    Logger.error('Cannot end before start');

    return false;
  }
}
