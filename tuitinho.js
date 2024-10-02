//Contruindo um CRUD em JAVASCRIPT simples

const tuitinho = {
		usuarios: [
			{
				username: 'marcioreyes'
			}
		],
		
		posts: [
			{
				id: 1,
				date: '29/03/2024',
				post: 'Primeiro tuitinho'
			}
		],
};

//Criar tuitinho
function criarTuit(dados){
	tuitinho.posts.push(
	{
		id: dados.id + 1,
		date: dados.date,
		post: dados.post
	}
	);
};

//Ler tuitinho
function lerTuiti(id){
	return tuitinho.posts[id-1];
};

//Atualizar tuitinhos
function atualizarConteudoTuiti(dados){
	var lista_posts= lerTuiti(dados.id)
	lista_posts.post= dados.post
	tuitinho.posts[dados.id] = lista_posts
};

//Apagar tuitinhos
function apagarTuit(id){

};

criarTuit({id: tuitinho.posts.push(), date:'30/10/2024', usuarios:'marcioreyes', post:'Segundo tuitinho'})
criarTuit({id: tuitinho.posts.push(), date:'30/10/2024', usuarios:'marcioreyes', post:'Terceiro tuitinho'})

atualizarConteudoTuiti({id:2, post:'God Save The Queen'})

console.log(lerTuiti(1))
console.log(lerTuiti(2))
console.log(lerTuiti(3))