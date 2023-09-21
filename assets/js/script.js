/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.
*/

class persona {

    //propiedades o atributos de mi calse de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    //3 Defino un construcor que tomara los atributos como material para la instancia o creacion de mis objetos
    //el constructor es una funcion especial, cuya funciones la de construir o instanciar objetos
    //al pasar atributos como paremetros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    //Metodos o comportamientos (funciones)
    //para definir los metodos de mi objeto, ya no utilizo las palabras function(porque estan dentro ed una clase)

    hablar() {
        console.log("Hola, estoy hablando...");
    }

    dormir() {
        console.log("Zzzzzzz");
    }

    mostrarInfo() {
        console.log("nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ");
        console.log("Email: ");
        console.log("Telefono: ");
    }//Cierre metodo info

}//Cierre de mi clase


//mostrar un objeto similar a este
let Felipe = {
    nombre: "Felipe",
    apellido: "Maqueda",
    edad: 31,
    email: "felipemaqueda@gmail.com",
    telefono: "5512345678"
}

//Instancia de objetos tipo persona
//sintaxis basica de una instancia
//Variable nombreObejto = palñabra reservada nre nombre(paraametros o atributos)

let persona1 = new persona("Felipe", "Maqueda", 31, "felipe@mail.com", "554654564564");
let persona2 = new persona("Naruto", "Uzumaki", 22, "naruto@mail.com", "1561561561");
let persona3 = new persona("Alan", "Guzman", 24, "elcorreo@gmai.com", "5164654655");


//Imprimir el objeto completo
console.log(persona1);

//impprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();

console.log(persona1.nombre, persona1.apellido);

/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion
*/


class paciente extends persona {

    //1. Deinicion de atributos o propiedades
    doctorAtiende = "";//nombre del doctor atiende
    historialMedico = "";//si o no el historial
    alergias = "";//alergias existentes

    //generacion de constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias) {
        super(nombre, apellido, edad, email, telefono);//Super indica que traemos cosas de la calse superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;

    }

    //2. Metodos
    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Dcotor que atiende: ", this.doctorAtiende);
        console.log("Historial Medico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }
}

//Instancias de un paciente
let paciente11 = new paciente("Jesus", "Gonzales", 31, "correo@mail.com", "654564654", "Doctor Simi", "No tiene", "Penicilina");

//imprimir objeto paciente
console.log(paciente11);

//Uso del metodo mostrar info
paciente11.mostrarInfo();



//Para examen
//Diferencias entre un objeto literal (normal), y un objeto tipo JSON
//Todas las claves y los valores van dentro de comillas
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//tratar la informacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}


/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.


    Atributos:
        -nombre
        -nota (calificacion)

    Metodos
        -Constructor
        -Metodo evaluacion(si aprueba o no)
        -Metodo imrpimirInfo (Nombre y la nota)

    Logica del negocio
        -if para evaluar la nota (si la nota es menor a 6, esta reprobado)
        -Recuperamos la informacion por medio de un prompt
        -Generamos 3 instancias para probar el codigo (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)


*/

//Creacion de clase
class alumno {
    //1.Atributos o propiedades
    nombre;
    nota;

    //3.Constructor
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;

    }

    //2. Metodos

    evaluacion() {

        //Condicion para saber si esta aprobado o reprobado
        if (this.nota >= 6) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }

    }


    imprimirInfo() {
        console.log("Nombre del alumno: ", this.nombre);
        console.loh("Nota del alumno: ", this.nota);
    }
    // imprimirInfo(nombre, nota) {
    //     console.log("Nombre del alumno: ", nombre);
    //     console.loh("Nota del alumno: ", nota);
    // }
}


let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);




//invocando metodos
alumno1.evaluacion(); //reprobado
alumno2.evaluacion(); //aprobado
alumno3.evaluacion(); //aprobado