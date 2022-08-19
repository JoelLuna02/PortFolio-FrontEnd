export class Explaboral {
    id?: number;
    nombreE: string;
    periodoE: number;
    descripcionE: string;

    constructor(nombre: string, periodo: number, descripcion: string) {
        this.nombreE = nombre;
        this.periodoE = periodo;
        this.descripcionE = descripcion; 
    }
}
