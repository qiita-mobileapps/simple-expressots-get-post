import { BaseController, StatusCode } from "@expressots/core";
import { Response } from "express";
import { AppUseCase } from "./app.usecase";
import { Get, Post, body, controller, response } from "@expressots/adapter-express";
import { IUserRequestDTO, IUserResponseDTO } from "./user.dto"

@controller("/")
export class AppController extends BaseController {
    constructor(private appUseCase: AppUseCase) {
        super();
    }

    @Get("/")
    execute(@response() res: Response) {
        return res.send(this.appUseCase.execute());
    }

    @Post("user")
    async executePost(
        @body() payload: IUserRequestDTO,
        @response() res: Response
    ): Promise<IUserResponseDTO> {
        console.log("body: ", payload);
        const result: IUserResponseDTO = this.appUseCase.executePost(payload);
        return this.callUseCase(
            result,
            res,
            StatusCode.Created,
        );
    }
}

