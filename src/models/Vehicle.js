import Sequelize, { Model } from 'sequelize';

class Vehicle extends Model {
  static init(sequelize) {
    super.init(
      {
        license_plate: Sequelize.STRING,
        model: Sequelize.STRING,
        year: Sequelize.STRING,
        color: Sequelize.STRING,
        price_daily: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Vehicle;