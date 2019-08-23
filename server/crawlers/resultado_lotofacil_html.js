/**
 * Função irá baixar o ZIP com todos os resultados da lotofácil
 * e irá substituir (ou incluir) os arquivos na pasta public/resultados/
 * toda segunda, quarta e sexta será executada
 */
const resultado_lotofacil_html = () => {

    const Crawler = require('crawler');

    //url com todos os resultados
    const url = 'http://www1.caixa.gov.br/loterias/_arquivos/loterias/D_lotfac.zip';
    const fs = require('fs');

    const c = new Crawler({
        enconding: null,
        jQuery: false,
        callback: (err, res, done) => {
            if(err){
               return console.error(err);
            }

            fs.createWriteStream('public/resultados/'+res.options.filename).write(res.body);
            
            done();
        }
    });

    c.queue({
        uri: url,
        filename: 'D_lotfac.zip'
    });
    
};