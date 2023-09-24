import { Context } from '../Context';

export interface State {
  setContext(context: Context): void;
  joinTournament(): boolean;
  quitTournament(): boolean;
  claimReward(): boolean;
  startRegistration(): boolean;
  startTournament(): boolean;
  endTournament(): boolean;
}
