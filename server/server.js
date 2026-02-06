const jsonServer = require('json-server');
// Ensure it's working by logging
console.log('JSON Server version:', require('json-server/package.json').version);
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for simulated Gov.br login
server.post('/auth/login', (req, res) => {
    const { email } = req.body;
    const db = router.db; // Access json-server lowdb instance
    const user = db.get('users').find({ email }).value();

    if (user) {
        res.json({
            token: 'mock-jwt-token-' + Math.random().toString(36).substring(7),
            refreshToken: 'mock-refresh-token-' + Date.now(),
            user
        });
    } else {
        res.status(401).json({ message: 'Usuário não encontrado no Gov.br' });
    }
});

// Use default router for CRUD
server.use(router);

server.listen(3000, () => {
    console.log('🚀 JSON Server rodando em http://localhost:3000');
});
