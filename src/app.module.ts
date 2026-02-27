import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { JobsMiddlewareModule } from './jobs-middleware/jobs-middleware.module';
import { JobsInterceptorModule } from './jobs-interceptor/jobs-interceptor.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [JobsModule, JobsMiddlewareModule, JobsInterceptorModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
