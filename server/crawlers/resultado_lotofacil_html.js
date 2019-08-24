/**
 * Função irá baixar o ZIP com todos os resultados da lotofácil
 * e irá substituir (ou incluir) os arquivos na pasta public/resultados/
 * toda segunda, quarta e sexta será executada
 */
const resultado_lotofacil_html = () => {

    const request = require('request');

    console.log('entrou');

    //url com todos os resultados
    const url = 'http://www1.caixa.gov.br/loterias/_arquivos/loterias/D_lotfac.zip';
    const fs = require('fs');
    const AdmZip = require('adm-zip');

    let arquivo = `public/resultados/D_lotfac.zip`;

    request({url: url, headers: {'Cookie': 'security=true;'}})
        .pipe(fs.createWriteStream(arquivo))
        .on('error', err => {
            console.error(err);
        })
        .on('close', () => {

            console.log('Adicionou o arquivo');
            const ZIP = new AdmZip(arquivo);

            ZIP.extractAllTo('public/resultados/', true);
        
            console.log('Arquivos extraidos');

        });
};

module.exports = resultado_lotofacil_html;