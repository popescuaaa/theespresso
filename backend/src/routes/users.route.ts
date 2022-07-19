import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Routes {
  private readonly _path: string = '/users';
  private readonly _router: Router;
  private readonly _usersController: UsersController;

  constructor() {
    this._router = Router();
    this._usersController = new UsersController();

    this.initializeRoutes();
  }

  public get path() {
    return this._path;
  }

  public get router() {
    return this._router;
  }

  public get usersController() {
    return this._usersController;
  }

  private initializeRoutes() {
    this.router.get('/', this.usersController.getUsers);
    this.router.get('/:id(\\d+)', this.usersController.getUserById);
    this.router.post('/', validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    this.router.put('/:id(\\d+)', validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    this.router.delete('/:id(\\d+)', this.usersController.deleteUser);
  }
}

export default UsersRoute;
