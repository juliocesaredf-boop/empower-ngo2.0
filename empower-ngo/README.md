# 🌍 EmpowerNGO - Single Page Application (SPA)

> Plataforma web inclusiva desenvolvida para conectar voluntários e doadores a iniciativas sociais de Educação e Assistência Básica, construída com arquitetura SPA utilizando Vanilla JavaScript.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🎯 Sobre o Projeto

A **EmpowerNGO** é uma aplicação web focada em impacto social. O grande diferencial técnico deste projeto é sua arquitetura **Single Page Application (SPA)** construída do zero, sem o uso de frameworks modernos (como React ou Angular). Toda a reatividade, roteamento, acessibilidade e manipulação de estado são gerenciados puramente com Vanilla JavaScript, demonstrando forte domínio sobre os fundamentos da linguagem, Web APIs e manipulação avançada do DOM.

## 🚀 Funcionalidades e Destaques Técnicos

*   **Acessibilidade e Inclusão (WCAG 2.1):** Uso rigoroso de landmarks HTML5 (`<header>`, `<main>`, `<nav>`), atributos WAI-ARIA (`aria-expanded`, `aria-label`, `aria-haspopup`) para tecnologias assistivas, e interface 100% operável via teclado com customização visível da propriedade `:focus`.
*   **Design System & Dark Mode:** Arquitetura CSS baseada em *Custom Properties* (Variáveis) com adaptação dinâmica e nativa ao tema escuro (`prefers-color-scheme: dark`). As paletas foram rigorosamente testadas para superar o rácio de contraste mínimo de 4.5:1 (Níveis AA e AAA).
*   **Roteamento Dinâmico (Hash Router):** Navegação fluida entre as páginas sem recarregamento da aba (Reload), reconstruindo a árvore do DOM linearmente para manter a lógica de leitura de *screen readers*.
*   **Gerenciamento de Estado (LocalStorage):** Persistência de dados de cadastro no disco do navegador utilizando `JSON.stringify` e `JSON.parse`, alimentando um contador reativo na view inicial.
*   **Validação Customizada e UX Preventiva:** Sequestro dos eventos nativos de erro (`invalid`) para injeção programática de mensagens de erro acessíveis diretamente no DOM, aliadas a máscaras de *Input* em tempo real (Regex).
*   **Grid System Responsivo:** Layout fluido construído sobre uma base de 12 colunas, adotando a metodologia *Mobile-First*.

---

## 🛠️ Performance, Build e Deploy

Para transacionar do ambiente de desenvolvimento para produção com máxima eficiência, o projeto implementou metodologias modernas de *bundling* e *CI/CD*:

*   **Bundler (Vite):** Utilizado para a minificação de HTML, CSS e JavaScript, ofuscação de variáveis e *Tree-Shaking*. A configuração gerou uma redução de aproximadamente 45% no peso total dos arquivos, incorporando *Cache Busting* (hashes criptográficos).
*   **Otimização de Assets:** Conversão de imagens estáticas para o formato **WebP** e integração de vetores escaláveis (SVG), garantindo renderização instantânea (Core Web Vitals - LCP).
*   **Integração e Entrega Contínuas (CI/CD):** Deploy automatizado configurado na **Vercel**. O *pipeline* monitora a *branch* `main` do repositório (arquitetura GitFlow) e realiza processos de compilação e publicação em contêineres na *Global Edge Network* a cada *merge* aprovado.

---

## 📁 Estrutura e Modularização

O código JavaScript foi estruturado com base no princípio de alta coesão e baixo acoplamento:

```text
/
├── index.html       # Arquivo mestre e entry-point (Root)
├── css/
│   └── style.css    # Variáveis CSS, Dark Mode, Grid e Componentes
├── img/             # Assets estáticos (WebP, SVG)
└── js/
    ├── spa.js       # Motor de roteamento, mock de dados e templates
    └── mascaras.js  # Lógica de interatividade, Regex e validação DOM
