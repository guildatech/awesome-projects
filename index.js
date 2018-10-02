const express = require('express');

const { getProjects, getProject } = require('./lib/getProjects');

const app = express();

//API endpoints
app.get('/api/v1/projetos', (req, res) => {
    getProjects()
        .then(data => {
    res.json(JSON.stringify(data));
})});

app.get('/api/v1/projeto/:id', (req, res) => {
    // Get projeto
    if (projeto) {
        res.json(projeto);
        return;
    }
    res.status(404).json( { message: 'Desculpa. Projeto não encontrado.' });
})

var server = app.listen(3000, () => console.log('app listening on port %d', server.address().port))