# Implementação SOLID - ESM Forum

## Funcionalidade Implementada
**Busca de Perguntas por Palavra-Chave** (Prioridade Alta definida na Parte 2). 

## Aplicação dos Princípios SOLID

1. **Single Responsibility Principle (SRP)**
   O código foi fatiado em três camadas estritas:
   - `PerguntaController`: Responsável apenas por processar requisições HTTP e devolver respostas JSON.
   - `BuscaPerguntaService`: Contém apenas as regras de negócio (ex: validação do tamanho mínimo do termo).
   - `PerguntaRepository`: Oculta a complexidade do banco de dados e contém apenas instruções SQL.

2. **Dependency Inversion Principle (DIP)**
   O serviço `BuscaPerguntaService` não importa o banco de dados. Ele recebe um `perguntaRepository` genérico via construtor. Isso permite que, em testes unitários, um repositório *Mock* (em memória) seja injetado sem alterar a regra de negócio.

3. **Open/Closed Principle (OCP)**
   A estrutura baseada em injeção de dependências permite que o sistema seja estendido sem modificação. Podemos criar novos serviços (ex: `FiltroTagService`) e injetá-los no controlador sem reescrever as lógicas de banco de dados ou de rotas existentes.