
const routes = app => {

    app.use((req, res, next) => {
    	req.getBaseUrl = () => {
    		return req.protocol + '://' + req.get('host');
    	};
    	return next();
    });

    require('./public')(app);

};

module.exports = routes;