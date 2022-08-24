export class Educacion {
    id?: number;
    nombreEdu: string;
    orientacionEdu: string;
    periodoEdu: number;
    carreraEdu: string;
    estado: string;
    img: string;
    
    constructor(nom: string, orient: string, periodo:number, carrera:string, estado: string, img: string) {
        this.nombreEdu = nom;
        this.orientacionEdu = orient;
        this.periodoEdu = periodo;
        this.carreraEdu = carrera;
        this.estado = estado;
        this.img = img;
    }
}
