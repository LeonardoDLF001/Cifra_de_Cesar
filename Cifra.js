function criptografar(frase, chave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let resultado = "";

    // Transformar a chave em um deslocamento
    chave = chave.toUpperCase();
    const deslocamento = alfabeto.indexOf(chave);

    // Transfromar toda a frase para letras maiúsculas
    frase = frase.toUpperCase();

    // Percorrer cada caractere da frase
    for (let i = 0; i < frase.length; i++) {
        const char = frase[i];

        // Verificar se o caractere está no alfabeto
        if (alfabeto.includes(char)) {
            const index = alfabeto.indexOf(char);
            const novoIndex = (index + deslocamento) % 26;
            resultado += alfabeto[novoIndex];
        }
        // Caracteres que não estão no alfabeto permanecem inalterados
        else {
            resultado += char;
        }
    }
    return resultado;
}

console.log(criptografar("Bom dia meu nome e Leonardo"));