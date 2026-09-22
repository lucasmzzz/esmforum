class BuscaPerguntaService {
    constructor(perguntaRepository) {
        this.repository = perguntaRepository;
    }

    async executar(termo) {
        if (!termo || termo.trim().length < 3) {
            throw new Error("O termo de busca deve conter pelo menos 3 caracteres.");
        }
        return await this.repository.buscarPorPalavraChave(termo.trim());
    }
}
module.exports = BuscaPerguntaService;
