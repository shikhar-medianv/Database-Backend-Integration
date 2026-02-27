import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IdException } from "./id-exception";
import { error } from "console";


@Catch(IdException)
export class IdExceptionFilter implements ExceptionFilter {
    catch(exception: IdException, host: ArgumentsHost) {
        const body = {
            message: exception.message,
            error: "Id Error"
        }
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()

        response.status(HttpStatus.BAD_REQUEST).json(body)
    }
}
