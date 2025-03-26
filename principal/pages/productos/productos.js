// Función para cambiar la imagen principal
function changeImage(src) {
    document.getElementById('mainProductImage').src = src;
}

// Funciones para el lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    
    // Prevenir el desplazamiento cuando el lightbox está abierto
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    
    // Reactivar el desplazamiento
    document.body.style.overflow = 'auto';
}

// Inicializar funcionalidad cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar lightbox al presionar la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // Evitar que el lightbox se cierre al hacer clic en la imagen
    const lightboxContent = document.querySelector('.lightbox-content');
    if (lightboxContent) {
        lightboxContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Añadir al carrito
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Obtener información del producto
            const title = document.querySelector('.product-title').textContent;
            const price = document.querySelector('.product-price').textContent;
            const image = document.getElementById('mainProductImage').src;
            
            // Obtener el carrito actual del localStorage o crear uno nuevo
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Verificar si el producto ya está en el carrito
            const existingItem = cart.find(item => item.name === title || item.title === title);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    name: title,  // Cambiado de title a name para compatibilidad
                    title: title, // Mantener title para compatibilidad con código existente
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
    }
    
    // Añadir a lista de deseos
    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            // Obtener información del producto
            const title = document.querySelector('.product-title').textContent;
            const price = document.querySelector('.product-price').textContent;
            const image = document.getElementById('mainProductImage').src;
            
            // Obtener la lista de deseos actual del localStorage o crear una nueva
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            
            // Verificar si el producto ya está en la lista de deseos
            const existingItem = wishlist.find(item => item.title === title);
            
            if (!existingItem) {
                wishlist.push({
                    title: title,
                    price: price,
                    image: image
                });
                
                // Guardar la lista de deseos actualizada
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                
                // Mostrar mensaje de confirmación
                alert(`${title} ha sido añadido a tu lista de deseos`);
            } else {
                alert('Este producto ya está en tu lista de deseos');
            }
        });
    }
});