import { Tournament } from './Tournament';

const tournament = new Tournament();

//Preparation
tournament.claimReward();
tournament.end();
tournament.join();
tournament.quit();
tournament.start();
//change state
tournament.startRegistration();

//Registration
tournament.claimReward();
tournament.end();
tournament.join();
tournament.quit();
tournament.startRegistration();
//change state
tournament.start();

//Active
tournament.claimReward();
tournament.join();
tournament.quit();
tournament.startRegistration();
tournament.start();
//change state
tournament.end();

//Active
tournament.claimReward();
tournament.join();
tournament.quit();
tournament.startRegistration();
tournament.start();
tournament.end();
