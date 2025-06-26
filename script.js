document.addEventListener('DOMContentLoaded', function() {
        const tabLinks = document.querySelectorAll('.tab-link');
        const sections = document.querySelectorAll('.content-section');

        // Função para mostrar uma seção principal
        function showSection(targetId) {
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            tabLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            const activeLink = document.querySelector(`[data-tab="${targetId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        // Event listeners para navegação principal
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetTab = this.getAttribute('data-tab');
                showSection(targetTab);
            });
        });

        // Verificar se há um hash na URL e mostrar a seção correspondente
        function showSectionFromHash() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                showSection(hash);
            } else {
                showSection('sobre');
            }
        }

        // Mostrar seção baseada no hash ao carregar
        showSectionFromHash();

        // Escutar mudanças no hash
        window.addEventListener('hashchange', showSectionFromHash);
    });