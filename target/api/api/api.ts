export * from './fileController.service';
import { FileControllerService } from './fileController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [FileControllerService, UserControllerService];
