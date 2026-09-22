# Planejamento de Pair Programming (XP)

O *Pair Programming* é uma prática fundamental do Extreme Programming (XP) que melhora a qualidade do código, distribui o conhecimento do domínio e reduz bugs por meio de revisão contínua. 

*Nota de Adaptação Didática: Como este projeto está sendo executado em formato individual, este documento descreve a estratégia que seria aplicada caso houvesse um par disponível para o desenvolvimento remoto.*

## 1. Ferramentas Utilizadas
- **VS Code Live Share:** Ferramenta principal para edição simultânea de código. Permite que ambos os desenvolvedores naveguem pelos arquivos do projeto (backend e frontend) sem a latência do compartilhamento de tela tradicional.
- **Discord / Google Meet:** Utilizado para canal de voz constante durante a sessão.

## 2. Dinâmica de Rotação de Papéis
A sessão de pareamento utilizará a técnica Pomodoro (ciclos de 25 minutos) para ditar a rotação dos seguintes papéis:

- **Driver (Piloto):** Responsável por escrever o código e focar na tática imediata da implementação (sintaxe, lógica do algoritmo, digitação).
- **Navigator (Navegador):** Responsável pela revisão em tempo real, pensando de forma estratégica (arquitetura, possíveis edge cases, alinhamento com a User Story e integração com o frontend).

## 3. Estratégia de Aplicação
O pareamento seria aplicado primordialmente nas **funcionalidades de alta complexidade**, como:
1. **Notificação de novas respostas:** Devido ao acoplamento de estados assíncronos e possíveis implementações de tempo real (WebSockets ou Polling).
2. **Sistema de Votação:** Para garantir que a atomicidade no banco de dados seja pensada a duas cabeças, evitando condições de corrida (race conditions) ao contabilizar upvotes/downvotes simultâneos.