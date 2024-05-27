const express = require('express');
const { setupLogger } = require('./setups/logger');
const { setupProxy } = require('./setups/proxyMiddleware');
const { ROUTES } = require('./routes')

const app = express();

setupLogger(app);
setupProxy(app, ROUTES);


const port = 3000

// app.get('/', (req, res) => {
//     res.json({
//         data: {},
//         message: 'hello from api gateway sample'
//     })
// })

app.listen(port, console.log(
    `server started on http://localhost:${port}`
))