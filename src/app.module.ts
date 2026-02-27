import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { JobsMiddlewareModule } from './jobs-middleware/jobs-middleware.module';

@Module({
  imports: [JobsModule, JobsMiddlewareModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
