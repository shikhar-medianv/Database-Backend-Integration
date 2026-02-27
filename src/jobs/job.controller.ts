import { Controller, Get, Param, ParseIntPipe, UseFilters } from "@nestjs/common";
import { IdException } from "src/Custom exception/id-exception";
import { IdExceptionFilter } from "src/Custom exception/id-exception.filter";
import { JobService } from "./job.service";

@Controller("\jobs")
export class JobController {
    constructor(private readonly jobService: JobService) { }
    @Get(":id")
    @UseFilters(IdExceptionFilter)
    findJobById(@Param("id", ParseIntPipe) id: number) {
        if (id < 0) {
            throw new IdException("Invalid Id")
        }
        return { success: true, id }
    }
}