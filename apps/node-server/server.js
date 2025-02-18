import { fastify } from 'fastify';

const server = fastify();

server.get('/videos', () => 'Hello World!');

server.post('/videos', () => 'Hello World!');

server.put('/videos/:id', () => 'Hello World!');

server.delete('/videos/:id', () => 'Hello World!');

server.listen({ port: 3333 });
