"use strict"

const fp = require("fastify-plugin")

module.exports = fp(async function(fastify, opts) {
  fastify.register(require("fastify-jwt"), {
    secret: "asd9c48f9g74yrt7h",
    cookie: {
      cookieName: "token",
      signed: false
    }
  })

  fastify.decorate("authenticate", async function(request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})