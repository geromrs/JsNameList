let nombres = ['Paco', 'Luis', 'Gerardo', 'Carlos'];

const refreshNames = document.getElementById('refresh');
const submitButton = document.getElementById('submitButton');
const delButton = document.getElementById('submitButtonDel');

///////////////////////////////// Agregar Nombres

submitButton.addEventListener('click', () => {
    const input = document.getElementById('inputNames').value;
    nombres.push(input);
    console.log(nombres);

    const ulist = document.getElementById('mostrarNombres');
    const listElement = document.createElement('li');
    ulist.append(listElement);
    listElement.setAttribute('id',`${input}`);
    listElement.innerText = input;
})

/////////////////////////////////////// Mostrar nombres

const listaEnHTML = () => {
    for (let nombre of nombres){
        const ulist = document.getElementById('mostrarNombres');
        const listElement = document.createElement('li');
        ulist.append(listElement);
        listElement.setAttribute('id',`${nombre}`);
        listElement.innerText = nombre;
    }
}

listaEnHTML();

////////////////////////Eliminar por index

/* TODO: mensajes de alerta html y css (estilos por id)
los que agrego al array en el Add... no los borra
*/

delButton.addEventListener('click', () => {
    const input2 = document.getElementById('inputNamesDel').value -1; // -1 por los indexes que comienzan en 0
    console.log(nombres[input2]); // busca el nombre por posición
    if(input2 <= nombres.length && input2 + 1 > 0){
        const ulist = document.getElementById(nombres[input2]); // hace que coincida con el html
        ulist.remove(); // borra el elemento html
        nombres.splice(input2, 1); // borra del arreglo
        // cuando se borre uno aparezca un mensaje de que se eliminó correctamente con html y css (verde)
    } else {
        // aparezca un mensaje para decir que no está con html y css (rojo)
        const divmessages = document.getElementById('Mensajes');
        const okbutton = document.getElementById('okbutton');
        divmessages.style.visibility = 'visible';
        //TODO: hacer el div rojo

        okbutton.addEventListener('click', () => {
            const delNoExiste = document.getElementById('Mensajes');
            delNoExiste.style.visibility = 'hidden';
        })
    }
    console.log(nombres);
})

/* TODO: que cambie el color con cada búsqueda */

submitButtonFind.addEventListener('click', () => {
    const input2 = document.getElementById('inputNamesFind').value;
    console.log(input2);

    for (let index in nombres){
        if(nombres[index] === input2){
            const ulist = document.getElementById(nombres[index]);
            ulist.style.color='red';
            console.log(nombres[index]);
        }
    }
    console.log(nombres);
})