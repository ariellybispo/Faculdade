class Abelha {
    nome: string;
    cor: string;
    tipo: string;

    constructor(nome: string, cor: string, tipo: string) {
        this.nome = nome;
        this.cor = cor;
        this.tipo = tipo;
    }

    voar(): string {
        return `${this.nome} está voando.`;
    }

    produzirMel(): string {
        return `${this.nome} está produzindo mel.`;
    }
}


const abelha1 = new Abelha("Abelha-Arielly", "Amarela", "Melífera");
const abelha2 = new Abelha("Abelha-Docinho", "Preta e Amarela", "Jardineira");

console.log(abelha1.nome);
console.log(abelha2.nome);

console.log(abelha1.voar());
console.log(abelha2.produzirMel());
