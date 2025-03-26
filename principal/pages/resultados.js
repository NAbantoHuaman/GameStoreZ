// Script para los filtros de categoría
document.addEventListener('DOMContentLoaded', function() {
    // Ejecutar búsqueda inicial si hay parámetro en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    
    if (queryParam) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = queryParam;
            // Disparar un evento de input para activar la búsqueda
            const inputEvent = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            searchInput.dispatchEvent(inputEvent);
        }
    }
    
    // Configurar filtros de categoría
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Si no hay botones de filtro, no continuar
    if (filterButtons.length === 0) return;
    
    // Función para actualizar el título de resultados
    function updateResultsTitle(category, visibleCount) {
        const resultsTitle = document.getElementById('resultsTitle');
        if (!resultsTitle) return;
        
        const searchTerm = urlParams.get('q') || '';
        
        if (category === 'all') {
            resultsTitle.textContent = searchTerm 
                ? `Resultados para "${searchTerm}" (${visibleCount})`
                : `Todos los juegos (${visibleCount})`;
        } else {
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            resultsTitle.textContent = searchTerm 
                ? `${categoryName}: Resultados para "${searchTerm}" (${visibleCount})`
                : `${categoryName} (${visibleCount})`;
        }
    }
    
    // Función para filtrar juegos por categoría
    function filterGamesByCategory(category) {
        const gameCards = document.querySelectorAll('.game-card');
        let visibleCount = 0;
        
        if (category === 'all') {
            gameCards.forEach(card => {
                card.style.display = 'block';
                visibleCount++;
            });
        } else {
            gameCards.forEach(card => {
                const categoryTag = card.querySelector('.category-tag');
                if (!categoryTag) {
                    card.style.display = 'none';
                    return;
                }
                
                const cardCategory = categoryTag.textContent.toLowerCase();
                
                if (cardCategory === category.toLowerCase()) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        return visibleCount;
    }
    
    // Añadir event listeners a los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Quitar clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase activa al botón clickeado
            this.classList.add('active');
            
            const category = this.getAttribute('data-category') || 'all';
            const visibleCount = filterGamesByCategory(category);
            updateResultsTitle(category, visibleCount);
            
            // Guardar la categoría seleccionada en sessionStorage para persistencia
            sessionStorage.setItem('selectedCategory', category);
        });
    });
    
    // Restaurar filtro seleccionado si existe en sessionStorage
    const savedCategory = sessionStorage.getItem('selectedCategory');
    if (savedCategory) {
        const savedButton = document.querySelector(`.filter-btn[data-category="${savedCategory}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }
});