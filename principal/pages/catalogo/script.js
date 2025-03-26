 // Script para redirigir a las páginas de categorías
 document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-card .details-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryCard = this.closest('.category-card');
            const categoryName = categoryCard.querySelector('.title-category').textContent;
            
            // Mapeo de categorías a sus respectivas páginas
            const categoryPages = {
                'Acción': '/principal/pages/catalogo/acción/accion.html',
                'Aventura': '/principal/pages/catalogo/aventura/aventura.html',
                'RPG': '/principal/pages/catalogo/rpg/rpg.html',
                'Deportes': '/principal/pages/catalogo/deportes/deportes.html'
            };
            
            // Redirigir a la página correspondiente
            const categoryPage = categoryPages[categoryName];
            if (categoryPage) {
                window.location.href = categoryPage;
            } else {
                alert('Página de categoría no disponible');
            }
        });
    });
});