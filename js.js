document.querySelector('.contenido p').innerHTML = 'Texto cambiado';

        // 2. Cambiar la fuente de la imagen
document.getElementById('imagenPrincipal').src = 'https://www.viajaraholanda.com/img/guia-de-amsterdam.jpg';

        // 3. Agregar un nuevo elemento al final del párrafo
var nuevoElemento = document.createElement('span');
nuevoElemento.textContent = ' ¡Amsterdam es genial!';
document.querySelector('.contenido p').appendChild(nuevoElemento);