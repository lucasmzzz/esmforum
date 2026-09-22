```markdown
# Planejamento Ágil - Metodologia e Justificativa

Para o desenvolvimento das novas funcionalidades do ESM Forum, optamos pela adoção de um board estruturado no modelo **Kanban**.

## 1. Escolha do Processo: Kanban

O Kanban foi escolhido em detrimento do Scrum puro pelos seguintes motivos arquiteturais e de fluxo de trabalho:

- **Natureza das Demandas:** O escopo atual é composto por 5 funcionalidades independentes (Busca, Votação, Tags, Perfil e Notificações). O Kanban foca no fluxo contínuo de entrega de valor, permitindo puxar (*pull system*) cada feature de forma isolada sem a sobrecarga de planejar *Sprints* de tamanho fixo.
- **Redução de Overhead:** Em um contexto de equipe reduzida (ou desenvolvedor individual), os ritos ágeis do Scrum (Sprint Planning, Review, Retrospective) geram um overhead administrativo que não se justifica. O Kanban oferece visibilidade imediata do progresso e identificação de gargalos de forma mais leve.
- **Flexibilidade:** Se a prioridade do cliente mudar repentinamente (ex: Notificações passarem a ser mais urgentes que Votação), o Kanban permite a repriorização do Backlog instantaneamente, sem quebrar o ciclo de uma Sprint em andamento.

## 2. Estruturação do Board

O GitHub Projects foi configurado com as seguintes raias (colunas):
1. **Backlog:** Repositório de todas as funcionalidades mapeadas e priorizadas pelo cliente.
2. **To Do:** Tarefas prontas para serem iniciadas na iteração atual.
3. **In Progress:** Código ativamente em desenvolvimento (Work In Progress limitado).
4. **Review:** Funcionalidade em fase de testes, Code Review ou homologação.
5. **Done:** Funcionalidade validada, integrada e finalizada.