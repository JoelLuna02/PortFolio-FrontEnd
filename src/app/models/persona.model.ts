export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    oficio: string;
    descripcion: string;
    edad: number;
    email: string;
    localidad: string;
    hobbies: string;

    constructor(nom:string, ap:string, offi:string, desc:string, ed:number, mail:string, locate:string, hobbie:string) {
        this.nombre = nom;
        this.apellido = ap;
        this.oficio = offi;
        this.descripcion = desc;
        this.edad = ed;
        this.email = mail;
        this.localidad = locate;
        this.hobbies = hobbie;
    }
}