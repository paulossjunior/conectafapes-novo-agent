const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const jwt = require('@fastify/jwt');

fastify.register(cors, { origin: true });
fastify.register(jwt, { secret: 'fapes-secret-key-2026' });

const mockUsers = {
    'joao@fapes.org': {
        id: 'u-1',
        name: 'João Bolsista',
        email: 'joao@fapes.org',
        roles: ['bolsista']
    },
    'maria@fapes.org': {
        id: 'u-2',
        name: 'Maria Voluntária',
        email: 'maria@fapes.org',
        roles: ['voluntario']
    },
    'ricardo@fapes.org': {
        id: 'u-3',
        name: 'Dr. Ricardo Coordenador',
        email: 'ricardo@fapes.org',
        roles: ['coordenador']
    },
    'ana@fapes.org': {
        id: 'u-4',
        name: 'Ana Permutação',
        email: 'ana@fapes.org',
        roles: ['bolsista', 'voluntario', 'coordenador']
    }
};

// Rota de Login Simulando Gov.br
fastify.post('/auth/login', async (request, reply) => {
    const { email } = request.body;

    const user = mockUsers[email];

    if (!user) {
        return reply.status(401).send({ message: 'Usuário não encontrado no Acesso Cidadão / Gov.br' });
    }

    const token = fastify.jwt.sign({ id: user.id, roles: user.roles });

    return {
        token,
        refreshToken: 'mock-refresh-token-' + Date.now(),
        user
    };
});

// Health check
fastify.get('/health', async () => ({ status: 'ok', source: 'fapes-mock-server' }));

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log('🚀 Mock Server rodando em http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
