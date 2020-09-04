import Rental from '../models/Rental';

class RentalController {
  async index(req, res) {
    try {
      if (req.params.code) {
        const rental = await Rental.findOne({ where: { code: req.params.code } });

        return res.json({ rental });
      } else {
        const rentals = await Rental.findAll();

        return res.json({ rentals });
      }
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao obter as locações' });
    }
  }

  async store(req, res) {
    try {
      const rentalExists = await Rental.findOne({ where: { code: req.body.code } });

      if (rentalExists) return res.status(400).json({ message: 'Locação já existe' });

      const {
        code,
        init_date,
        finish_date,
        total_price,
        rental_status
      } = await Rental.create(req.body);

      return res.json({
        message: 'Locação cadastrada com sucesso',
        code,
        init_date,
        finish_date,
        total_price,
        rental_status
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao cadastrar o veículo' });
    }
  }

  async update(req, res) {
    try {
      const rental = await Rental.findOne({ where: { code: req.params.code } });

      delete req.body.code;

      const {
        code,
        init_date,
        finish_date,
        total_price,
        rental_status
      } = await rental.update(req.body);

      return res.json({
        message: 'Locação atualizada com sucesso',
        code,
        init_date,
        finish_date,
        total_price,
        rental_status
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao atualizar a locação' });
    }
  }

  async delete(req, res) {
    try {
      const rental = await Rental.findOne({ where: { code: req.params.code } });

      await rental.destroy();

      return res.json({
        message: 'Locação deletada com sucesso'
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao deletar a locação' });
    }
  }
}

export default new RentalController();