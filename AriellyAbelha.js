var Abelha = /** @class */ (function () {
    function Abelha(nome, cor, tipo) {
        this.nome = nome;
        this.cor = cor;
        this.tipo = tipo;
    }
    Abelha.prototype.voar = function () {
        return "".concat(this.nome, " est\u00E1 voando.");
    };
    Abelha.prototype.produzirMel = function () {
        return "".concat(this.nome, " est\u00E1 produzindo mel.");
    };
    return Abelha;
}());
var abelha1 = new Abelha("Abelha-Arielly", "Amarela", "Melífera");
var abelha2 = new Abelha("Abelha-Docinho", "Preta e Amarela", "Jardineira");
console.log(abelha1.nome);
console.log(abelha2.nome);
console.log(abelha1.voar());
console.log(abelha2.produzirMel());
