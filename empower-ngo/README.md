# 🌍 EmpowerNGO - Single Page Application (SPA)

> Plataforma web desenvolvida para conectar voluntários e doadores a iniciativas sociais de Educação e Assistência Básica, construída com arquitetura SPA utilizando Vanilla JavaScript.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🎯 Sobre o Projeto

A **EmpowerNGO** é uma aplicação web focada em impacto social. O grande diferencial técnico deste projeto é sua arquitetura **Single Page Application (SPA)** construída do zero, sem o uso de frameworks modernos (como React ou Angular). Toda a reatividade, roteamento e manipulação de estado são gerenciados puramente com Vanilla JavaScript, demonstrando forte domínio sobre os fundamentos da linguagem, Web APIs e manipulação do DOM.

## 🚀 Funcionalidades e Destaques Técnicos

*   **Roteamento Dinâmico (Hash Router):** Navegação fluida entre as páginas (Início, Projetos e Cadastro) sem recarregamento da aba (Reload), interceptando o evento `hashchange`.
*   **Componentização e Template Literals:** Renderização dinâmica de cards de projetos a partir de um banco de dados simulado (Mock) em Arrays, otimizando a manutenção do código.
*   **Gerenciamento de Estado (LocalStorage):** Persistência de dados de cadastro no disco do navegador utilizando `JSON.stringify` e `JSON.parse`. A aplicação conta com um contador reativo na tela inicial que se atualiza automaticamente a cada novo registro.
*   **Event Delegation:** Arquitetura de eventos de alta performance, escutando interações no escopo global para garantir que elementos injetados dinamicamente mantenham sua reatividade.
*   **Validação de Formulário Customizada (UX):** Sequestro dos eventos nativos de erro (`invalid`) para injeção programática de feedbacks visuais (bordas vermelhas e mensagens amigáveis) diretamente na árvore do DOM.
*   **Máscaras de Input em Tempo Real:** Tratamento de dados (CPF, Telefone, CEP) via Expressões Regulares (Regex) durante a digitação.
*   **Alertas Assíncronos Profissionais:** Integração com a biblioteca externa **SweetAlert2** para modais não-bloqueantes e responsivos.

---

## 📁 Estrutura e Modularização

O código JavaScript foi estruturado com base no princípio de alta coesão e baixo acoplamento, dividido em domínios arquitetônicos:

```text
/
├── index.html       # Arquivo mestre (Root)
├── css/
│   └── style.css    # Estilização responsiva e estados de validação
├── img/             # Assets da aplicação
└── js/
    ├── spa.js       # Motor de roteamento, estado global e renderização de views
    └── mascaras.js  # Lógica de interatividade, regex, LocalStorage e eventos

    Este projeto foi fundamental para consolidar os conhecimentos em Engenharia de Software focada no Front-end. A experiência de estruturar o ciclo de vida da aplicação, resolver gargalos de roteamento móvel (Z-index/Menu) e dessincronização de estado no recarregamento (F5) forjou uma visão analítica sobre o funcionamento interno dos navegadores e da manipulação do Document Object Model (DOM).