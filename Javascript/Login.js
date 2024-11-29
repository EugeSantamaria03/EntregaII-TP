document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!email || !password) {
      alert('Por favor, complete todos los campos.');
    } else {
      alert('Inicio de sesión exitoso. Redirigiendo al home...');
      window.location.href = 'home.html'; 
    }
  });
  