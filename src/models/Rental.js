import Sequelize, { Model } from 'sequelize';

class Rental extends Model {
  static init(sequelize) {
    super.init(
      {
        code: Sequelize.STRING,
        init_date: Sequelize.DATE,
        finish_date: Sequelize.DATE,
        total_price: Sequelize.FLOAT,
        rental_status: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Rental;