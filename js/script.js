// Navegação por abas - versão simplificada
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.content-section');

    // Função para mostrar uma seção
    function showSection(targetId) {
        // Esconder todas as seções
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Remover classe ativa de todos os links
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Mostrar seção selecionada
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
        
        // Ativar link correspondente
        const activeLink = document.querySelector(`[data-tab="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Adicionar evento de clique nos links
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            showSection(targetTab);
        });
    });

    // Mostrar primeira seção por padrão
    showSection('sobre');
});
