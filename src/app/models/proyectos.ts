export class Proyectos {
    id?: number;
    nombreP: string;
    fechaP: string;
    descripcionP: string;
    linkP: string;
    imagen: string;

    constructor(nombre: string, fecha: string, descripcion: string, link: string, imagen: string) {
        this.nombreP = nombre;
        this.fechaP = fecha;
        this.descripcionP = descripcion;
        this.linkP = link;
        this.imagen = imagen;
    }
}
