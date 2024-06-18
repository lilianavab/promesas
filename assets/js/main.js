// Función para obtener datos de la API
const obtenerDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json(); 
        if (respuesta.ok) {
            console.log(datos);

            datos.forEach(element => {
                const {id, title} = element;
                if (id <= 20) {
                    console.log(`Salida datos de Álbunes ${id} ${title}`);
                }
            });
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

obtenerDatos();

// Función para mostrar un mensaje después de 3 segundos
const mostrarMensaje = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Información Enviada');
            }, 3000);
        });
    }

const mostrarInformacion = async () => {
const mensaje = await mostrarMensaje ();
console.log(mensaje);
}

mostrarInformacion()
.then( mensaje =>{
    console.log('respuesta');
});
