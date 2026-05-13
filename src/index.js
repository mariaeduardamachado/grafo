const Grafo = require('./grafo');

const grafo = new Grafo();

grafo.adicionarAresta('A', 'B');
grafo.adicionarAresta('B', 'C');

console.log(grafo.encontrarCaminho('A', 'C'));

console.log(grafo.paraDOT());