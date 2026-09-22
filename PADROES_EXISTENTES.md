# Padrões de Projeto Existentes

Na arquitetura original do projeto `esmforum`, identificam-se os seguintes padrões (GoF e arquiteturais):

1. **Singleton (Parcial)**
   * **Onde:** Na instância global do framework Express (`const app = express()`) e na conexão do banco de dados SQLite.
   * **Análise:** A implementação garante que a aplicação utilize apenas um ciclo de vida do servidor e da conexão local durante a execução. Pode ser melhorada exportando a conexão do banco de um módulo dedicado que aplica o bloqueio de múltiplas instâncias formalmente.

2. **Chain of Responsibility (Middleware Pattern)**
   * **Onde:** No pipeline de rotas do Express (`app.use()`).
   * **Análise:** Uma requisição HTTP passa por uma cadeia de funções (ex: parser de JSON -> validação -> controller). Se um middleware não encerra a resposta, ele chama `next()` para passar o controle adiante. Está implementado nativamente com maestria pelo framework.