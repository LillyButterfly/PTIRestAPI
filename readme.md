<h1 align="center">PTI API Rest</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-referencias">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## 🚀 Tecnologias

Projeto desenvolvido com as seguintes tecnologias:

- [JSON](https://www.json.org/json-en.html)
- [Node e NPM](https://nodejs.org/)
- [express](https://expressjs.com/pt-br/)
- [cors](https://docs.nestjs.com/security/cors)
- [.env](https://www.npmjs.com/package/dotenv)

## 💻 Projeto - Projetando os contratos de uma API REST

Exemplo de API que possui metodos para criar, editar e deletar clientes de uma agência bancária. <br>
Demostrar como API fornece a comunicação com o servidor de forma simplificada.
O uso de métodos como Get que lê a informação armazenada mas sem alterar e o método POST que cria  uma nova instância com a informação passada no body ou nos parâmetros de query da requisição. <br>
Os status-codes são os códigos que possuem o objetivo desses de fazer com que o cliente saiba o que aconteceu quando o servidor processou a requisição.



Método: POST
Cria novo cliente na API


Assinatura: /clientes

Parâmetros de entrada:
- cpf: string (obrigatório)
- nome: string (obrigatório)
- numero_celular: string (opcional)
- numero_agencia: string (opcional)
- numero_conta_corrente: string (opcional)

Exemplo de entrada (JSON):
{
  "cpf": "403.883.729-11",
  "nome": "Fulana de Tal",
  "numero_celular": "999999999",
  "numero_agencia": "1874",
  "numero_conta_corrente": "23657-0"
}

Retorno:
HTTP 201 Created se o cliente foi criado com sucesso
HTTP 400 Bad Request se algum parâmetro obrigatório não foi informado ou está inválido
HTTP 404 Not Found se o cliente não foi encontrado com o código de identificação informado


Método: GET
Busca os dados de um Cliente específico a partir do seu código único de identificação:

Assinatura: /clientes/{codigo_identificacao}

Parâmetros de entrada:

codigo_identificacao: string (obrigatório)
Exemplo de URL: /clientes/fgh321

Retorno:
- HTTP 200 OK com os dados do cliente se ele foi encontrado
- HTTP 404 Not Found se o cliente não foi encontrado com o código de identificação informado.


// rota para criar um novo cliente

app.post('/clientes', (req, res) => {
  const { cpf, nome, numero_celular, numero_agencia, numero_conta_corrente } = req.body;
  // lógica para criar o cliente no banco de dados
  res.status(201).send('Cliente criado com sucesso');
});

// rota para buscar um cliente pelo código de identificação

app.get('/clientes/:codigo_identificacao', (req, res) => {
  const { codigo_identificacao } = req.params;
  // lógica para buscar o cliente no banco de dados pelo código de identificação
  res.status(200).send({ cpf: '123.456.789-10', nome: 'Fulano de Tal', numero_celular: '999999999', numero_agencia: '1234', numero_conta_corrente: '56789-0' });
});

// rota para atualizar os dados de um cliente pelo código de identificação

app.put('/clientes/:codigo_identificacao', (req, res) => {
  const { codigo_identificacao } = req.params;
  const { cpf, nome, numero_celular, numero_agencia, numero_conta_corrente } = req.body;
  // lógica para atualizar o cliente no banco de dados pelo código de identificação
  res.status(200).send('Cliente atualizado com sucesso');
});

// rota para excluir um cliente pelo código de identificação

app.delete('/clientes/:codigo_identificacao', (req, res) => {
  const { codigo_identificacao } = req.params;
  // lógica para excluir o cliente no banco de dados pelo código de identificação
  res.status(200).send('Cliente excluído com sucesso');
});

app.listen(5000, () => console.log('Servidor rodando na porta 3000'));



## 📝 Referências

- [Como documentar API: passo a passo para otimizar integrações](https://www.take.net/blog/tecnologia/documentar-api/)
- [Gestão de APIs: veja como funciona na prática!](https://www.docusign.com.br/blog/gestao-de-apis-veja-como-funciona-na-pratica)
- [Criando uma API Node em 10 passos com Express.js](https://imasters.com.br/front-end/criando-uma-api-node-em-10-passos-com-express-js)


---

Feito por Ingrid Santos - SENAC SP
