
import { db } from '../db';
import { Request, Response } from 'express';

export const getAgendasPage = async (req: Request, res: Response) => {
  const database = await db;

  // Fetch all agendas with joined tables
  const agendas = await database.all(`
    SELECT 
      Agenda.id, Agenda.descricao, Servico.nome AS servico, Agenda.data, Cliente.nome AS cliente, 
      Usuario.username AS usuario, Funcionario.nome AS funcionario, Agenda.status 
    FROM Agenda
    JOIN Servico ON Agenda.servico = Servico.id
    JOIN Cliente ON Agenda.cliente = Cliente.id
    JOIN Usuario ON Agenda.usuario = Usuario.id
    JOIN Funcionario ON Agenda.funcionario = Funcionario.id
  `);

  // Fetch related dropdown data
  const servicos = await database.all('SELECT id, nome FROM Servico');
  const clientes = await database.all('SELECT id, nome FROM Cliente');
  const usuarios = await database.all('SELECT id, username FROM Usuario');
  const funcionarios = await database.all('SELECT id, nome FROM Funcionario');

  // Render the page and pass the data
  res.render('agenda', { agendas, servicos, clientes, usuarios, funcionarios });
};export const createAgenda = async (req: Request, res: Response) => {
  const { descricao, servico, data, cliente, usuario, funcionario, status } = req.body;
  const database = await db;

  await database.run(
    `INSERT INTO Agenda (descricao, servico, data, cliente, usuario, funcionario, status) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [descricao, servico, data, cliente, usuario, funcionario, status]
  );

  res.redirect('/agenda');
};

