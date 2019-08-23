const public = app => {

    app.get('/', (req, res) => {
        res.sendFile(process.cwd() + '/public/index.html');
    });

    app.get('/resultados', (req, res) => {
        res.sendFile(process.cwd() + '/public/resultados/d_lotfac.htm');
    });
};

module.exports = public;