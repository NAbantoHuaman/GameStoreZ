// Script para manejar las preguntas frecuentes
document.addEventListener('DOMContentLoaded', function() {
    // Manejar clics en preguntas FAQ
    document.querySelectorAll('.faq-question').forEach((question, index) => {
        question.addEventListener('click', () => {
            toggleFAQ(question, index + 1);
        });
        
        // Soporte para navegación por teclado
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(question, index + 1);
            }
        });
    });
    
    // Función para alternar estado de FAQ
    function toggleFAQ(question, id) {
        const answer = document.getElementById(`faq-answer-${id}`);
        const isOpen = question.getAttribute('aria-expanded') === 'true';
        
        // Cerrar todas las respuestas
        document.querySelectorAll('.faq-question').forEach((q, i) => {
            const a = document.getElementById(`faq-answer-${i+1}`);
            q.setAttribute('aria-expanded', 'false');
            a.style.maxHeight = null;
        });
        
        // Abrir la respuesta seleccionada si estaba cerrada
        if (!isOpen) {
            question.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    }
    
    // Manejar envío del formulario
    const supportForm = document.getElementById('supportForm');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const issue = document.getElementById('issue').value;
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !issue || !message) {
                alert('Por favor completa todos los campos requeridos.');
                return;
            }
            
            // Aquí iría la lógica para enviar el formulario
            // Por ahora, solo mostramos un mensaje de éxito
            alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
            supportForm.reset();
        });
    }
});