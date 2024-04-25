import { Router } from 'express';
import { Controller } from './controller';

const routes = Router();

routes.post('/publish', Controller.publish);
routes.post('/subscribe', Controller.subscribe);

export { routes };
