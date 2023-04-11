import { Observable } from './Observable';
import { WeatherData } from './WeatherData';

export class WeatherDataSubject extends Observable<WeatherData> {
  updateData(data: WeatherData) {
    this.notify(data);
  }
}
