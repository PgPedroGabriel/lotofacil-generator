const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


const router = express.Router();
router.use(express.static(process.cwd() + '/public'));
app.use(router);

require('./routes/index')(app);

require('./crawlers/resultado_lotofacil_html')();

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Running on port ${port}/`);
});
  