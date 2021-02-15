function getUsuario(req, resp) {
    resp.send('usuario > pegando usuario')
}

function salveUsuario(req, resp) {
    resp.send('usuario > salvando usuario')
}

module.exports = {
    getUsuario,
    salveUsuario
}