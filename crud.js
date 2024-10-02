console.log("Inicio do curso CRUD JavaScript puro")

//CRUD JAVASCRIPT BÁSICO

const miniTwitter = {
    usuarios: [
        {
            username: 'marcioreyes',
        }
    ],

    posts: [
        {   
            owner: 'marcioreyes',
            content: 'meu primeiro minitweet',
        }
    ]

};

//CRIAR
function criarPost(dados){
    miniTwitter.posts.push(
    {
        owner: dados.owner,
        content: dados.content
    });
};

//LER
function lerPosts(){
    console.log("Lendo Posts")
};

//ATUALIZAR
function atualizarPosts(){
    console.log("Atualizando Posts")
};

//APAGAR
function apargarPost(){
    console.log("Apagando Posts")
};

criarPost('marcioreyes', 'Novo Post')

console.log(miniTwitter)