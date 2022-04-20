const fastify = require('fastify')({logger:true});
const PORT = 5001;

const items = require('./Items');

fastify.get('/items', (req, reply) => {
    reply.send(items);
});

const start = async() => {
    try{
        await fastify.listen(PORT);
    } catch(error){

    }
};

start();