import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndModule } from './modules/endPoint.module';
import { HttpModule } from '@nestjs/axios/dist';
// import { EndController } from './modules/endPoint.controller';
// import { EndService } from './modules/endPoint.service';

@Module({
  imports: [SharedModule, EndModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
