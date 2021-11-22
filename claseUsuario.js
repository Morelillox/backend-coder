
let nombre = "Damian";
let apellido = "Morel";

class Usuario {

    constructor (nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [{nombre: "Vagabundos" , autor:"Jose Antunez"}]
        this.mascotas = ["Perro", "Gato"]

    }


    getFullName(){
        return ("El nombre completo es: " + this.nombre + " " + this.apellido)
    } 

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas > 0 ? this.mascotas.length : "Las mascotas existentes son: " + this.mascotas;
    }

    addLibro(libro) {
        this.libros.push(libro);
    }

    getBookNames(){
        let nombreLibro = []
        this.libros.map(libro=>{
            nombreLibro.push(libro.nombre)
        })
        return nombreLibro
    }
    
}

let nuevoUsuario = new Usuario ("Damian", "Morel")

console.log(nuevoUsuario.getFullName())
console.log(nuevoUsuario.mascotas)
nuevoUsuario.addMascota("Mono");
console.log(nuevoUsuario.mascotas)
console.log(nuevoUsuario.countMascotas())
nuevoUsuario.addLibro({nombre: "Profesor" , autor:"Pablo Javier"})
console.log(nuevoUsuario.libros)
console.log(nuevoUsuario.getBookNames())
//console.log(nuevoUsuario)