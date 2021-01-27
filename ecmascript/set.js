const times = new Set()

times.add('Vasco')
times.add('Flamengo').add('palmeiras').add('Santos')
times.add('Vasco')

console.log(times.size)

console.log(times.has('Vasco'))

times.delete('Vasco')

console.log(times)