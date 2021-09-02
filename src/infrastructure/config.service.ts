// eslint-disable-next-line import/no-extraneous-dependencies
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export default class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    // stock the file
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  // get specific key in .env file
  get(key: string): string {
    return this.envConfig[key];
  }
}
