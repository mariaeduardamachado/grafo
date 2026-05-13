# Projeto de Grafo em JavaScript

Projeto desenvolvido para a disciplina de Representação de Conhecimento e Engenharia Ontológica.

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

---

# Tecnologias Utilizadas

- JavaScript
- Node.js

---

# Estrutura do Projeto

```txt
grafo/
│
├── grafo.js
└── README.md
```

---

# Como Executar

## 1. Instalar o Node.js

Baixe o Node.js no site oficial:

https://nodejs.org

---

## 2. Abrir o terminal na pasta do projeto

Exemplo:

```bash
cd grafo
```

---

## 3. Executar o projeto

```bash
node grafo.js
```

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

O algoritmo utilizado foi a Busca em Largura (BFS - Breadth First Search).

A BFS percorre o grafo visitando primeiro os vértices mais próximos do vértice inicial. Para isso, utiliza uma fila para armazenar os caminhos possíveis.

Etapas do algoritmo:

1. Começa no vértice inicial
2. Visita todos os vizinhos
3. Armazena os caminhos encontrados
4. Continua até encontrar o vértice destino

Essa estratégia foi escolhida porque encontra o menor caminho em grafos não ponderados.

---

# Complexidade

A complexidade do algoritmo BFS é:

```txt
O(V + E)
```

Onde:

- V = quantidade de vértices
- E = quantidade de arestas

---

# Autor

Maria Eduarda Machado Alves
