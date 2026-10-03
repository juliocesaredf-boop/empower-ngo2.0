/* ==========================================================================
   1. BANCO DE DADOS SIMULADO (Mock/State)
   ========================================================================== */
const dadosEducacao = [
    { titulo: "Alfabetização Cidadã", descricao: "Aulas noturnas de leitura e escrita básica para jovens e adultos.", acao: "Ser voluntário", link: "#cadastro" },
    { titulo: "Inclusão Digital", descricao: "Doação de equipamentos e ensino de lógica de programação.", acao: "Doar equipamentos", link: "#cadastro" }
];

const dadosAssistencia = [
    { titulo: "Sopa Solidária", descricao: "Distribuição de refeições quentes na região metropolitana.", acao: "Apoiar com insumos", link: "#cadastro" },
    { titulo: "Roupas de Inverno", descricao: "Arrecadação e triagem de agasalhos para pessoas em situação de rua.", acao: "Doar agasalhos", link: "#cadastro" }
];

/* ==========================================================================
   2. MOTOR DE TEMPLATES (Gerador de Componentes)
   ========================================================================== */
function gerarCardsProjetos(dados) {
    return dados.map(projeto => `
        <article class="card-projeto">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" class="btn link-spa">${projeto.acao}</a>
        </article>
    `).join('');
}

/* ==========================================================================
   3. LEITURA DE DADOS SALVOS (LocalStorage)
   ========================================================================== */
function obterTotalCadastros() {
    const historico = JSON.parse(localStorage.getItem('historicoCadastros') || '[]');
    return historico.length; 
}

/* ==========================================================================
   4. MAPEAMENTO DE ROTAS DINÂMICAS (Views da SPA)
   ========================================================================== */
const getRotas = () => ({
    '#inicio': `
        <section class="hero-apresentacao">
            <h2>Conectando Solidariedade e Necessidade</h2>
            <p>A EmpowerNGO atua como ponte entre a sua vontade de ajudar e as comunidades que mais precisam.</p>
            
            <div style="background: var(--color-bg-card); color: var(--color-text-main); padding: 15px; border-radius: 8px; margin: 20px 0; font-weight: bold; text-align: center; border: 1px dashed var(--color-primary);">
                🚀 Junte-se aos ${obterTotalCadastros()} voluntários já cadastrados!
            </div>

            <a href="#projetos" class="btn link-spa">Conheça Nosso Impacto</a>
        </section>

        <section class="quem-somos grid-container" style="margin-top: 40px;">
            <div class="grid-item texto-institucional" style="grid-column: span 12;">
                <h2>Quem Somos</h2>
                <p>Somos uma organização dedicada a transformar realidades por meio da educação e assistência básica.</p>
            </div>
        </section>
    `,

    '#projetos': `
        <section>
            <h2>Nossas Iniciativas Solidárias</h2>
            <p style="margin-bottom: 30px;">A EmpowerNGO atua em diferentes frentes para combater a desigualdade social no Brasil.</p>

            <section class="frente-atuacao">
                <h2>Frente de Educação</h2>
                <div class="cards-container">
                    ${gerarCardsProjetos(dadosEducacao)}
                </div>
            </section>

            <section class="frente-atuacao">
                <h2>Frente de Assistência Básica</h2>
                <div class="cards-container">
                    ${gerarCardsProjetos(dadosAssistencia)}
                </div>
            </section>
        </section>
    `,

    '#cadastro': `
        <section class="container-formulario">
            <h2>Faça Parte da Nossa Rede</h2>
            <p style="margin-bottom: 25px;">Preencha o formulário para se cadastrar como voluntário ou doador.</p>

            <form action="#" method="POST" class="form-cadastro" novalidate>
                <div class="grupo-input">
                    <label for="nome">Nome Completo (Mín. 3 letras):</label>
                    <input type="text" id="nome" name="nome" minlength="3" required placeholder="Digite seu nome completo">
                </div>
                <div class="grupo-input">
                    <label for="email">E-mail Institucional ou Pessoal:</label>
                    <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">
                </div>
                <div class="grupo-input">
                    <label for="cpf">CPF (Apenas números):</label>
                    <input type="text" id="cpf" name="cpf" maxlength="14" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required placeholder="Ex: 123.456.789-00">
                </div>
                <div class="grupo-input">
                    <label for="telefone">Telefone / WhatsApp:</label>
                    <input type="tel" id="telefone" name="telefone" maxlength="15" pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" required placeholder="(00) 00000-0000">
                </div>
                <div class="grupo-input">
                    <label for="cep">CEP de Residência:</label>
                    <input type="text" id="cep" name="cep" maxlength="9" pattern="\\d{5}-\\d{3}" required placeholder="00000-000">
                </div>
                <div class="grupo-input">
                    <label for="interesse">Área de Interesse:</label>
                    <select id="interesse" name="interesse" required>
                        <option value="">Selecione uma opção...</option>
                        <option value="voluntario-educacao">Voluntariado - Educação</option>
                        <option value="voluntario-assistencia">Voluntariado - Assistência</option>
                        <option value="doador-financeiro">Doador Financeiro</option>
                        <option value="doador-insumos">Doador de Insumos/Equipamentos</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-submit">Finalizar Cadastro</button>
            </form>
        </section>
    `
});

/* ==========================================================================
   5. ROTEADOR (Hash Router)
   ========================================================================== */
function renderizarPagina() {
    const palco = document.getElementById('conteudo-principal');
    if (!palco) return; 
    
    let rotaAtiva = window.location.hash || '#inicio';
    palco.innerHTML = getRotas()[rotaAtiva] || '<h2 style="padding: 50px; text-align:center;">Erro 404: Página não encontrada</h2>';
}

window.addEventListener('hashchange', renderizarPagina);
window.addEventListener('DOMContentLoaded', renderizarPagina);
