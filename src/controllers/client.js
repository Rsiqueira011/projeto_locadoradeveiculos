import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    try {
      if (req.params.cpf) {
        const client = await Client.findOne({ where: { cpf: req.params.cpf } });

        return res.json({ client });
      } else {
        const clients = await Client.findAll();

        return res.json({ clients });
      }
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao obter clientes' });
    }
  }

  async store(req, res) {
    try {
      const clientExists = await Client.findOne({ where: { cpf: req.body.cpf } });

      if (clientExists) return res.status(400).json({ message: 'Cliente já existe' });

      const {
        id, name, cpf, address,
      } = await Client.create(req.body);

      return res.json({
        message: 'Cliente cadastrado com sucesso',
        name
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao cadastrar o cliente' });
    }
  }

  async update(req, res) {
    try {
      const client = await Client.findOne({ where: { cpf: req.params.cpf } });

      const {
        name, cpf, address,
      } = await client.update(req.body);

      return res.json({
        message: 'Cliente atualizado com sucesso',
        name,
        cpf,
        address
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao atualizar o cliente' });
    }
  }

  async delete(req, res) {
    try {
      const client = await Client.findOne({ where: { cpf: req.params.cpf } });

      await client.destroy();

      return res.json({
        message: 'Cliente deletado com sucesso'
      });
    } catch (err) {
      return res.status(400).json({ message: 'Ocorreu um erro ao deletar o cliente' });
    }
  }
}

export default new ClientController();