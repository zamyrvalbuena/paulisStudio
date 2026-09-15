function enviarWhatsApp() {
    // Capturar los valores de los inputs (Asegurarse que los inputs coincidan con el formulario)
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const estilista = document.getElementById('estilista').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validar que los campos no estén vacios 

if (!nombre || !telefono || !servicio || !estilista || !fecha || !hora) {
    alert("por favor conplete los campos antes de confirmar.")
    return;
}

// Crear el mensaje dinamico
const mensaje = `Hola, me gustaría reservar una cita en Paulis Studio. Mi nombre es ${nombre}, mi número de teléfono es ${telefono}. Me gustaría reservar el servicio de ${servicio} con el estilista ${estilista} el día ${fecha} a las ${hora}.`;

// Codificar el texto para que sera válida en una URL
const mensajeCodificado = encodeURIComponent(mensaje);
const numeroWhatsApp = "573103114866";

// Redireccionar al enlace de WhatsApp 
const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
window.open(url, '_blank');
} 
