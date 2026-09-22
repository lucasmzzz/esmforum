# Análise SOLID no Código Existente - ESM Forum

## A. Pontos Positivos (Princípios Respeitados)

1. **Uso de Middlewares no Express (OCP - Open/Closed Principle)**
   * **Trecho:** `app.use(express.json());` e rotas definidas via `app.use('/perguntas', rotasPerguntas)`.
   * **Justificativa:** O framework Express permite estender o comportamento da aplicação (adicionando novos middlewares de autenticação ou log) sem modificar o núcleo do servidor, respeitando o Princípio do Aberto/Fechado.

2. **Isolamento da Configuração do Banco (SRP - Single Responsibility Principle)**
   * **Trecho:** Módulo `database.js` ou configuração do SQLite isolada em variáveis no `server.js`.
   * **Justificativa:** A responsabilidade de instanciar a conexão com o banco de dados fica separada das rotas, possuindo uma única razão para mudar (ex: troca de driver ou credenciais).

3. **Injeção Primitiva de Parâmetros (DIP - Dependency Inversion Principle)**
   * **Trecho:** Callbacks nas rotas que recebem `(req, res)` providos pelo framework.
   * **Justificativa:** Os controladores dependem da abstração de requisição e resposta do Express, não da implementação de baixo nível do servidor HTTP nativo do Node.js.

## B. Oportunidades de Melhoria (Violações)

1. **Rotas com Múltiplas Responsabilidades (Violação do SRP)**
   * **Trecho:** `rotas.post('/', (req, res) => { const db = getDb(); db.run("INSERT INTO..."); res.send(); })`
   * **Justificativa:** A rota lida simultaneamente com HTTP (Request/Response), lógica de negócio (validação dos campos) e acesso direto a dados (SQL). Deveria ser separada em Controller, Service e Repository.

2. **Acoplamento Direto com SQLite (Violação do DIP)**
   * **Trecho:** Controladores importando diretamente `require('sqlite3')` ou instanciando queries SQL literais.
   * **Justificativa:** O domínio de negócio está fortemente acoplado a um banco de dados específico. Se o projeto migrar para PostgreSQL, a lógica de negócio quebrará. Deve-se inverter a dependência criando uma interface (Contrato) de Repositório.