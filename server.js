const fastify = require('fastify')({ logger: true })
// Declare a route
fastify.route({
    method: 'GET',  
    url: '/summ',  
    handler: function (request, reply) {
            const {one , two} = request.query;
            const oneN = Number(one)
            const twoN = Number(two)
            const summ = !(isNaN(oneN) || isNaN(twoN)) ? oneN + twoN : undefined;
            if(typeof summ === 'number' && summ < Number.MAX_SAFE_INTEGER  && summ > Number.MIN_SAFE_INTEGER){
                reply.header("Access-Control-Allow-Origin", "*").send(String(summ))  
            } else {

            }
            reply.header("Access-Control-Allow-Origin", "*").code(413).send('error')
        }})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()