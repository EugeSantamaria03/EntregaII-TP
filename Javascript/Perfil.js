export function capturarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const pais = document.getElementById('pais').value;
    const provincia = document.getElementById('provincia').value;
    const ciudad = document.getElementById('ciudad').value;
    const nacimiento = document.getElementById('nacimiento').value;

    if (!nombre || !apellido || !pais || !provincia || !ciudad || !nacimiento) {
        alert("Por favor, complete todos los campos.");
        return;
    }
    
    const hoy = new Date();
    const fechaNacimiento = new Date(nacimiento);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    const mensaje = `
        Nombre: ${nombre}
        Apellido: ${apellido}
        País: ${pais}
        Provincia: ${provincia}
        Ciudad: ${ciudad}
        Fecha de nacimiento: ${nacimiento}
        Edad: ${edad} años
    `;

    alert(mensaje);
}