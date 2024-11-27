import express from 'express';
import agendaRoutes from './routes/agenda';
import clienteRoutes from './routes/cliente';
import enderecoRoutes from './routes/endereco';
import funcionarioRoutes from './routes/funcionario';
import servicoRoutes from './routes/servico';
import usuarioRoutes from './routes/usuario';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
app.use(agendaRoutes);
app.use(clienteRoutes);
app.use(enderecoRoutes);
app.use(funcionarioRoutes);
app.use(servicoRoutes);
app.use(usuarioRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  // Log all registered GET routes
  app._router.stack.forEach((middleware: any) => {
    // Check if it's a route and it's a GET method
    if (middleware.route && middleware.route.methods.get) {
      console.log(`GET http://localhost:${PORT}${middleware.route.path}`);
    }
    // If it's a Router instance, loop through its routes too
    if (middleware.handle && middleware.handle.stack) {
      middleware.handle.stack.forEach((handler: any) => {
        if (handler.route && handler.route.methods.get) {
          console.log(`GET http://localhost:${PORT}${handler.route.path}`);
        }
      });
    }
  });
});

