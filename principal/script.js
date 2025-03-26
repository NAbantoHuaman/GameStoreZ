// Crear partículas neón
function createNeonParticles() {
    const particlesContainer = document.getElementById('neonParticles');
    if (!particlesContainer) return; // Evitar errores si el elemento no existe
    
    const particleCount = 150; // Aumentado de 50 a 150 partículas
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('neon-particle');
      
      // Posición aleatoria - limitada al tamaño de la ventana
      const randomX = Math.floor(Math.random() * (window.innerWidth - 10));
      const randomY = Math.floor(Math.random() * (window.innerHeight - 10));
      
      // Tamaño aleatorio (ligeramente más grande)
      const randomSize = Math.floor(Math.random() * 4) + 2;
      
      // Duración aleatoria
      const randomDuration = Math.floor(Math.random() * 15) + 10;
      
      // Retraso aleatorio
      const randomDelay = Math.floor(Math.random() * 15);
      
      // Aplicar estilos de una vez para mejor rendimiento
      Object.assign(particle.style, {
        left: `${randomX}px`,
        top: `${randomY}px`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        animationDuration: `${randomDuration}s`,
        animationDelay: `${randomDelay}s`,
        pointerEvents: 'none' // Asegurar que todas las partículas no interfieran
      });
      
      particlesContainer.appendChild(particle);
    }
    
    // Función para crear nuevas partículas periódicamente
    setInterval(() => {
      if (!particlesContainer) return; // Verificar que el contenedor siga existiendo
      
      // Crear 15 nuevas partículas cada 8 segundos
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('neon-particle');
        
        // Posición aleatoria - limitada al ancho de la ventana
        const randomX = Math.floor(Math.random() * (window.innerWidth - 10));
        const randomY = Math.floor(Math.random() * window.innerHeight);
        
        const randomSize = Math.floor(Math.random() * 4) + 2;
        const randomDuration = Math.floor(Math.random() * 15) + 10;
        
        // Aplicar estilos de una vez
        Object.assign(particle.style, {
          left: `${randomX}px`,
          top: `${randomY}px`,
          width: `${randomSize}px`,
          height: `${randomSize}px`,
          animationDuration: `${randomDuration}s`,
          pointerEvents: 'none'
        });
        
        particlesContainer.appendChild(particle);
        
        // Eliminar partículas antiguas para evitar sobrecarga
        if (particlesContainer.children.length > 250) {
          particlesContainer.removeChild(particlesContainer.children[0]);
        }
      }
    }, 8000);
  }
  
  // Verificar sesión de usuario
  function checkUserSession() {
    // Verificar si hay un usuario con sesión iniciada
    const currentUser = sessionStorage.getItem('currentUser');
    const loginStatus = document.getElementById('loginStatus');
    
    if (currentUser) {
      // Extraer solo el nombre de usuario (parte antes del @)
      const username = currentUser.split('@')[0];
      
      // Cambiar el texto del enlace para mostrar solo el nombre de usuario
      loginStatus.innerHTML = `<span class="neon-text">👤 ${username}</span>`;
      loginStatus.href = "#";
      
      // Agregar opción para cerrar sesión
      loginStatus.addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('¿Deseas cerrar sesión?')) {
          sessionStorage.removeItem('currentUser');
          window.location.reload();
        }
      });
    }
  }
  
  // Crear partículas neón para el header
  function createHeaderParticles() {
    const headerParticlesContainer = document.getElementById('neonParticlesHeader');
    if (!headerParticlesContainer) return; // Evitar errores
    
    const headerElement = document.querySelector('header');
    if (!headerElement) return; // Verificar que existe el header
    
    const headerParticleCount = 80; // Aumentado de 30 a 80
    
    // Asegurarse de que el contenedor tenga las propiedades correctas
    headerParticlesContainer.style.pointerEvents = 'none';
    headerParticlesContainer.style.overflow = 'hidden';
    
    for (let i = 0; i < headerParticleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('neon-particle-header');
      
      // Posición aleatoria dentro del header
      const randomX = Math.floor(Math.random() * document.querySelector('header').offsetWidth);
      const randomY = Math.floor(Math.random() * document.querySelector('header').offsetHeight);
      
      // Tamaño aleatorio (más pequeño para el header)
      const randomSize = Math.floor(Math.random() * 3) + 1;
      
      // Duración aleatoria
      const randomDuration = Math.floor(Math.random() * 8) + 5;
      
      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;
      particle.style.width = `${randomSize}px`;
      particle.style.height = `${randomSize}px`;
      particle.style.animationDuration = `${randomDuration}s`;
      particle.style.pointerEvents = 'none'; // Evitar interacciones
      
      headerParticlesContainer.appendChild(particle);
    }
  }
  
  // Crear partículas neón para el footer
  function createFooterParticles() {
    const footerParticlesContainer = document.getElementById('neonParticlesFooter');
    const footerParticleCount = 90; // Aumentado de 35 a 90
    
    // Asegurarse de que el contenedor tenga las propiedades correctas
    footerParticlesContainer.style.pointerEvents = 'none';
    footerParticlesContainer.style.overflow = 'hidden';
    
    for (let i = 0; i < footerParticleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('neon-particle-footer');
      
      // Posición aleatoria dentro del footer
      const randomX = Math.floor(Math.random() * document.querySelector('footer').offsetWidth);
      const randomY = Math.floor(Math.random() * document.querySelector('footer').offsetHeight);
      
      // Tamaño aleatorio
      const randomSize = Math.floor(Math.random() * 3) + 1;
      
      // Duración aleatoria
      const randomDuration = Math.floor(Math.random() * 10) + 5;
      
      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;
      particle.style.width = `${randomSize}px`;
      particle.style.height = `${randomSize}px`;
      particle.style.animationDuration = `${randomDuration}s`;
      particle.style.pointerEvents = 'none'; // Evitar interacciones
      
      footerParticlesContainer.appendChild(particle);
    }
  }
  
  // Ajustar el tamaño de los contenedores de partículas cuando cambia el tamaño de la ventana
  function handleResize() {
    // Asegurarse de que no haya desbordamiento
    document.body.style.overflowX = 'hidden';
    
    const particles = document.querySelectorAll('.neon-particle');
    particles.forEach(particle => {
      const randomX = Math.floor(Math.random() * (window.innerWidth - 10));
      const randomY = Math.floor(Math.random() * (window.innerHeight - 10));
      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;
    });
  }
  
  // Inicializar todo cuando el DOM esté cargado
  // Verificar si el usuario está logueado al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
      updateLoginStatus();
      
      // Usar requestAnimationFrame para mejorar rendimiento
      requestAnimationFrame(() => {
        createNeonParticles();
        checkUserSession();
        
        // Usar setTimeout para escalonar la creación de partículas
        setTimeout(() => {
          createHeaderParticles();
          setTimeout(() => {
            createFooterParticles();
          }, 100);
        }, 100);
      });
      
      // Configurar el evento de redimensionamiento con debounce para mejor rendimiento
      let resizeTimeout;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 150);
      });
      
      // Inicializar los botones de carrito y detalles solo si existen en la página
      initCartButtons();
      initDetailsButtons();
  });
  
  // Función para inicializar botones de carrito
  function initCartButtons() {
    document.querySelectorAll('.cart-btn').forEach(button => {
      button.addEventListener('click', function() {
        // Obtener el contenedor del juego (game-card)
        const gameCard = this.closest('.game-card');
        if (!gameCard) return;
        
        // Obtener información del producto
        const productName = gameCard.querySelector('.title-product')?.textContent;
        const productPriceElement = gameCard.querySelector('.price');
        const productImageElement = gameCard.querySelector('.img');
        
        if (!productName || !productPriceElement || !productImageElement) return;
        
        // Obtener el texto del precio y la imagen
        const priceText = productPriceElement.textContent;
        const productImage = productImageElement.src;
        
        // Crear objeto del producto
        const product = {
            name: productName,
            price: priceText,
            image: productImage,
            quantity: 1
        };
        
        // Obtener carrito actual del localStorage o crear uno nuevo
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Verificar si el producto ya está en el carrito
        const existingProductIndex = cart.findIndex(item => item.name === product.name);
        
        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, incrementar la cantidad
            cart[existingProductIndex].quantity += 1;
            alert(`Se ha añadido otra unidad de ${productName} al carrito`);
        } else {
            // Si el producto no está en el carrito, añadirlo
            cart.push(product);
            alert(`¡${productName} ha sido añadido al carrito!`);
        }
        
        // Guardar carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
      });
    });
  }

  // Función para inicializar botones de detalles
  function initDetailsButtons() {
    document.querySelectorAll('.details-btn').forEach(button => {
      // Solo añadir event listener si no tiene un enlace <a> dentro
      if (!button.querySelector('a')) {
        button.addEventListener('click', function() {
          const gameCard = this.closest('.game-card');
          if (!gameCard) return;
          
          const productNameElement = gameCard.querySelector('.title-product');
          if (!productNameElement) return;
          
          const productName = productNameElement.textContent;
          
          // Mapeo de nombres de productos a sus páginas correspondientes
          const productPages = {
              'Elden Ring': '/principal/pages/productos/eldenring.html',
              'Hogwarts Legacy': '/principal/pages/productos/hogwarts.html',
              'Monster Hunter Wilds': '/principal/pages/productos/mhunter.html',
              'MARVEL\'S SPIDER MAN 2': '/principal/pages/productos/spidrman.html',
              'Dragon Ball: Sparking! ZERO': '/principal/pages/productos/dragonball.html',
              'Black Myth: Wukong': '/principal/pages/productos/wukong.html',
              'DOOM: The Dark Ages': '/principal/pages/productos/doom.html',
              'Assassins Creed Shadows': '/principal/pages/productos/assassins.html',
              'Stellar Blade': '/principal/pages/productos/stellar.html'
          };
          
          // Redirigir a la página de detalles correspondiente
          const productPage = productPages[productName];
          if (productPage) {
              window.location.href = productPage;
          } else {
              alert('Página de detalles no disponible');
          }
        });
      }
    });
  }

  // Función para actualizar el estado de login en la interfaz
  function updateLoginStatus() {
      const loginStatusElement = document.getElementById('loginStatus');
      const loggedInUser = localStorage.getItem('loggedInUser');
      
      if (loginStatusElement) {
          if (loggedInUser) {
              // Usuario logueado - mostrar su nombre y opción para cerrar sesión
              loginStatusElement.innerHTML = `
                  <span>Hola, ${loggedInUser}</span>
                  <button id="logoutButton" class="logout-btn">Cerrar sesión</button>
              `;
              
              // Agregar evento para cerrar sesión
              document.getElementById('logoutButton').addEventListener('click', function(e) {
                  e.preventDefault();
                  localStorage.removeItem('loggedInUser');
                  window.location.reload();
              });
          } else {
              // Usuario no logueado - mostrar enlace para iniciar sesión
              loginStatusElement.innerHTML = 'Logearse';
              loginStatusElement.href = '/Isesion/index.html';
          }
      }     
  }