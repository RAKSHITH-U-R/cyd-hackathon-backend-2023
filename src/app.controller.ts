import { Body, Controller, Get, Post, Query } from '@nestjs/common';
// import { get } from 'http';
import { AppService } from './app.service';
interface BodyData {
  name: string;
  data: Array<string>;

}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/createList/')
  async create(@Query('name') name: string): Promise<string> {
    return this.appService.createList(name);
  }

  @Post('/addToList/')
  async add(@Body() body: BodyData): Promise<string> {
    return this.appService.addToList(body['name'], body['data']);
  }

  @Get('/getById/')
  async get(@Query('id') id: string): Promise<string> {
    return this.appService.getList(id);
  }

}
