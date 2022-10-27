import { Controller, Get } from "@nestjs/common"
import { AuthRole } from "shared-lib/src/auth/AuthRole"
import { AppService } from "./app.service"

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get("hello")
    getHello() {

        console.log("Auth role is: " + AuthRole.USER)

        return "Hello World!"
    }

}
