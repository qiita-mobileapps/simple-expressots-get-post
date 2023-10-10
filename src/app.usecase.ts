import { provide } from "inversify-binding-decorators";
import { IUserRequestDTO, IUserResponseDTO } from "./user.dto"

@provide(AppUseCase)
export class AppUseCase {
    execute() {
        return "Hello from ExpressoTS!";
    }

    executePost(data: IUserRequestDTO): IUserResponseDTO {
        return {
            name: data.name,
            email: data.email,
            status: "Success"
        };
    }

}
