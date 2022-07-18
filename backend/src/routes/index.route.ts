import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';

class IndexRoute implements Routes {
  private readonly _path: string = '/';
  private readonly _router: Router;
  private readonly _indexController: IndexController;

  public get path() {
    return this._path;
  }

  public get router() {
    return this._router;
  }

  public get indexController() {
    return this._indexController;
  }

  constructor() {
    this._router = Router();
    this._indexController = new IndexController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this._indexController.index);
  }
}

export default IndexRoute;
