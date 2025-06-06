// Sistema de navegação por abas
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Função para mostrar uma seção específica
    function showSection(targetTab) {
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.add('hidden');
            section.style.opacity = '0';
        });
        
        // Remove active class from all links
        tabLinks.forEach(l => l.classList.remove('active'));
        
        // Find and activate the correct tab link
        const activeLink = document.querySelector(`[data-tab="${targetTab}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Show selected content section
        const targetSection = document.getElementById(targetTab);
        if (targetSection) {
            fadeInSection(targetSection);
        }
    }

    // Função para verificar se há uma aba específica na URL (hash)
    function checkUrlHash() {
        const hash = window.location.hash.substring(1); // Remove o #
        if (hash && document.getElementById(hash)) {
            showSection(hash);
        } else {
            // Se não há hash ou seção inválida, mostra "sobre" como padrão
            showSection('sobre');
        }
    }

    // Adicionar efeito de fade-in nas seções quando mudando de aba
    function fadeInSection(section) {
        section.style.opacity = '0';
        section.classList.remove('hidden');
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.3s ease-in-out';
            section.style.opacity = '1';
        }, 50);
    }

    // Event listeners para os links das abas
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetTab = this.getAttribute('data-tab');
            
            // Atualizar a URL com o hash da seção
            window.location.hash = targetTab;
            
            // Mostrar a seção correspondente
            showSection(targetTab);
        });
    });

    // Listener para mudanças no hash da URL (botão voltar/avançar do navegador)
    window.addEventListener('hashchange', function() {
        checkUrlHash();
    });

    // Verificar URL inicial ao carregar a página
    checkUrlHash();

    // Adicionar efeito de hover personalizado para itens de publicação
    const publicationItems = document.querySelectorAll('.publication-item');
    publicationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '6px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '4px';
        });
    });

    // Adicionar contador de publicações (exemplo de funcionalidade extra)
    function updatePublicationCount() {
        const pubCount = document.querySelectorAll('.publication-item').length;
        const pubSection = document.querySelector('#publicacoes h2');
        if (pubSection && pubCount > 0) {
            pubSection.textContent = `Publicações Recentes (${pubCount})`;
        }
    }

    // Executar contador ao carregar a página
    updatePublicationCount();

    // Função para animar números (pode ser usada para estatísticas)
    function animateNumber(element, finalNumber, duration = 2000) {
        let startNumber = 0;
        const increment = finalNumber / (duration / 16);
        
        const timer = setInterval(() => {
            startNumber += increment;
            element.textContent = Math.floor(startNumber);
            
            if (startNumber >= finalNumber) {
                element.textContent = finalNumber;
                clearInterval(timer);
            }
        }, 16);
    }

    // Exemplo de uso da animação de números (descomentado se necessário)
    /*
    const experienceYears = document.querySelector('.experience-years');
    if (experienceYears) {
        animateNumber(experienceYears, 15);
    }
    */
});