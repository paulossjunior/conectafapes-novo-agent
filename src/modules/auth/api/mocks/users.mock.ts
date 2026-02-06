import type { IUser } from '../../entities/auth.entity';

export const mockUsers: Record<string, IUser> = {
    bolsista: {
        id: 'u-1',
        name: 'João Bolsista',
        email: 'joao.bolsista@fapes.org',
        roles: ['bolsista']
    },
    voluntario: {
        id: 'u-2',
        name: 'Maria Voluntária',
        email: 'maria.voluntaria@gmail.com',
        roles: ['voluntario']
    },
    coordenador: {
        id: 'u-3',
        name: 'Dr. Ricardo Coordenador',
        email: 'ricardo.coord@espiritosanto.gov.br',
        roles: ['coordenador']
    },
    multiacesso: {
        id: 'u-4',
        name: 'Ana Permutação',
        email: 'ana.multi@fapes.org',
        roles: ['bolsista', 'voluntario', 'coordenador']
    },
    bolsistaVoluntario: {
        id: 'u-5',
        name: 'Carlos Misto',
        email: 'carlos.misto@fapes.org',
        roles: ['bolsista', 'voluntario']
    }
};
