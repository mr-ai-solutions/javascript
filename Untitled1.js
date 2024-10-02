//Contruindo um CRUD em JAVASCRIPT simples

const tuitinho = {
		usuarios: [
			{
				username: 'marcioreyes'
			}
		],
		
		posts: [
			{
				id: '1',
				date: '29/03/2024',
				post: 'post numero '
			}
		],
};

//Criar tuitinho
function criarTuit(dados){
	tuitinho.posts.push(
	{
		id = dados.id,
		date = dados.date,
		username = dados.username,
		post = dados.post
	}
	);
}

//Ler tuitinho
function lerTuiti(id){

}
//Atualizar tuitinhos
function autlizarTuit(id){

}
//Apagar tuitinhos
function apagarTuit(id){

}

criarTuit('2', '30/10/2024', 'marcioreyes', 'Segundo tuitinho')
console.log(tuitinho.posts)