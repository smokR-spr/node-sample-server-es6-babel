import { BaseController } from './base.controller';

export default class TestController extends BaseController {
    constructor(app, basePath) {
        super(app, basePath);
    }

    get routes() {
        return [{
            path: '/',
            action: 'index',
            method: 'get'
        }, {
            path: '/:id',
            action: 'id',
            method: 'get'
        }];
    }

    index(req, res) {
        res.json({
            message: `${this.basePath} called`
        });
    }

    id(req, res) {
        res.json({
            message: `${this.basePath} called with id ${req.params.id}`
        });
    }
}