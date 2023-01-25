import { Injectable } from '@nestjs/common';
import { DbService } from './shared';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService) { }
  async createList(name: string): Promise<string> {
    const pattern = /^[a-zA-Z0-9]*$/;
    if (pattern.test(name) && name.length >= 5 && name.length <= 20) {
      const result = await this.db.create(name, []);
      return `${JSON.stringify(result)}`;
    }
    return "invalid name";
  }

  async addToList(name: string, data: Array<string>): Promise<string> {
    console.log(data);
    return this.db.update(name, data);
  }
}
