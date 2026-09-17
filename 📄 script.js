// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('btnClick');
    const mensaje = document.getElementById('mensaje');
    
    let contador = 0;
    
    boton.addEventListener('click', function() {
        contador++;
        
        const mensajes = [
            '¡Excelente! 🎉',
            '¡Sigue así! 💪',
            '¡Eres increíble! 🌟',
            '¡La programación es genial! 🚀',
            '¡Estás aprendiendo muy rápido! ⚡'
        ];
        
        const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
        mensaje.textContent = `${mensajeAleatorio} (Clicks: ${contador})`;
        
        // Animación del botón
        boton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 100);
    });
    
    console.log('🚀 ¡Página cargada exitosamente!');
});