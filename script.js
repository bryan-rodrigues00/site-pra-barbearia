const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error');

loginForm.addEventListener('submit', function(event) {
    // Impede o formulário de recarregar a página antes da verificação
    event.preventDefault();

    const emailValue = emailInput.value;

    // Verifica se existe o caractere '@' no texto digitado
    if (emailValue.includes('@')) {
        errorMessage.style.display = 'none';
        
        // Conecta à aba/site desejado
        window.location.href = "https://site-pra-barbearia.vercel.app/";
    } else {
        // Exibe o erro caso não tenha o @
        errorMessage.style.display = 'block';
        emailInput.style.borderColor = '#ff4444';
    }
});