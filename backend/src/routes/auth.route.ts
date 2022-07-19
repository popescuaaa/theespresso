import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class AuthRoute implements Routes {
  private readonly _path: string = '/';
  private readonly _router: Router;
  private readonly _authController: AuthController;

  constructor() {
    this._router = Router();
    this._authController = new AuthController();
    
    this.initializeRoutes();
  }

  public get path() {
    return this._path;
  }

  public get router() {
    return this._router;
  }

  public get authController() {
    return this._authController;
  }

  private initializeRoutes() {
    this._router.post('/signup', validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this._router.post('/login', validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
    this._router.post('/logout', authMiddleware, this.authController.logOut);
  }
}

export default AuthRoute;
