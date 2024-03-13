import express, { Router } from "express";

interface ServerOptions {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();

  readonly PORT: number;
  readonly routes: Router;

  constructor(options: ServerOptions) {
    const { port = 3100, routes } = options;

    this.PORT = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(this.routes);

    this.app.listen(this.PORT, () => {
      console.log(`Server running at port: ${this.PORT}`);
    });
  }
}
