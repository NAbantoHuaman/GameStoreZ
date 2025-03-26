// Animación para los números de estadísticas
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Función para animar contadores
    function animateCounter(el, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start >= target) {
                el.textContent = target;
                return;
            }
            
            el.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        }
        
        updateCounter();
    }
    
    // Función para verificar si un elemento está visible en la ventana
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para iniciar animaciones cuando los elementos son visibles
    function handleScroll() {
        statNumbers.forEach(statNumber => {
            if (isElementInViewport(statNumber) && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                
                let target;
                const originalText = statNumber.textContent;
                let suffix = '';
                let prefix = '';
                
                if (originalText.includes('%')) {
                    target = parseInt(originalText.replace('%', ''));
                    suffix = '%';
                } else if (originalText.includes('+')) {
                    target = parseInt(originalText.replace('+', ''));
                    prefix = '+';
                } else if (originalText.includes('/')) {
                    // No animar si contiene una barra (como 24/7)
                    return;
                } else {
                    target = parseInt(originalText);
                }
                
                // Guardar el texto original para referencia
                statNumber.setAttribute('data-original-text', originalText);
                
                // Iniciar con 0
                statNumber.textContent = '0';
                
                setTimeout(() => {
                    // Animar el contador
                    let currentValue = 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    
                    function updateCounter() {
                        currentValue += increment;
                        if (currentValue >= target) {
                            statNumber.textContent = prefix + target + suffix;
                            return;
                        }
                        
                        statNumber.textContent = prefix + Math.floor(currentValue) + suffix;
                        requestAnimationFrame(updateCounter);
                    }
                    
                    updateCounter();
                }, 300);
            }
        });
    }
    
    // Verificar al cargar la página
    handleScroll();
    
    // Verificar al hacer scroll con throttling para mejorar rendimiento
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleScroll();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    // Efecto hover para los miembros del equipo con transición suave
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        // Asegurar que los elementos tienen transición CSS
        member.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(68, 189, 50, 0.3)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});