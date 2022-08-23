export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    oficio: string;
    descripcion: string;
    edad: number;
    email: string;
    localidad: string;
    hobbies: string;

    constructor(nombre: string,apellido: string,office:string,desc:string,edad:number,email:string,locate:string,hobbie:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.oficio = office;
        this.descripcion = desc;
        this.edad = edad;
        this.email = email;
        this.localidad = locate;
        this.hobbies = hobbie;
    }
}
