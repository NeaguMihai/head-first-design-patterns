import { Logger } from '../shared/logger';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class WeatherDisplay1 implements Observer<WeatherData> {
  update(data: WeatherData) {
    Logger.log(`Temperature: ${data.temperature}`, 'WeatherDisplay1');
  }
}
