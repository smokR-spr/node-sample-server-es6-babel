import express from 'express';

export class BaseController {
    constructor(app, basePath) {
        this._base = basePath;
        this._router = express.Router();
        this.registerRoutes(app);
        app.use(basePath, this._router);
    }

    get basePath() {
        return this._base;
    }

    get router() {
        return this._router;
    }

    /**
     * To be overridden in child class
     * routes in the form
     * {
     *     path: '/',
     *     action: 'methodName',
     *     method: 'httpMethod'
     * }
     */
    get routes() {
        return [];
    }

    registerRoutes(app) {
        for(let {path, action, method} of this.routes) {
            this.router[method](path, (req, res) => {
                this[action](req, res);
            });
        }
    }
}