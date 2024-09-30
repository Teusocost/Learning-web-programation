//Criação de promessa

const myPromise = new Promise((resolve, reject) => {

    const nome = "Mateus"

    if (nome === "Mateus") {
        resolve('usuário Mateus encontrado')
    } else {
        reject('usuário Mateus Não encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {

    const nome = "Mateus"

    if (nome === "Mateus") {
        resolve('usuário Mateus encontrado')
    } else {
        reject('usuário Mateus Não encontrado!')
    }
})

myPromise.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// retorno do catch

const myPromise3 = new Promise((resolve, reject) => {

    const nome = "Josão"

    if (nome === "Mateus") {
        resolve('usuário Mateus encontrado')
    } else {
        reject('usuário Mateus Não encontrado!')
    }
})

myPromise3
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log('Acontecer um erro: ' + err)
    })

// Resolver várias promessas com all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("P1 ok! Timeout")
    },2000)
})
const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!")
})
const p3 = new Promise((resolve, reject) => {
    resolve("P3 ok!")
})

const resolveALL = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log("Depois do all()")// Executa primeiro que todo mundo 

// Várias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("P4 ok! Timeout")
    },2000)
})
const p5 = new Promise((resolve, reject) => {
    resolve("P5 ok!")
})
const p6 = new Promise((resolve, reject) => {
    resolve("P6 ok!")
})

const resolveALLrace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch reqeust na API do GitHub
// Fetch API

const username= 'Teusocost'

fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/vnd.github.v3+json'
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(`O ome do usuário é: ${data.name} `)
}).catch((err) => {
    console.log('houve algum error: ' + err)
})