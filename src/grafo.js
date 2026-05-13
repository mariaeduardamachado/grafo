class Grafo {
  constructor() {
    this.listaAdjacencia = {};
  }

  // Adicionar vértice
  adicionarVertice(vertice) {
    if (!this.listaAdjacencia[vertice]) {
      this.listaAdjacencia[vertice] = [];
    }
  }

  // Adicionar aresta
  adicionarAresta(origem, destino) {
    this.adicionarVertice(origem);
    this.adicionarVertice(destino);

    this.listaAdjacencia[origem].push(destino);

    // Grafo não direcionado
    if (origem !== destino) {
      this.listaAdjacencia[destino].push(origem);
    }
  }

  // Contar laços
  contarLacos() {
    let lacos = 0;

    for (let vertice in this.listaAdjacencia) {
      for (let vizinho of this.listaAdjacencia[vertice]) {
        if (vertice === vizinho) {
          lacos++;
        }
      }
    }

    return lacos;
  }

  // Verificar se o grafo é completo
  ehCompleto() {
    const vertices = Object.keys(this.listaAdjacencia);
    const totalVertices = vertices.length;

    for (let vertice of vertices) {
      const vizinhos = new Set(this.listaAdjacencia[vertice]);

      if (vizinhos.size !== totalVertices - 1) {
        return false;
      }
    }

    return true;
  }

  // Grau do vértice
  grauVertice(vertice) {
    if (!this.listaAdjacencia[vertice]) {
      return null;
    }

    return this.listaAdjacencia[vertice].length;
  }

  // Buscar caminho usando BFS
  encontrarCaminho(inicio, fim) {
    let fila = [[inicio]];
    let visitados = new Set();

    while (fila.length > 0) {
      let caminho = fila.shift();
      let vertice = caminho[caminho.length - 1];

      if (vertice === fim) {
        return caminho;
      }

      if (!visitados.has(vertice)) {
        visitados.add(vertice);

        for (let vizinho of this.listaAdjacencia[vertice]) {
          let novoCaminho = [...caminho, vizinho];
          fila.push(novoCaminho);
        }
      }
    }

    return null;
  }

  // Retornar em formato DOT
  paraDOT() {
    let resultado = "graph G {\n";

    for (let vertice in this.listaAdjacencia) {
      for (let vizinho of this.listaAdjacencia[vertice]) {

        // Evita arestas duplicadas
        if (vertice <= vizinho) {
          resultado += `  ${vertice} -- ${vizinho}\n`;
        }
      }
    }

    resultado += "}";

    return resultado;
  }
}

// Exportar a classe
module.exports = Grafo;

/* ===========================
   EXECUÇÃO DO PROGRAMA
=========================== */

const grafo = new Grafo();

grafo.adicionarAresta('A', 'B');
grafo.adicionarAresta('B', 'C');
grafo.adicionarAresta('C', 'D');
grafo.adicionarAresta('A', 'A');

// Lista
console.log("===== LISTA DE ADJACÊNCIA =====");
console.log(grafo.listaAdjacencia);

// Laços
console.log("\n===== QUANTIDADE DE LAÇOS =====");
console.log(grafo.contarLacos());

// Completo
console.log("\n===== O GRAFO É COMPLETO? =====");
console.log(grafo.ehCompleto());

// Grau
console.log("\n===== GRAU DO VÉRTICE A =====");
console.log(grafo.grauVertice('A'));

// Caminho
console.log("\n===== CAMINHO DE A ATÉ D =====");
console.log(grafo.encontrarCaminho('A', 'D'));

// DOT
console.log("\n===== FORMATO DOT =====");
console.log(grafo.paraDOT());