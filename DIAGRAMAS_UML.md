# Diagramas UML - ESM Forum

## A. Diagrama de Classes
*Representa a estrutura de dados e as associações entre entidades, contemplando as novas funcionalidades de Votação e Tags.*

```mermaid
classDiagram
    class Usuario {
        +int id
        +String nome
        +String email
        +String senhaHash
        +Data dataCadastro
    }
    
    class Pergunta {
        +int id
        +String titulo
        +String corpo
        +int pontuacao
        +Data dataCriacao
    }
    
    class Resposta {
        +int id
        +String corpo
        +Data dataCriacao
        +bool aceita
    }
    
    class Tag {
        +int id
        +String nome
    }
    
    class Voto {
        +int id
        +int valor
        +Data dataVoto
    }

    Usuario "1" -- "*" Pergunta : cria
    Usuario "1" -- "*" Resposta : publica
    Usuario "1" -- "*" Voto : realiza
    
    Pergunta "1" -- "*" Resposta : contem
    Pergunta "1" -- "*" Voto : recebe
    Pergunta "*" -- "*" Tag : classificada em
```

## B. Diagrama de Sequência
*Modela a interação sistêmica correspondente ao Caso de Uso: Votar em Pergunta (Fluxo de Voto e Inversão).*

```mermaid
sequenceDiagram
    actor U as Usuário
    participant F as Frontend (React)
    participant A as API (Node.js)
    participant B as Banco (SQLite)

    U->>F: Clica em Upvote
    F->>A: POST /perguntas/{id}/voto (tipo: 1)
    activate A
    
    A->>B: SELECT voto FROM votos WHERE usuario_id = x AND pergunta_id = y
    activate B
    B-->>A: Retorna (Nulo ou Voto Existente)
    deactivate B

    alt Voto não existe
        A->>B: INSERT INTO votos (valor: 1)
    else Voto oposto existe (Downvote prévio)
        A->>B: UPDATE votos SET valor = 1
    else Voto idêntico existe
        A->>B: DELETE FROM votos
    end
    
    A->>B: UPDATE perguntas SET pontuacao = (soma dos votos)
    A-->>F: HTTP 200 {novaPontuacao, statusVoto}
    deactivate A
    
    F-->>U: Atualiza contador na interface
```

## C. Diagrama de Atividades
*Modela o fluxo lógico de publicação de uma pergunta incluindo a nova funcionalidade de Categorização (Tags).*

```mermaid
flowchart TD
    A([Início: Clicar em Nova Pergunta]) --> B[Preencher Título e Corpo]
    B --> C{Deseja adicionar Tags?}
    
    C -- Sim --> D[Digitar nome da Tag]
    D --> E{Limite de 3 tags atingido?}
    E -- Não --> D
    E -- Sim --> F
    
    C -- Não --> F[Clicar em Publicar]
    
    F --> G{Campos obrigatórios preenchidos?}
    G -- Não --> H[Exibir mensagem de erro]
    H --> B
    
    G -- Sim --> I[Salvar Pergunta no Banco]
    I --> J{Possui Tags informadas?}
    
    J -- Sim --> K[Associar Tags à Pergunta]
    K --> L
    J -- Não --> L[Redirecionar para página da Pergunta]
    
    L --> M([Fim])
```

## D. Diagrama de Estados
*Modela o ciclo de vida e os estados possíveis do objeto principal do domínio: A Pergunta.*

```mermaid
stateDiagram-v2
    [*] --> Rascunho : Usuário inicia digitação
    Rascunho --> Publicada : Clique em Publicar
    Publicada --> EmDiscussao : Recebe a 1ª resposta ou Voto
    EmDiscussao --> EmDiscussao : Recebe novas respostas/votos
    EmDiscussao --> Solucionada : Autor marca resposta como Aceita
    Publicada --> Bloqueada : Violação de regras (Moderação)
    EmDiscussao --> Bloqueada : Violação de regras (Moderação)
    Bloqueada --> Publicada : Revisão aprovada
    Solucionada --> [*]
```