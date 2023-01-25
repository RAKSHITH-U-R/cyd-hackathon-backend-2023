import { Controller, Get, Query } from '@nestjs/common';
// import { get } from 'http';
import { EndService } from './endPoint.service';

@Controller()
export class EndController {
    constructor(private readonly endService: EndService) { }

    @Get('/address/')
    async getAggregate(@Query('address') address: string): Promise<string> {
        // console.log(address);
        // console.log("getAggregate controller");
        return this.endService.getAggregate(address);
    }

    @Get('/masterList')
    async integrate(): Promise<string> {
        return this.endService.integrate();
    }
}
