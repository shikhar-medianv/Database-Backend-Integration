import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JobsMiddlewareController } from './jobs-middleware.controller';
import { jobsMiddlewareService } from './jobs-middleware.service';

@Module({
    controllers: [JobsMiddlewareController],
    providers: [jobsMiddlewareService]
})
export class JobsMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
         
    }
}
