export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { message: 'Your application is launched successfully !' }
  })
}