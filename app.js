import express from 'express';
import { TestController } from './controllers';
// import TestController from './controllers/test.controller';

let port = 3000;

let app = express();

app.get('/', function(req, res) {
    res.json({ message: '/ called' });
})

// Instantiate the controllers
new TestController(app, '/test');

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});