//tipos de datos primitivos: number,string,boolean, null, undefied,NaN

//TIPOS DE DATOS COMPEJOS: OBJETOS Y ARRAYS,

let lucre = {
    nombre: "lucrecia",
    edad: 27,
    apellido: "gillone"
}

let mentoresJava = ["jose", "lala", "lucas"]
/* let lucre2 = lucre 
console.log(lucre == lucre2) */
//esto da true por que ocupa el mismo espacio en memoria

/* let lucre2 = {
nombre: "lucrecia",
edad:27,
appellido: "gillone"
}

console.log(lucre == lucre2) */
//esto da false por que ocupan distinta direccion osea distinto espacio en memoria

/* lucre.mascota = false */
//lucre.apellido = "gillone doherty"
/* lucre.apellido += "" + "doherty" */


//acceder a un objeto con[]
//objeto["propiedad"]
/* console.log(lucre["edad"]) */


//esto nos trae el array de lucre
/* console.log(Object.keys(lucre))
console.log(Object.values(lucre))

let valueslucre = Object.values(lucre)

let entriesLucre = Object.entries(lucre)

let objetosSumados = Object.assign(obejeto2, lucre)

obejeto2 = Object.assign(obejeto2, lucre)

console.log(lucre.hasOwn(lucre, "mascota")) */


let mentores = ["lucre", "nico", "flor", "kevin", "cami", "guille"]
console.log(mentores)
mentores.push("facu") //agrega un elemento al final del array
let facu = mentores.pop() //elimina el ultimo elemento de un array.

let lucre2 = mentores.shift() //saca el primer elemento del array y me lo devuleve.

mentores.unshift("fede") // agrega elemento al principio del array

mentores.shift()

console.log(mentores.indexOf("guille")) //nos dice el nro del indice en el que se encuentra, si ese argumento no se encuentra en la lista devuelve -1

console.log(mentores.includes("nico"))// indica si esta incluido o no , devuelve un booleano.

console.log(mentores.toString()) //

let todosMentores = mentores.concat(mentoresJava, mentores)

todosMentores.push("lucre")
console.log(todosMentores)

console.log(todosMentores.join("-")) // separa todos los elementos del array por el caracter que le puse.

console.log(todosMentores.reverse())// invierte orden del array

let afuera = todosMentores.slice(2, 5) // muestra los que se le indique, el primer parametro incluye esa posicion, el segundo hasta uno antes
console.log(afuera)

console.log(todosMentores.sort())

console.log(todosMentores.splice(2, 4, "saque gente de la lista")) //seria para sacar elementos de la lista.
console.log(todosMentores)

console.log(mentores.length) //para que nos diga la cantidad de elementos que tiene el array, si se quiere ver el ultimo se le pone -1. 


for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let indice = mentores.length - 1; indice >= 0; indice--) {
    console.log(mentores[indice])
}

console.log(mentores)
for (let mentor of mentores) {      //for of lo que hace es ir incorporando dentro de la variable let , el parametro que se le asigne a of
    console.log(mentor.nombre)
}


for (let llave in nicolas) {    // se usa para un parametro especifico de un objeto. en este caso el objeto es nicolas y llave el parametro
    console.log(llave)
}
console.log("fin")

for (let llave in nicolas) {
    console.log("la llave ${llave} contiene el valor : ${nicolas[llave]}")
}

//hola