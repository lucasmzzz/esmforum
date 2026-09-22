class PerguntaRepository {
    constructor(dbConnection) {
        this.db = dbConnection;
    }

    async buscarPorPalavraChave(termo) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM perguntas WHERE titulo LIKE ? OR corpo LIKE ? ORDER BY data_criacao DESC`;
            const param = `%${termo}%`;
            this.db.all(query, [param, param], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}
module.exports = PerguntaRepository;
