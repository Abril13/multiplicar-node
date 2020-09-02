const argv = require('./config/yargs.js').argv
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('comando no reconocido');
}
//let base = '9';
// console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv);
//console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];