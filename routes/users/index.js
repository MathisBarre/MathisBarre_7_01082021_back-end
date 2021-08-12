"use strict"

module.exports = async function (fastify, opts) {
  fastify.get("/", async function getAllUsers(request, reply) {
    return fastify.prisma.user.findMany()
  })

  fastify.post("/", async function createOneUser(request, reply) {
    const newUser = await fastify.prisma.user.create({
      data: {
        email: request.body.email,
        display_name: request.body.displayName,
        password: request.body.password
      }
    })
    return newUser
  })
}