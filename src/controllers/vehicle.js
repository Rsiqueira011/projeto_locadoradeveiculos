import Vehicle from '../models/Vehicle';

class VehicleController {
  async index(req, res) {
    try {
      if (req.params.licensePlate) {
        const vehicle = await Vehicle.findOne({ where: { license_plate: req.params.licensePlate } });

        return res.json({ vehicle });
      } else {
        const vehicles = await Vehicle.findAll();

        return res.json({ vehicles });
      }
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao obter veículos' });
    }
  }

  async store(req, res) {
    try {
      const vehicleExists = await Vehicle.findOne({ where: { license_plate: req.body.license_plate } });

      if (vehicleExists) return res.status(400).json({ message: 'Veículo já existe' });

      const {
        license_plate,
        model,
        year,
        color,
        price_daily
      } = await Vehicle.create(req.body);

      return res.json({
        message: 'Veículo cadastrado com sucesso',
        license_plate,
        model,
        year,
        color,
        price_daily
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao cadastrar o veículo' });
    }
  }

  async update(req, res) {
    try {
      const vehicle = await Vehicle.findOne({ where: { license_plate: req.params.licensePlate } });

      delete req.body.license_plate;

      const {
        license_plate,
        model,
        year,
        color,
        price_daily
      } = await vehicle.update(req.body);

      return res.json({
        message: 'Veículo atualizado com sucesso',
        license_plate,
        model,
        year,
        color,
        price_daily
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao atualizar o cliente' });
    }
  }

  async delete(req, res) {
    try {
      const vehicle = await Vehicle.findOne({ where: { license_plate: req.params.licensePlate } });

      await vehicle.destroy();

      return res.json({
        message: 'Veículo deletado com sucesso'
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao deletar o cliente' });
    }
  }
}

export default new VehicleController();