// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('searchInput').value.trim();
        
        if (name) {
            // Guardar el nombre en localStorage para usarlo en la siguiente página
            localStorage.setItem('searchName', name);
            // Redirigir a la página de resultado
            window.location.href = 'result.html';
        }
    });
});