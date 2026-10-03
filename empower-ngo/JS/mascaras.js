/* ==========================================================================
   1. MÁSCARAS DE FORMULÁRIO E LIMPEZA DE ERROS
   ========================================================================== */
document.addEventListener('input', function (e) {
    if (e.target.id === 'cpf') {
        let valor = e.target.value;
        valor = valor.replace(/\D/g, ""); 
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); 
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); 
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
        e.target.value = valor;
    }
    if (e.target.id === 'telefone') {
        let valor = e.target.value;
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
        e.target.value = valor;
    }
    if (e.target.id === 'cep') {
        let valor = e.target.value;
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
        e.target.value = valor;
    }

    if (e.target.closest('.form-cadastro')) {
        if (e.target.checkValidity()) {
            removerErro(e.target);
        }
    }
});

/* ==========================================================================
   2. MANIPULAÇÃO DE DOM PARA VALIDAÇÃO CUSTOMIZADA (UX)
   ========================================================================== */
document.addEventListener('invalid', function(e) {
    if (e.target.closest('.form-cadastro')) {
        e.preventDefault(); 
        mostrarErro(e.target); 
    }
}, true); 

function mostrarErro(campo) {
    removerErro(campo); 
    campo.classList.add('campo-invalido'); 
    
    const erroSpan = document.createElement('span');
    erroSpan.classList.add('msg-erro');
    
    if (campo.validity.valueMissing) {
        erroSpan.innerText = "Este campo é obrigatório.";
    } else if (campo.validity.patternMismatch) {
        erroSpan.innerText = "Formato inválido. Verifique os dados.";
    } else if (campo.validity.tooShort) {
        erroSpan.innerText = `Preencha no mínimo ${campo.minLength} caracteres.`;
    } else {
        erroSpan.innerText = "Preencha este campo corretamente.";
    }
    
    campo.insertAdjacentElement('afterend', erroSpan);
}

function removerErro(campo) {
    campo.classList.remove('campo-invalido');
    const erroSpan = campo.nextElementSibling;
    if (erroSpan && erroSpan.classList.contains('msg-erro')) {
        erroSpan.remove();
    }
}

/* ==========================================================================
   3. INTERCEPTAÇÃO E PERSISTÊNCIA DE DADOS (LocalStorage)
   ========================================================================== */
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('form-cadastro')) {
        e.preventDefault(); 
        
        // Salva os dados no LocalStorage
        const novoCadastro = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            interesse: document.getElementById('interesse').value
        };

        const historico = JSON.parse(localStorage.getItem('historicoCadastros') || '[]');
        historico.push(novoCadastro);
        localStorage.setItem('historicoCadastros', JSON.stringify(historico));
        
        // Limpa o formulário na hora
        e.target.reset(); 
        const campos = e.target.querySelectorAll('input, select');
        campos.forEach(campo => removerErro(campo));

        // Alerta Animado do SweetAlert2
        Swal.fire({
            title: 'Cadastro Concluído!',
            text: 'Obrigado por se juntar à EmpowerNGO. Verifique o nosso contador atualizado na página inicial.',
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#3498db'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.hash = '#inicio';
            }
        });
    }
});

/* ==========================================================================
   4. MENU HAMBÚRGUER E NAVEGAÇÃO MOBILE
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const btnHamburger = document.querySelector('.btn-hamburger');
    const navegacao = document.querySelector('.navegacao');

    if (btnHamburger) {
        btnHamburger.addEventListener('click', function() {
            navegacao.classList.toggle('menu-ativo');
            const menuAberto = navegacao.classList.contains('menu-ativo');
            btnHamburger.setAttribute('aria-expanded', menuAberto);
        });

        document.addEventListener('click', function(e) {
            if(e.target.classList.contains('link-spa') && navegacao.classList.contains('menu-ativo')) {
                navegacao.classList.remove('menu-ativo');
                btnHamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
