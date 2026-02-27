import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RecentSearchInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>){
        return next.handle()
    }
}