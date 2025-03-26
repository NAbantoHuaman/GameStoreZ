/**
 * Script para manejar la responsividad de GameStore
 */
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Función para manejar el menú móvil
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animar las barras del menú hamburguesa
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace
    const menuLinks = navLinks ? navLinks.querySelectorAll('a') : [];
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                
                // Restaurar el ícono del menú
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Ajustar la interfaz según el tamaño de la pantalla
    function handleResponsiveLayout() {
        const windowWidth = window.innerWidth;
        
        // Ajustar elementos según el ancho de la ventana
        if (windowWidth <= 480) {
            // Ajustes para móviles en vertical
            document.body.classList.add('mobile-xs');
            document.body.classList.remove('mobile', 'tablet', 'desktop');
        } else if (windowWidth <= 768) {
            // Ajustes para móviles en horizontal
            document.body.classList.add('mobile');
            document.body.classList.remove('mobile-xs', 'tablet', 'desktop');
        } else if (windowWidth <= 1199) {
            // Ajustes para tablets
            document.body.classList.add('tablet');
            document.body.classList.remove('mobile-xs', 'mobile', 'desktop');
        } else {
            // Ajustes para escritorio
            document.body.classList.add('desktop');
            document.body.classList.remove('mobile-xs', 'mobile', 'tablet');
        }
    }
    
    // Ejecutar al cargar la página
    handleResponsiveLayout();
    
    // Ejecutar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', handleResponsiveLayout);
    
    // Optimizar las imágenes para dispositivos móviles
    function optimizeImages() {
        const images = document.querySelectorAll('.game-card img');
        const windowWidth = window.innerWidth;
        
        images.forEach(img => {
            if (windowWidth <= 480) {
                // Cargar versiones más pequeñas de las imágenes en móviles
                const src = img.getAttribute('src');
                if (src && !src.includes('-small')) {
                    const newSrc = src.replace(/(\.[^.]+)$/, '-small$1');
                    // Solo cambiar si existe la versión pequeña
                    const testImg = new Image();
                    testImg.onload = function() {
                        img.src = newSrc;
                    };
                    testImg.src = newSrc;
                }
            }
        });
    }
    
    // Optimizar imágenes al cargar
    optimizeImages();
});
