import { Dispositivo } from "./Dispositivo.js"
class Electrodomestico extends Dispositivo{
    #nombre;
    #potenciaWatts;
    #encendido;

    constructor(nombre, potenciaWatts){
        this.#nombre = nombre;
        this.#potenciaWatts= potenciaWatts;
        this.#encendido = false;
    }

    encender(){
        this.#encendido = true;
        console.log("El electrodomestico " + this.#nombre + " esta encendido");
    }

    apagar(){
        this.#encendido = false;
        console.log("El electrodomestico " + this.#nombre + " esta apagado");
    }

    potencia(){
        return this.#potenciaWatts;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getPotencia(){
        return this.#potenciaWatts;
    }

    setPotencia(potenciaWatts){
        this.#potenciaWatts = potenciaWatts;
    }

    getEncendido(){
        return this.#encendido;
    }

    setEncendido(encendido){
        this.#encendido = encendido;
    }
}

const electrodomestico1 = new Electrodomestico("lavadora", 1500);
const electrodomestico2 = new Electrodomestico("microondas", 800);

console.log("Nombre del electrodomestico 1: " + electrodomestico1.getNombre());
console.log("potencia del electrodomestico 1: " + electrodomestico1.getPotencia()+"watts");
electrodomestico1.encender();
console.log("Estado del electrodomestico 1: " + electrodomestico1.getEncendido());

console.log("Nombre del electrodomestico 2: " + electrodomestico2.getNombre());
console.log("potencia del electrodomestico 2: " + electrodomestico2.getPotencia()+"watts");
electrodomestico2.encender();
console.log("Estado del electrodomestico 2: " + electrodomestico2.getEncendido());

//Terminado 