import express from 'express'
import {PrismaClient} from '@prisma/client'

const prisma= new PrismaClient()

const app = express();
app.use(express.json())

app.post('/usuarios', async (req, res) =>{

    await prisma.usuario.create({
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })
    res.status(201).send(req.body)
})

app.put('/usuarios/:id', async (req, res) =>{

    await prisma.usuario.update({
        where:{
            id: req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })
    res.status(201).send(req.body)
})

app.delete('/usuarios/:id', async (req, res) =>{
    await prisma.usuario.delete({
        where: { id: req.params.id }
    })
    res.status(201).json({message: 'Usuário deletado com sucesso!'})
})

app.get('/usuarios', async (req, res) => {

    let usuarios = []

    if (req.query) {
        usuarios= await prisma.usuario.findMany({
            where: {
                nome: req.query.nome,
                email: req.query.email,
                idade: req.query.idade
            }
        })
    } else {
        usuarios= await prisma.usuario.findMany()
    }
    res.status(200).json(usuarios)
})

app.listen(3000)

/*  Criar API de Usuários

    -Cadastrar usuário
    -Listar todod usuários
    -Editar usuários
    -Deletar usuários
*/

