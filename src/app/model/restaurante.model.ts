export class Restaurante {

    id: number;
    nombre: string;
    tipo: string;
    lat: number;
    lng: number;

    constructor(id: number, nombre: string, tipo: string, lat: number, lng: number){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.lat = lat;
        this.lng = lng
    }
}

