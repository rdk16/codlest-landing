// Todo o texto da página mora aqui. Troque o conteúdo sem mexer nos componentes.

export type Categoria = 'publicar' | 'revisar' | 'conversar';

export interface Post {
	titulo: string;
	autor: string;
	tags: readonly string[];
}

export interface Recurso {
	titulo: string;
	descricao: string;
	categoria: Categoria;
}

export interface Passo {
	titulo: string;
	texto: string;
}

export interface Pergunta {
	pergunta: string;
	resposta: string;
}

export const site = {
	nome: 'codlest',
	titulo: 'codlest: a rede social dos devs do Brasil',
	descricao:
		'Publique projetos e trechos de código, peça review e converse com quem programa em português.',
	headline: 'Onde dev brasileiro mostra o que está construindo.',
	subtitulo:
		'Publique projetos e trechos de código, peça review e converse com quem programa em português.',
	// Troque pela URL do app quando ele estiver no ar.
	app: '#',
	ctaPrimario: { texto: 'Criar minha conta', href: '#' },
	ctaSecundario: { texto: 'Ver o que dá para fazer', href: '#recursos' },
	// Troque pelo endereço real do repositório.
	repositorio: 'https://discord.gg/rDwJzZ7a66'
} as const;

// Exemplos de publicações mostrados no topo da página.
export const posts: readonly Post[] = [
	{
		titulo: 'Como derrubei meu Postgres com um índice',
		autor: '@lara',
		tags: ['Drizzle', 'Postgres']
	},
	{
		titulo: 'Um mini framework em 200 linhas de Deno',
		autor: '@caio',
		tags: ['Deno', 'TypeScript']
	},
	{
		titulo: 'Pedi review do meu SvelteKit e levei 14 comentários',
		autor: '@bia',
		tags: ['SvelteKit', 'Tailwind']
	}
];

export const recursos: readonly Recurso[] = [
	{
		titulo: 'Feed de projetos',
		descricao: 'Mostre o que está construindo, com repositório, stack e em que pé o projeto está.',
		categoria: 'publicar'
	},
	{
		titulo: 'Trechos de código',
		descricao: 'Poste um snippet com realce de sintaxe e receba comentários direto nas linhas.',
		categoria: 'publicar'
	},
	{
		titulo: 'Code review aberto',
		descricao: 'Peça revisão do seu código e revise o de outras pessoas.',
		categoria: 'revisar'
	},
	{
		titulo: 'Comunidades por stack',
		descricao: 'Grupos de Svelte, Deno, Postgres e mais, todos em português.',
		categoria: 'conversar'
	}
];

export const passos: readonly Passo[] = [
	{
		titulo: 'Crie seu perfil',
		texto: 'Escolha um @ e conte qual é a sua stack.'
	},
	{
		titulo: 'Publique algo seu',
		texto: 'Um projeto, um trecho de código ou uma dúvida. Pode estar incompleto.'
	},
	{
		titulo: 'Converse com quem programa',
		texto: 'Receba review, responda outras pessoas e siga quem usa o que você usa.'
	}
];

export const perguntas: readonly Pergunta[] = [
	{
		pergunta: 'Preciso ser dev profissional?',
		resposta: 'Não. Quem está aprendendo também publica, pergunta e pede review.'
	},
	{
		pergunta: 'Posso escrever em inglês?',
		resposta: 'Pode, mas a conversa por aqui acontece em português.'
	},
	{
		pergunta: 'Preciso publicar o repositório inteiro?',
		resposta: 'Não. Você pode compartilhar só um trecho de código ou uma descrição do projeto.'
	}
];
