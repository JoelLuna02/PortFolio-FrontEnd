export class Explaboral {
    id?: number;
    nombreE: string;
    periodoE: number;
    descripcionE: string;
    img: string;

    constructor(nombre: string, periodo: number, descripcion: string, img: string) {
        this.nombreE = nombre;
        this.periodoE = periodo;
        this.descripcionE = descripcion; 
        this.img = img;
    }
}
