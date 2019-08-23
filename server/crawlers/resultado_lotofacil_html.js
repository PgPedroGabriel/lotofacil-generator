/**
 * Função irá baixar o ZIP com todos os resultados da lotofácil
 * e irá substituir (ou incluir) os arquivos na pasta public/resultados/
 * toda segunda, quarta e sexta será executada
 */
const resultado_lotofacil_html = () => {

    const Crawler = require('crawler');

    console.log('entrou');

    //url com todos os resultados
    const url = 'http://www1.caixa.gov.br/loterias/_arquivos/loterias/D_lotfac.zip';
    const fs = require('fs');
    const AdmZip = require('adm-zip');

    const c = new Crawler({
        enconding: null,
        jQuery: false,
        callback: (err, res, done) => {
            if(err){
               return console.error(err);
            }

            let arquivo = `public/resultados/${res.options.filename}`;
            fs.createWriteStream(arquivo).write(res.body, (err2) => {
                if(err2){
                    return console.error(err2);
                }
                
                console.log('Adicionou o arquivo');
                /*
                const ZIP = new AdmZip(arquivo);

                ZIP.extractAllTo('public/resultados/', true);
            
                console.log('Arquivos extraidos');
                */
            });
            

            done();
        }
    });

    c.queue({
        uri: url,
        filename: 'D_lotfac.zip',
        headers: {
            'Cookie': 'security=true;',
        }
    });

};

module.exports = resultado_lotofacil_html;