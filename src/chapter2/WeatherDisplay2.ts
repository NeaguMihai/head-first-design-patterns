import { Logger } from '../shared/logger';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class WeatherDisplay2 implements Observer<WeatherData> {
  update(data: WeatherData) {
    Logger.log(
      `Temperature: ${data.temperature}, Humidity: ${data.humidity}, Pressure: ${data.pressure}`,
      `WeatherDisplay2`,
    );
  }
}
