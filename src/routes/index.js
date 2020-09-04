import { Router } from 'express';

import clientController from '../controllers/client';
import vehicleController from '../controllers/vehicle';
import rentalController from '../controllers/rental';

const routes = new Router();

// Client routes
routes.get('/cliente', clientController.index);
routes.get('/cliente/:cpf', clientController.index);
routes.post('/cliente', clientController.store);
routes.put('/cliente/:cpf', clientController.update);
routes.delete('/cliente/:cpf', clientController.delete);

// Vehicle routes
routes.get('/veiculo', vehicleController.index);
routes.get('/veiculo/:licensePlate', vehicleController.index);
routes.post('/veiculo', vehicleController.store);
routes.put('/veiculo/:licensePlate', vehicleController.update);
routes.delete('/veiculo/:licensePlate', vehicleController.delete);

// Rental routes
routes.get('/locacao', rentalController.index);
routes.get('/locacao/:code', rentalController.index);
routes.post('/locacao', rentalController.store);
routes.put('/locacao/:code', rentalController.update);
routes.delete('/locacao/:code', rentalController.delete);

export default routes;