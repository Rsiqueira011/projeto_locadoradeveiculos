import Sequelize from 'sequelize';

import config from './config';

import Client from '../models/Client';
import Vehicle from '../models/Vehicle';
import Rental from '../models/Rental';

const models = [Client, Vehicle, Rental];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();