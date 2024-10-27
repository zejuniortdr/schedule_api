const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./src/routes/event');
const setupSwagger = require('./swagger');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/events')

.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));


// Usa as rotas de eventos
app.use('/events', eventRoutes);


// Configuração do Swagger
setupSwagger(app);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Documentação da API em http://localhost:${port}/docs`);
});
