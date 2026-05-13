const Grafo = require('../src/grafo');

describe('Testes do Grafo', () => {

  let grafo;

  beforeEach(() => {
    grafo = new Grafo();
  });

  test('Adicionar vértice', () => {
    grafo.adicionarVertice('A');

    expect(grafo.listaAdjacencia['A']).toEqual([]);
  });

  test('Adicionar aresta', () => {
    grafo.adicionarAresta('A', 'B');

    expect(grafo.listaAdjacencia['A']).toContain('B');
    expect(grafo.listaAdjacencia['B']).toContain('A');
  });

  test('Contar laços', () => {
    grafo.adicionarAresta('A', 'A');

    expect(grafo.contarLacos()).toBe(1);
  });

  test('Verificar grafo completo', () => {
    grafo.adicionarAresta('A', 'B');
    grafo.adicionarAresta('A', 'C');
    grafo.adicionarAresta('B', 'C');

    expect(grafo.ehCompleto()).toBe(true);
  });

  test('Grau do vértice', () => {
    grafo.adicionarAresta('A', 'B');
    grafo.adicionarAresta('A', 'C');

    expect(grafo.grauVertice('A')).toBe(2);
  });

  test('Encontrar caminho', () => {
    grafo.adicionarAresta('A', 'B');
    grafo.adicionarAresta('B', 'C');

    expect(grafo.encontrarCaminho('A', 'C'))
      .toEqual(['A', 'B', 'C']);
  });

  test('Formato DOT', () => {
    grafo.adicionarAresta('A', 'B');

    expect(grafo.paraDOT())
      .toContain('A -- B');
  });

});