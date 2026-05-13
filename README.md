# Projeto de Grafo em JavaScript

Projeto desenvolvido para a disciplina de Estrutura de Dados II.

O sistema implementa um grafo não direcionado utilizando lista de adjacência e possui funcionalidades básicas de manipulação e análise de grafos.

---

# Funcionalidades

- Adicionar vértice
- Adicionar aresta
- Contar laços
- Verificar se o grafo é completo
- Calcular grau de um vértice
- Encontrar caminho entre vértices
- Retornar o grafo em formato DOT
- Testes unitários das funcionalidades

---

# Tecnologias Utilizadas

- JavaScript
- Node.js
- Jest

---

# Estrutura do Projeto

```txt
grafo/
│
├── src/
    ├── grafo.js
├── testes
    ├── grafo.test.js
├── package.json
└── README.md
```

---

# Como Executar o Projeto

## 1. Instalar o Node.js

Baixe o Node.js no site oficial:

https://nodejs.org

---

## 2. Abrir o terminal na pasta do projeto

```bash
cd grafo
```

---

## 3. Instalar as dependências

```bash
npm install
```

---

## 4. Executar o programa

```bash
node grafo.js
```

---

# Como Executar os Testes

Os testes unitários foram desenvolvidos utilizando o framework Jest.

Para executar os testes:

```bash
npm test
```

---

# Testes Implementados

Foram criados testes unitários para validar todas as funcionalidades do sistema:

- Teste de adição de vértice
- Teste de adição de aresta
- Teste de contagem de laços
- Teste de verificação de grafo completo
- Teste de cálculo do grau do vértice
- Teste de busca de caminho
- Teste de geração do formato DOT

Os testes garantem que o sistema funcione corretamente e ajudam a evitar erros durante futuras modificações no código.

---

# Exemplo de Saída

```txt
===== LISTA DE ADJACÊNCIA =====
{
  A: [ 'B', 'A' ],
  B: [ 'A', 'C' ],
  C: [ 'B', 'D' ],
  D: [ 'C' ]
}

===== QUANTIDADE DE LAÇOS =====
1

===== O GRAFO É COMPLETO? =====
false

===== GRAU DO VÉRTICE A =====
2

===== CAMINHO DE A ATÉ D =====
[ 'A', 'B', 'C', 'D' ]

===== FORMATO DOT =====
graph G {
  A -- A
  A -- B
  B -- C
  C -- D
}
```

---

# Estratégia Utilizada para Encontrar Caminho

Para encontrar um caminho entre dois vértices do grafo foi utilizado o algoritmo BFS (Breadth-First Search), também conhecido como Busca em Largura.

A escolha desse algoritmo foi feita porque ele é eficiente para encontrar o menor caminho em grafos não ponderados, além de possuir implementação simples e organizada.

O algoritmo funciona explorando o grafo por níveis. Primeiro são visitados todos os vértices vizinhos do vértice inicial. Depois, são visitados os vizinhos desses vértices, e assim sucessivamente, até encontrar o destino desejado.

---

# Funcionamento da Busca em Largura (BFS)

A BFS utiliza uma estrutura de fila para controlar os caminhos que ainda serão analisados.

O funcionamento ocorre da seguinte forma:

1. O algoritmo começa no vértice inicial
2. O vértice inicial é colocado na fila
3. O primeiro elemento da fila é removido
4. Todos os vizinhos ainda não visitados são adicionados na fila
5. O processo continua até encontrar o vértice destino

Além disso, o algoritmo utiliza uma estrutura chamada Set para armazenar os vértices já visitados, evitando ciclos infinitos e visitas repetidas.

---

# Exemplo da Busca

Considerando o seguinte grafo:

```txt
A --- B --- C --- D
```

Buscando um caminho de A até D:

```txt
Passo 1:
Fila = [A]

Passo 2:
Visita A
Fila = [B]

Passo 3:
Visita B
Fila = [C]

Passo 4:
Visita C
Fila = [D]

Passo 5:
Visita D
Caminho encontrado:
A → B → C → D
```

---

# Complexidade do Algoritmo

A complexidade da Busca em Largura é:

```txt
O(V + E)
```

Onde:

- V = quantidade de vértices
- E = quantidade de arestas

Isso significa que o algoritmo percorre todos os vértices e arestas no pior caso.

---

# Representação do Grafo

O grafo foi implementado utilizando Lista de Adjacência.

Cada vértice armazena uma lista contendo seus vértices vizinhos.

Exemplo:

```txt
A → B, C
B → A
C → A
```

Essa abordagem foi escolhida porque consome menos memória em grafos esparsos e facilita operações de busca.

---

# Autor

Maria Eduarda Machado Alves
