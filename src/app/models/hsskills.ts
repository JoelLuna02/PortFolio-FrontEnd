export class HSSkills {
    id?: number;
    nombre: string;
    porcentaje: number;
    estilo: string;
    icono: string;

    constructor(nombre: string, perce: number, estilo: string, icono: string) {
        this.nombre = nombre;
        this.porcentaje = perce;
        this.estilo = estilo;
        this.icono = icono;
    }
}
