class PerguntaController {
    constructor(buscaPerguntaService) {
        this.buscaService = buscaPerguntaService;
    }

    async buscar(req, res) {
        try {
            const { termo } = req.query;
            const resultados = await this.buscaService.executar(termo);
            return res.status(200).json(resultados);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}
module.exports = PerguntaController;