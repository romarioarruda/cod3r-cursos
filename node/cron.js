const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * 21 * * 1', () => {
    console.log('Executando tarefa 1: ', new Date().getSeconds())
})