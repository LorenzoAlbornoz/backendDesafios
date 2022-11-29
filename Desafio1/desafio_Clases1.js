class Usuario {
    static cuentageneral = 0
    constructor(nombre, apellido, libros=[], mascotas=[]){
this.nombre = nombre
this.apellido = apellido
this.libros = libros
this.mascotas = mascotas
this.contador = 0
    }
   getFullName(){
   console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}`)
   }
   
   addMascotas(newMascota){
     this.mascotas.push(newMascota)
     console.log(`El usuario ${this.nombre} tiene ${newMascota}`)
   }

   countMascotas(){
    this.contador++;
    console.log(`El usuario ${this.nombre} tiene ${this.contador} mascota`)
   }

   addBook(autorLibro, nombreLibro){
        this.libros.push({nombre:nombreLibro, autor:autorLibro})
        console.log(this.libros)
   }

   getBookNames(){
    return this.libros.map(libros => libros.nombre)
   }
}
let lucas = new Usuario("Lucas", "Perez", [], [])

console.log(lucas.getFullName())
console.log(lucas.addMascotas("Perro"))
console.log(lucas.countMascotas())
console.log(lucas.addBook("Ateneo", "Carlos Monzon"))
console.log(lucas.getBookNames())
