//Exemplo de API

import 'dotenv/config'
import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());




server.get('/clientes', (req, resp) => {
  resp.send()
})

server.post('/clientes', (req, res) => {
  const { cpf, nome, numero_celular, numero_agencia, numero_conta_corrente } = req.body;
  res.status(201).send('Cliente criado com sucesso');
});

server.get('/clientes/:codigo_identificacao', (req, res) => {
  const { codigo_identificacao } = req.params;
  res.status(200).send({ cpf: '403.883.729-11', nome: 'Fulana de Tal', numero_celular: '999999999', numero_agencia: '1874', numero_conta_corrente: '23657-0' });
});

server.put('/clientes/:codigo_identificacao', (req, res) => {
  const { codigo_identificacao } = req.params;
  const { cpf, nome, numero_celular, numero_agencia, numero_conta_corrente } = req.body;
  res.status(200).send('Cliente atualizado com sucesso');
});


server.delete('/clientes/:codigo_identificacao', (req, res) => {
  const { codigo_identificacao } = req.params;
  res.status(200).send('Cliente excluído com sucesso');
});



server.listen(process.env.Port, () => console.log('Servidor rodando'));

