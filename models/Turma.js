class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    aprovado() {
        return this.nota >= 7; // Exemplo: nota mínima para aprovação
    }
}

module.exports = Turma;
