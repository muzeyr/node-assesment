const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;
const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false }));
app.get('/', (req, res) => res.send('Hello World..!'));
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
});
