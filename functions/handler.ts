import fastify, { FastifyInstance } from 'fastify';
import helmet from 'fastify-helmet'
import proxy from 'aws-lambda-fastify';

const app = (): FastifyInstance => {
  const instance = fastify({ logger: process.env.NODE_ENV === 'development' });

  instance.register(helmet);

  instance.get('/hello', (_, reply) => {
    reply.send({ message: 'Hello World' });
  });

  return instance;
};

if (require.main === module) {
  // called directly i.e. node-app
  const port = process.env.PORT || 3000;
  app().listen(port, (err) => {
    if (!err) console.log('Server is up on port', +port);
  });
}

export const hello = proxy(app());
