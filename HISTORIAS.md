# Histórias de Usuário e Priorização - ESM Forum

## Priorização e Justificativa

As três funcionalidades escolhidas foram priorizadas na seguinte ordem, visando a entrega contínua de valor estrutural para o fórum:

1. **Categorização de perguntas (Tags):** Prioridade Máxima. A taxonomia é a base estrutural de um fórum. É crucial que a categorização exista desde o início para que o banco de dados seja povoado de forma organizada, evitando retrabalho futuro de reclassificação.
2. **Busca de perguntas por palavra-chave:** Prioridade Alta. Assim que o conteúdo começa a crescer, a navegação manual torna-se inviável. A busca é o principal motor de engajamento para usuários que desejam tirar dúvidas rápidas sem duplicar perguntas.
3. **Sistema de votação (upvote/downvote):** Prioridade Média. Embora seja essencial para a qualidade da comunidade (curadoria descentralizada), depende de um volume preexistente de perguntas e respostas para fazer sentido. 

---

## História 1: Categorização de Perguntas (Tags)

**Como** usuário do fórum,  
**Eu quero** adicionar tags temáticas (ex: react, nodejs, carreira) ao criar uma pergunta,  
**Para** que minha dúvida seja classificada e encontrada facilmente por especialistas naquele assunto.

**Critérios de Aceitação:**
- [ ] O formulário de criação de pergunta deve possuir um campo para inserção de até 3 tags.
- [ ] As tags devem ser exibidas visualmente (como "pílulas") abaixo do título da pergunta na listagem principal e na página de detalhes.
- [ ] Ao clicar em uma tag na página inicial, a listagem deve ser filtrada para mostrar apenas perguntas com a respectiva tag.
- [ ] As tags devem ser armazenadas em minúsculas e sem espaços para evitar duplicatas semânticas (ex: "Node.js" vira "nodejs").

---

## História 2: Busca por Palavra-Chave

**Como** usuário do fórum (logado ou anônimo),  
**Eu quero** pesquisar por palavras-chave em uma barra de busca,  
**Para** encontrar rapidamente perguntas anteriores que já possam ter resolvido a minha dúvida.

**Critérios de Aceitação:**
- [ ] O cabeçalho da aplicação deve exibir uma barra de busca global.
- [ ] A busca deve realizar a varredura verificando correspondências tanto no título quanto no corpo da pergunta.
- [ ] A tela de resultados deve exibir a lista de perguntas correspondentes ordenada da mais recente para a mais antiga.
- [ ] Se nenhum resultado for encontrado, o sistema deve exibir uma mensagem amigável: "Nenhuma pergunta encontrada para sua busca" com um botão "Fazer uma nova pergunta".

---

## História 3: Sistema de Votação (Upvote/Downvote)

**Como** usuário autenticado do fórum,  
**Eu quero** votar positivamente ou negativamente em perguntas,  
**Para** destacar o conteúdo de alta qualidade e ocultar conteúdos irrelevantes.

**Critérios de Aceitação:**
- [ ] Cada pergunta na listagem e na página de detalhes deve exibir botões de upvote (seta para cima) e downvote (seta para baixo) ao lado do contador de pontuação.
- [ ] O sistema deve impedir que usuários não autenticados votem (redirecionando-os para o login).
- [ ] Um usuário só pode registrar um voto ativo por pergunta. Clicar novamente no mesmo botão desfaz o voto (retorna a pontuação ao estado neutro do usuário).
- [ ] Clicar no botão oposto inverte o voto (ex: de upvote para downvote, alterando o saldo total apropriadamente).