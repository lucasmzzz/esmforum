# Detalhamento de Caso de Uso

## Caso de Uso: Votar em Pergunta (Upvote/Downvote)

**Atores:** Usuário Autenticado

**Pré-condições:**
- O usuário deve possuir uma sessão ativa (logado no sistema).
- A pergunta alvo deve existir e estar visível no banco de dados.

**Fluxo Principal (Cenário de Sucesso - Primeiro Voto):**
1. O sistema exibe a interface da pergunta com os botões de votação e a pontuação atual (saldo de votos).
2. O usuário clica no botão de *upvote*.
3. O Frontend envia uma requisição assíncrona (API REST) contendo o ID da pergunta, o ID do usuário logado e o tipo de voto (positivo).
4. O Backend (API) valida o token de autenticação do usuário.
5. O Backend verifica no banco de dados que não existe registro prévio de voto deste usuário para esta pergunta.
6. O Backend insere o novo registro de voto na tabela de relacionamento.
7. O Backend recalcula a pontuação total da pergunta e retorna o novo valor atualizado.
8. O Frontend atualiza a pontuação na tela em tempo real e destaca visualmente o botão de *upvote* (indicando voto computado).

**Fluxo Alternativo 1: Usuário invertendo o voto (de Upvote para Downvote)**
*No passo 5 do fluxo principal:*
5a. O Backend verifica que já existe um voto *positivo* registrado deste usuário para esta pergunta.
5b. O Backend atualiza o registro no banco de dados, alterando o tipo de voto para *negativo*.
5c. O Backend recalcula a pontuação total (removendo +1 e aplicando -1) e retorna o novo valor.
5d. O Frontend atualiza a pontuação na tela e inverte o destaque visual (apaga o *upvote*, acende o *downvote*).

**Fluxo Alternativo 2: Usuário desfazendo o voto (Remoção)**
*No passo 5 do fluxo principal (clicando no mesmo botão já ativado):*
5a. O Backend verifica que já existe um voto idêntico ao solicitado.
5b. O Backend deleta o registro de voto da tabela de relacionamento.
5c. O Backend recalcula a pontuação total (removendo o peso do voto) e retorna o novo valor.
5d. O Frontend atualiza a tela removendo o destaque visual de todos os botões de voto.

**Pós-condições:**
- A pontuação total (saldo) da pergunta refletirá rigorosamente a soma dos votos válidos e únicos dos usuários no banco de dados.