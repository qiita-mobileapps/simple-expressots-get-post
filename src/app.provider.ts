import { IMiddleware, Middleware } from "@expressots/core";
import { AppExpress } from "@expressots/adapter-express";
import { provide } from "inversify-binding-decorators";
import { container } from "./app.container";

@provide(App)
export class App extends AppExpress {
    private middleware: IMiddleware;
    //private provider: IProvider;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
    }

    protected configureServices(): void {
        this.middleware.addBodyParser();
    }
}
