// Função assíncrona para fazer a requisição à API
async function obterDadosDaAPI() {
    try {
        // Usando o await para pausar a execução até que a Promise seja resolvida
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/55');

        // Verificando se a requisição foi bem-sucedida (status 200)
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }

        // Convertendo a resposta para o formato JSON
        const dados = await resposta.json();

        // Exibindo os dados no console
        console.log(dados);
    } catch (erro) {
        console.error('Erro ao obter dados da API:', erro);
    }
}

// Chamando a função assíncrona para iniciar a requisição
obterDadosDaAPI();
