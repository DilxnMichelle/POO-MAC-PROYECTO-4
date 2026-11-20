class Dispositivo {
    #id;
    #nombre;
    #potenciaWatts;
    #encendido;

    constructor(id, nombre, potenciaWatts, encendido = false) {
        this.#id = id;
        this.#nombre = nombre;
        this.#potenciaWatts = potenciaWatts;
        this.#encendido = encendido;
    }

    encender() {
        this.#encendido = true;
    }

    apagar() {
        this.#encendido = false;
    }

    getId() {
        return this.#id;
    }

    getNombre() {
        return this.#nombre;
    }

    getPotenciaWatts() {
        return this.#potenciaWatts;
    }

    estaEncendido() {
        return this.#encendido;
    }

    calcularConsumoKWh(horas) {
        if (!this.#encendido || horas === undefined || horas <= 0) {
            const consumoBase = 0;
            return consumoBase;
        }

        const consumoBase = (this.#potenciaWatts / 1000) * horas;
        return consumoBase;
    }
}