import express from 'express';
import cors from 'cors'

import routes from './routes';
import './database';

const port = process.env.PORT || 3333;

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`)
});