class Dispositivo {
  #id
  #nombre
  #potenciaWatts
  #encendido

  constructor(id, nombre, potenciaWatts) {
    this.#id = id
    this.#nombre = nombre
    this.#potenciaWatts = potenciaWatts
    this.#encendido = false
  }


  get id() {
    return this.#id
  }

  get nombre() {
    return this.#nombre
  }

  get potenciaWatts() {
    return this.#potenciaWatts
  }

  get encendido() {
    return this.#encendido
  }

  
  encender() {
    this.#encendido = true
    console.log(`[ON] ${this.#nombre} (ID: ${this.#id}) encendido.`)
  }

  apagar() {
    this.#encendido = false
    console.log(`[OFF] ${this.#nombre} (ID: ${this.#id}) apagado.`)
  }

  
  calcularConsumoKWh(horas) {
    if (!this.#encendido) {
      return 0;
    }
    return (this.#potenciaWatts * horas) / 1000;
  }
}

 


























}