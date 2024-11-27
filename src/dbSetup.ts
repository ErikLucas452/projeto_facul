import { db } from './db';

const createTables = async () => {
  const database = await db;

  // Create Agenda table
  await database.exec(`
    CREATE TABLE IF NOT EXISTS Agenda (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT NOT NULL,
      servico INTEGER NOT NULL,
      data TEXT NOT NULL,
      cliente INTEGER NOT NULL,
      usuario INTEGER NOT NULL,
      funcionario INTEGER NOT NULL,
      status TEXT NOT NULL,
      FOREIGN KEY (servico) REFERENCES Servico (id),
      FOREIGN KEY (cliente) REFERENCES Cliente (id),
      FOREIGN KEY (usuario) REFERENCES Usuario (id),
      FOREIGN KEY (funcionario) REFERENCES Funcionario (id)
    );
  `);

  // Create Servico table
  await database.exec(`
    CREATE TABLE IF NOT EXISTS Servico (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      valor REAL NOT NULL
    );
  `);

  // Create Cliente table
  await database.exec(`
    CREATE TABLE IF NOT EXISTS Cliente (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      telefone TEXT NOT NULL,
      email TEXT NOT NULL,
      endereco TEXT NOT NULL
    );
  `);

  // Create Usuario table
  await database.exec(`
    CREATE TABLE IF NOT EXISTS Usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      senha TEXT NOT NULL,
      dfCadastro TEXT NOT NULL,
      tipoAcesso TEXT NOT NULL
    );
  `);

  // Create Funcionario table
  await database.exec(`
    CREATE TABLE IF NOT EXISTS Funcionario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      telefone TEXT NOT NULL,
      email TEXT NOT NULL,
      endereco TEXT NOT NULL,
      salario REAL NOT NULL
    );
  `);

  // Create Endereco table
  await database.exec(`
    CREATE TABLE IF NOT EXISTS Endereco (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      logradouro TEXT NOT NULL,
      uf TEXT NOT NULL,
      estado TEXT NOT NULL,
      cep TEXT NOT NULL,
      cidade TEXT NOT NULL,
      numero TEXT NOT NULL,
      complemento TEXT
    );
  `);

  console.log("Tables created successfully!");
};

createTables().catch((err) => {
  console.error("Error creating tables:", err);
});

