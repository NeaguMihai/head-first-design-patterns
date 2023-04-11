import { Logger } from '../shared/logger';
import { Espresso } from './beverages';
import { Mocha, Soy } from './condiments';

const bev = new Espresso();

Logger.log(`${bev.getDescription()} $${bev.cost()}`);

const dec = new Mocha(bev);

Logger.log(`${dec.getDescription()} $${dec.cost()}`);

const dec2 = new Soy(dec);

Logger.log(`${dec2.getDescription()} $${dec2.cost()}`, 'Beverage');
Logger.error({ asdsad: 'asdasdsa' }, 'Beverage');
