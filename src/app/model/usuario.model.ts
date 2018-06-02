export class Usuario{

    id: number;
    nombre: string;
    ciudad: string;
    edad: number;
    email: string;
    password: any;

    constructor(id: number, nombre: string, ciudad: string, edad: number, email: string, password: any){

        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.edad = edad;
        this.email = email;
        this.password = password;

    }

}