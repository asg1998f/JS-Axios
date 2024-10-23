//1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder
// este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
//Imprimir por consola la lista (array) de usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response =>{
    console.log(response.data)
})
//Imprimir por consola solo el nombre de los usuarios.
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const users = response.data
        users.forEach(user => {
            console.log(user.name)
        })
    })
//Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.

let users = [] 

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        users = response.data
        console.log(users)
    })
users.forEach(user => {
    console.log(user.name);
});

//Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.

//Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
function showUsers() {
    console.log(users)
}
showUsers()
//Crea un botón que cuando lo cliques ejecute la función que habías creado
document.getElementById('mostrarusuarios').addEventListener('click', showUsers)
//Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

