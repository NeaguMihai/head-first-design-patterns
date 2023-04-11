import { WeatherDataSubject } from './WeatherDataSubject';
import { WeatherDisplay1 } from './WeatherDisplay1';
import { WeatherDisplay2 } from './WeatherDisplay2';
import WeatherStation from './WeatherStation';

const weatherDataSubject = new WeatherDataSubject();

const weatherStation = new WeatherStation(weatherDataSubject);

const display1 = new WeatherDisplay1();

weatherDataSubject.subscribe(display1);

weatherStation.start();

const display2 = new WeatherDisplay2();

weatherDataSubject.subscribe(display2);

setTimeout(() => {
  weatherDataSubject.unsubscribe(display1);
}, 5000);
