// import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { EndController } from './endPoint.controller';
import { EndService } from './endPoint.service';

import { HttpModule } from '@nestjs/axios';
// import { AppService } from './app.service';

@Module({
    imports: [HttpModule],
    controllers: [EndController],
    providers: [EndService],
})
export class EndModule { }
