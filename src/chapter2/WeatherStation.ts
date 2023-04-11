import { Logger } from '../shared/logger';
import { WeatherDataSubject } from './WeatherDataSubject';
import { createInterface } from 'node:readline';

class WeatherStation {
  private weatherData: WeatherDataSubject;

  constructor(weatherDataSubject: WeatherDataSubject) {
    this.weatherData = weatherDataSubject;
  }

  public async start() {
    let command = '';

    do {
      this.weatherData.updateData({
        temperature: Math.random() * 100,
        humidity: Math.random() * 100,
        pressure: Math.random() * 100,
      });
      const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      command = await new Promise(resolve => {
        readline.question('Enter command: ', (data: string) => {
          resolve(data);
          readline.close();
        });
      });
      Logger.log(`Command: ${command}`);
    } while (command !== 'q');
    Logger.log('Exiting...');
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(0);
  }
}

export default WeatherStation;
