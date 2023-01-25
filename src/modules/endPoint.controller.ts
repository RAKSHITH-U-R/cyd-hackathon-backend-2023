import { Controller, Get, Query } from '@nestjs/common';
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
}
