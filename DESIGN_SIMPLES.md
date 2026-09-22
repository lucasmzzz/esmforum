# Análise de Design Simples (YAGNI) - ESM Forum

A prática de *Simple Design* (Design Simples) do Extreme Programming prega que o código deve passar em todos os testes, expressar a intenção do desenvolvedor, não conter duplicações e ter o mínimo de classes e métodos possíveis (YAGNI - *You Aren't Gonna Need It*).

## 1. Aderência ao Design Simples no Backend Atual

Ao analisar as rotas principais (`routes/perguntas.js` e `routes/respostas.js`), o sistema demonstra forte aderência aos princípios YAGNI:

- **Ausência de Over-engineering:** O projeto conecta-se diretamente ao SQLite e executa operações via repositórios leves. Não há a criação de múltiplas camadas desnecessárias de abstração (como Service Layers pesadas, DTOs ou interfaces complexas) que são comuns em arquiteturas Enterprise, mas que seriam um exagero (BDUF - *Big Design Up Front*) para um fórum minimalista de perguntas e respostas.
- **Rotas Coesas:** As funções de callback do Express nas rotas são curtas e delegam a responsabilidade de acesso a dados diretamente de forma funcional.

## 2. Oportunidades de Simplificação

Ainda sob a ótica do XP, identificam-se oportunidades de refatoração contínua para evitar duplicação estrutural à medida que novas features entram:

- **Tratamento de Exceções Centralizado:** Em vez de utilizar blocos `try/catch` redundantes em todos os controladores de rotas devolvendo `res.status(500)`, podemos simplificar criando um *Middleware de Error Handling* global no Express. Isso remove código repetido das rotas.
- **Validação Simplificada:** A validação de payloads de entrada (ex: garantir que a pergunta tem título e texto) pode ser extraída das rotas de perguntas/respostas para middlewares enxutos de validação, mantendo o controlador focado estritamente na regra de negócio central, garantindo o SRP (Single Responsibility Principle) e simplificando a legibilidade da rota.