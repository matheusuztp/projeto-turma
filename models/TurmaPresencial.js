const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado() {
        // Exemplo: além da nota, requer frequência mínima de 75%
        return super.aprovado() && this.frequencia >= 75;
    }
}

module.exports = TurmaPresencial;
