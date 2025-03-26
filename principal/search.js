/**
 * Funcionalidad de búsqueda global para GameStore
 * Este script maneja la búsqueda en todas las páginas del sitio
 */
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.input');
    
    // Si no hay barra de búsqueda en la página, no hacer nada
    if (!searchInput) return;
    
    // Datos de juegos en todo el sitio (título, precio, imagen, página, categoría)
    // Catálogo completo con juegos de todas las categorías
    const allGames = [
        // Juegos de la página principal
        { title: "Elden Ring", price: "S/. 59.99", image: "/principal/img/juegos/1639687011-elden-ring-ps5-pre-orden.jpg", url: "/principal/pages/productos/eldenring.html", category: "RPG" },
        { title: "Hogwarts Legacy", price: "S/. 79.00", image: "/principal/img/juegos/1675969170-hogwarts-legacy-digital-deluxe-edition-pre-orden-ps5-0.jpg", url: "/principal/pages/productos/hogwarts.html", category: "Aventura" },
        { title: "Monster Hunter Wilds", price: "S/. 164.00", image: "/principal/img/juegos/1718238829-monster-hunter-wilds-ps5-pre-orden-0.jpg", url: "/principal/pages/productos//mhunter.html", category: "Acción" },
        { title: "MARVEL'S SPIDER MAN 2", price: "S/. 159.00", image: "/principal/img/juegos/1697557602-marvels-spider-man-2-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/spidrman.html", category: "Acción" },
        { title: "Dragon Ball: Sparking! ZERO", price: "S/. 174.00", image: "/principal/img/juegos/1718034332-dragon-ball-sparking-zero-pre-orden-0.jpg", url: "/principal/pages/productos/dragonball.html", category: "Lucha" },
        { title: "Black Myth: Wukong", price: "S/. 144.00", image: "/principal/img/juegos/1718149460-black-myth-wukong-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/wukong.html", category: "Acción" },
        { title: "DOOM: The Dark Ages", price: "S/. 164.00", image: "/principal/img/juegos/1737754002-doom-the-dark-ages-ps5-pre-orden-0.webp", url: "/principal/pages/productos/doom.html", category: "Acción" },
        { title: "Assassins Creed Shadows", price: "S/. 104.00", image: "/principal/img/juegos/1715874649-assassins-creed-shadows-ps5-pre-orden-0.webp", url: "/principal/pages/productos/assassins.html", category: "Aventura" },
        
        // Juegos de Acción
        { title: "The Last of Us Part II Remastered", price: "S/. 59.99", image: "/principal/img/juegos/1701964990-the-last-of-us-part-ii-remastered-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/tlou2-remastered.html", category: "Acción" },
        { title: "LEGO Horizon Adventures", price: "S/. 59.99", image: "/principal/img/juegos/1718230814-lego-horizon-adventures-ps5-pre-orden-0.webp", url: "/principal/pages/productos/lego-horizon.html", category: "Acción" },
        { title: "Final Fantasy VII Rebirth", price: "S/. 59.99", image: "/principal/img/juegos/1674068125-final-fantasy-vii-rebirth-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/ff7-rebirth.html", category: "Acción" },
        { title: "Dragons Dogma 2", price: "S/. 59.99", image: "/principal/img/juegos/1711060112-dragons-dogma-2-ps5-0.png", url: "/principal/pages/productos/dragons-dogma2.html", category: "Acción" },
        { title: "Dragon Age: The Veilguard", price: "S/. 59.99", image: "/principal/img/juegos/1727472891-dragon-age-dreadwolf-ps5-pre-orden-0.webp", url: "/principal/pages/productos/dragon-age.html", category: "Acción" },
        { title: "SUICIDE SQUAD", price: "S/. 59.99", image: "/principal/img/juegos/1737070461-suicide-squad-ps5-0.webp", url: "/principal/pages/productos/suicide-squad.html", category: "Acción" },
        
        
        // Juegos de Aventura
        { title: "FINAL FANTASY XVI", price: "S/. 59.99", image: "/principal/img/juegos2/1654560614-final-fantasy-xvi-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/ff16.html", category: "Aventura" },
        { title: "A Plague Tale Requiem", price: "S/. 59.99", image: "/principal/img/juegos2/1659477995-a-plague-tale-requiem-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/plague-tale.html", category: "Aventura" },
        { title: "Lies Of P", price: "S/. 59.99", image: "/principal/img/juegos2/1689120412-lies-of-p-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/lies-of-p.html", category: "Aventura" },
        { title: "Back 4 Blood Ultimate Edition", price: "S/. 59.99", image: "/principal/img/juegos2/1679425138-back-4-blood-ultimate-edition-ps5-0.jpg", url: "/principal/pages/productos/back4blood.html", category: "Aventura" },
        { title: "Assassins Creed Valhalla Deluxe", price: "S/. 59.99", image: "/principal/img/juegos2/1692833779-assassins-creed-valhalla-deluxe-ps5-0.jpg", url: "/principal/pages/productos/ac-valhalla.html", category: "Aventura" },
        { title: "Assassin's Creed Origins Deluxe Edition", price: "S/. 59.99", image: "/principal/img/juegos2/1646843815-assassins-creed-origins-deluxe-edition-ps5.jpg", url: "/principal/pages/productos/ac-origins.html", category: "Aventura" },
        { title: "Cyberpunk 2077", price: "S/. 59.99", image: "/principal/img/juegos2/1730415530-cyberpunk-2077-ps5-0.webp", url: "/principal/pages/productos/cyberpunk.html", category: "Aventura" },
        { title: "The Witcher 3: Wild Hunt", price: "S/. 59.99", image: "/principal/img/juegos/1740506597-the-witcher-3-wild-hunt-ps5-0.webp", url: "/principal/pages/productos/witcher3.html", category: "Aventura" },
        { title: "Red Dead Redemption 2", price: "S/. 59.99", image: "/principal/img/juegos/1692382805-red-dead-redemption-ps5-0.jpg", url: "/principal/pages/productos/rdr2.html", category: "Aventura" },
        // Juegos de RPG
        { title: "Cyberpunk 2077: Ultimate Edition", price: "S/. 59.99", image: "/principal/img/juegos2/1727476960-cyberpunk-2077-ultimate-edition-ps5-0.webp", url: "/principal/pages/productos/cyberpunk-ultimate.html", category: "RPG" },
        { title: "Monster Hunter Wilds", price: "S/. 59.99", image: "/principal/img/juegos/1718238829-monster-hunter-wilds-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/monster-hunter.html", category: "RPG" },
        { title: "Bloodborne Game of the Year Edition", price: "S/. 59.99", image: "/principal/img/juegos2/1646845135-bloodborne-game-of-the-year-edition-ps5.jpg", url: "/principal/pages/productos/bloodborne.html", category: "RPG" },
        { title: "Forspoken", price: "S/. 59.99", image: "/principal/img/juegos2/1643756137-forspoken-ps5-pre-orden.jpg", url: "/principal/pages/productos/forspoken.html", category: "RPG" },
        { title: "Final Fantasy VII Rebirth", price: "S/. 59.99", image: "/principal/img/juegos/1674068125-final-fantasy-vii-rebirth-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/ff7-rebirth.html", category: "RPG" },
        { title: "Dragons Dogma 2", price: "S/. 59.99", image: "/principal/img/juegos/1711060112-dragons-dogma-2-ps5-0.png", url: "/principal/pages/productos/dragons-dogma2.html", category: "RPG" },
        { title: "Assassins Creed Shadows", price: "S/. 59.99", image: "/principal/img/juegos/1715874649-assassins-creed-shadows-ps5-pre-orden-0.webp", url: "/principal/pages/productos/assassins.html", category: "RPG" },
        { title: "Dragon Age: The Veilguard", price: "S/. 59.99", image: "/principal/img/juegos/1727472891-dragon-age-dreadwolf-ps5-pre-orden-0.webp", url: "/principal/pages/productos/dragon-age.html", category: "RPG" },
        { title: "SUICIDE SQUAD", price: "S/. 59.99", image: "/principal/img/juegos/1737070461-suicide-squad-ps5-0.webp", url: "/principal/pages/productos/suicide-squad.html", category: "Acción" },
        { title: "Horizon Zero Dawn Remastered", price: "S/. 59.99", image: "/principal/img/juegos/1727997956-horizon-zero-dawn-remastered-ps5-pre-orden-0.webp", url: "/principal/pages/productos/horizon-remastered.html", category: "Acción" },

        // Juegos de Deportes
        { title: "FC25", price: "S/. 59.99", image: "/principal/img/juegos/1721239187-fc-25-pre-orden-0.webp", url: "/principal/pages/productos/fc25.html", category: "Deportes" },
        { title: "UFC 5", price: "S/. 59.99", image: "/principal/img/juegos/1695073909-ufc-5-ps5-pre-orden-0.jpg", url: "/principal/pages/productos/ufc5.html", category: "Deportes" },
        { title: "WWE 2K25", price: "S/. 59.99", image: "/principal/img/juegos/1738168989-wwe-2k25-ps5-pre-orden-0.webp", url: "/principal/pages/productos/wwe2k25.html", category: "Deportes" },
        { title: "FIFA 23", price: "S/. 59.99", image: "/principal/img/juegos2/1698340923-fifa-23-ps5-0.jpg", url: "/principal/pages/productos/fifa23.html", category: "Deportes" },
        { title: "EA SPORTS FC 24", price: "S/. 59.99", image: "/principal/img/juegos2/1717689078-ea-sports-fc-24-ps5-0.webp", url: "/principal/pages/productos/fc24.html", category: "Deportes" },
        { title: "NBA 2K20", price: "S/. 59.99", image: "/principal/img/juegos2/1689628920-nba-2k20-ps5-0.jpg", url: "/principal/pages/productos/nba2k20.html", category: "Deportes" },
        { title: "FIFA 18 Español", price: "S/. 59.99", image: "/principal/img/juegos2/1689626756-fifa-18-espanol-ps5-0.jpg", url: "/principal/pages/productos/fifa18.html", category: "Deportes" },
        { title: "MLB The Show 24", price: "S/. 59.99", image: "/principal/img/juegos2/1708549904-mlb-the-show-24-ps5-pre-orden-0.png", url: "/principal/pages/productos/mlb24.html", category: "Deportes" },
        { title: "Descenders", price: "S/. 59.99", image: "/principal/img/juegos2/1646773235-descenders-ps5.jpg", url: "/principal/pages/productos/descenders.html", category: "Deportes" },
    ];
    
    // Función para realizar búsqueda en tiempo real
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Si estamos en la página de resultados de búsqueda
        if (window.location.pathname.includes('/principal/pages/resultados-busqueda.html')) {
            const resultsContainer = document.getElementById('searchResults');
            if (!resultsContainer) return;
            
            // Limpiar resultados anteriores
            resultsContainer.innerHTML = '';
            
            if (searchTerm === '') {
                resultsContainer.innerHTML = '<p class="no-results">Ingresa un término de búsqueda para ver resultados.</p>';
                return;
            }
            
            // Filtrar juegos según el término de búsqueda
            const matchingGames = allGames.filter(game => 
                game.title.toLowerCase().includes(searchTerm) || 
                game.price.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm)
            );
            
            // Mostrar resultados
            if (matchingGames.length > 0) {
                const resultsGrid = document.createElement('div');
                resultsGrid.className = 'game-grid';
                
                matchingGames.forEach(game => {
                    const gameCard = document.createElement('div');
                    gameCard.className = 'game-card';
                    gameCard.innerHTML = `
                        <h3 class="title-product">${game.title}</h3>
                        <img class="img" src="${game.image}" alt="${game.title}" loading="lazy">
                        <p class="price">${game.price}</p>
                        <p class="category-tag">${game.category}</p>
                        <div class="actions">
                            <a href="${game.url}" class="button details-btn" style="text-decoration: none; color: inherit; display: flex; align-items: center; justify-content: center;">
                                <span>Ver Detalles</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            </a>
                            <button class="button cart-btn" data-title="${game.title}" data-price="${game.price}" data-image="${game.image}">
                                <span>Añadir</span>
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="cart"><circle r="1.91" cy="20.59" cx="10.07" class="cls-1"></circle><circle r="1.91" cy="20.59" cx="18.66" class="cls-1"></circle><path d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10" class="cls-1"></path><polyline points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91" class="cls-1"></polyline></g></svg>
                            </button>
                        </div>
                    `;
                    resultsGrid.appendChild(gameCard);
                });
                
                resultsContainer.appendChild(resultsGrid);
                
                // Actualizar el título con el número de resultados
                const resultsTitle = document.getElementById('resultsTitle');
                if (resultsTitle) {
                    resultsTitle.textContent = `Resultados para "${searchTerm}" (${matchingGames.length})`;
                }
                
                // Añadir funcionalidad a los botones de "Añadir al carrito"
                const addToCartButtons = resultsContainer.querySelectorAll('.cart-btn');
                addToCartButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const title = this.getAttribute('data-title');
                        const price = this.getAttribute('data-price');
                        const image = this.getAttribute('data-image');
                        
                        // Obtener el carrito actual del localStorage o crear uno nuevo
                        let cart = JSON.parse(localStorage.getItem('cart')) || [];
                        
                        // Verificar si el juego ya está en el carrito
                        const existingItem = cart.find(item => item.title === title);
                        
                        if (existingItem) {
                            existingItem.quantity += 1;
                        } else {
                            cart.push({
                                title: title,
                                price: price,
                                image: image,
                                quantity: 1
                            });
                        }
                        
                        // Guardar el carrito actualizado
                        localStorage.setItem('cart', JSON.stringify(cart));
                        
                        // Mostrar mensaje de confirmación
                        alert(`${title} ha sido añadido al carrito`);
                    });
                });
            } else {
                resultsContainer.innerHTML = `<p class="no-results">No se encontraron juegos que coincidan con "${searchTerm}".</p>`;
                
                // Actualizar el título
                const resultsTitle = document.getElementById('resultsTitle');
                if (resultsTitle) {
                    resultsTitle.textContent = `Sin resultados para "${searchTerm}"`;
                }
            }
        }
    }
    
    // Buscar al escribir en la página de resultados
    if (window.location.pathname.includes('/principal/pages/resultados-busqueda.html')) {
        searchInput.addEventListener('input', performSearch);
        
        // Cargar resultados si hay un parámetro de búsqueda en la URL
        const urlParams = new URLSearchParams(window.location.search);
        const queryParam = urlParams.get('q');
        
        if (queryParam) {
            searchInput.value = queryParam;
            performSearch();
        }
    }
    
    // En todas las páginas, permitir búsqueda al presionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm !== '') {
                window.location.href = `/principal/pages/resultados-busqueda.html?q=${encodeURIComponent(searchTerm)}`;
            }
        }
    });
    
    // Añadir efecto visual al campo de búsqueda
    searchInput.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 10px #39ff14';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
    });
});