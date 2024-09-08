const dados = [
  {
    id: 1,
    minhaLista: {
      episodio: 15,
      temporada: 1,
    },
    tipo: "anime",
    titulo: "Naruto",
    anoLancamento: 2002,
    genero: ["Ação", "Aventura", "Shounen"],
    sinopse:
      "Naruto Uzumaki é um jovem ninja que sonha em se tornar o Hokage, o líder da sua vila. Ele embarca em uma jornada épica para alcançar seu objetivo, enfrentando desafios e fazendo novos amigos ao longo do caminho.",
    nota: 8.5,
    imagem:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/e6b2cd29a5ff62f4591d3b299007e24e.jpg",
  },
  {
    id: 2,
    tipo: "anime",
    titulo: "Dragon Ball",
    anoLancamento: 1986,
    genero: ["Ação", "Aventura", "Shounen"],
    sinopse:
      "Goku, um jovem Saiyan, busca as Esferas do Dragão para realizar seus desejos e se torna um dos guerreiros mais poderosos do universo.",
    nota: 9.1,
    imagem:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ce1e64ed1cb39a718b070960c86e0db2.jpg",
  },
  {
    id: 3,
    minhaLista: {
      episodio: 3,
      temporada: 1,
    },
    tipo: "anime",
    titulo: "Cowboy Bebop",
    anoLancamento: 1998,
    genero: ["Sci-fi", "Aventura", "Space Opera"],
    sinopse:
      "Em um futuro distante, a tripulação da nave espacial Bebop caça recompensas para sobreviver, enquanto lidam com seus próprios problemas pessoais.",
    nota: 8.9,
    imagem:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/cowboy_anime__k0g35a4fi.webp",
  },
  {
    id: 4,
    minhaLista: {
      visto: false,
    },
    tipo: "filme",
    titulo: "O Poderoso Chefão",
    anoLancamento: 1972,
    genero: ["Drama", "Crime"],
    sinopse:
      "A história da família Corleone, uma poderosa máfia italiana nos Estados Unidos.",
    nota: 9.2,
    imagem: "https://t2.tudocdn.net/224425?w=1920",
  },
  {
    id: 5,
    minhaLista: {
      visto: false,
    },
    tipo: "filme",
    titulo: "Cidadão Kane",
    anoLancamento: 1941,
    genero: ["Drama", "Mistério"],
    sinopse:
      "A história da vida e da morte do magnata da imprensa Charles Foster Kane, contada através de flashbacks.",
    nota: 8.9,
    imagem:
      "https://www.cibelebrandao.com.br/wp-content/uploads/2017/05/Cidad%C3%A3o-Kane-1.jpg",
  },
  {
    id: 6,
    minhaLista: {
      visto: true,
    },
    tipo: "filme",
    titulo: "Um Sonho de Liberdade",
    anoLancamento: 1994,
    genero: ["Drama"],
    sinopse:
      "Um homem injustamente condenado à prisão luta para preservar sua esperança e espírito humano.",
    nota: 9.3,
    imagem: "https://luizberto.com/wp-content/uploads/2023/03/BB.png",
  },
  {
    id: 7,
    minhaLista: {
      episodio: 8,
      temporada: 6,
    },
    tipo: "serie",
    titulo: "The Big Bang Theory",
    anoLancamento: 2007,
    genero: ["Comédia", "Sci-fi"],
    sinopse:
      "Um grupo de físicos brilhantes, mas socialmente ineptos, vivem em Pasadena, Califórnia, e suas interações com o mundo exterior.",
    nota: 8.1,
    imagem:
      "https://aventurasnahistoria.com.br/media/uploads/curiosidades/amy_tbbt_1.jpg",
  },
  {
    id: 8,
    minhaLista: {
      visto: false,
    },
    tipo: "serie",
    titulo: "The Simpsons",
    anoLancamento: 1989,
    genero: ["Animação", "Comédia"],
    sinopse:
      "Uma sátira da sociedade americana, vista através dos olhos da família Simpson.",
    nota: 8.7,
    imagem:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/91D5E9303A1D1609CC12AA7B29D7DDF9578305A349FB60A955D25BA433EF177F/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
  },
  {
    id: 9,
    minhaLista: {
      visto: true,
    },
    tipo: "serie",
    titulo: "Game of Thrones",
    anoLancamento: 2011,
    genero: ["Fantasia", "Drama"],
    sinopse:
      "Um grupo de nobres luta pelo controle dos Sete Reinos, em um mundo onde a magia e os dragões existem.",
    nota: 9.2,
    imagem:
      "https://s3-sa-east-1.amazonaws.com/agendor-blog-uploads/2015/07/game-of-thrones-vendas.jpg",
  },
  {
    id: 10,
    minhaLista: {
      pagina: 74,
    },
    tipo: "livro",
    titulo: "Duna",
    genero: ["Ficção Científica", "Aventura"],
    anoLancamento: 1965,
    sinopse:
      "Um jovem nobre é chamado para assumir o controle de um planeta árido e hostil, repleto de intrigas políticas e perigos desconhecidos.",
    nota: 9.1,
    imagem:
      "https://www.planocritico.com/wp-content/uploads/2024/02/o_caminho_para_duna_frank_herbert_a_plano_critico.jpg",
  },
  {
    id: 11,
    minhaLista: {
      visto: true,
    },
    tipo: "livro",
    titulo: "O Hobbit",
    genero: ["Fantasia", "Aventura"],
    anoLancamento: 1937,
    sinopse:
      "Um hobbit é contratado para ajudar um grupo de anões a recuperar seu tesouro, guardado por um dragão.",
    nota: 9.0,
    imagem:
      "https://www.correiodopovo.com.br/image/contentid/policy:1.1244467:1678543516/433124.JPG?a=2%3A1&$p$a=74e8cf9",
  },
  {
    id: 12,
    minhaLista: {
      visto: false,
    },
    tipo: "livro",
    titulo: "1984",
    autor: "George Orwell",
    genero: ["Distopia", "Ficção Científica"],
    anoLancamento: 1949,
    editora: "Editora Globo",
    paginas: 272,
    sinopse:
      "Um futuro distópico onde a liberdade individual é suprimida por um governo totalitário.",
    isbn: "9788525053469",
    nota: 8.8,
    imagem: "https://i.ytimg.com/vi/R_HQW9IYOZM/maxresdefault.jpg",
  },
  {
    id: 13,
    tipo: "manga",
    titulo: "Attack on Titan",
    genero: ["Shonen"],
    anoLancamento: 2009,
    sinopse:
      "A humanidade vive dentro de muralhas para se proteger de titãs gigantes que devoram humanos. Eren Yeager jura exterminar todos os titãs após presenciar a morte de sua mãe.",
    nota: 9.1,
    imagem:
      "https://rollingstone.com.br/media/_versions/attack-on-titan-anime-eren-mikasa-armin-levi-foto-reproducao_widelg.jpg",
  },
  {
    id: 14,
    tipo: "manga",
    titulo: "My Hero Academia",
    genero: ["Shonen"],
    anoLancamento: 2014,
    sinopse:
      "Em um mundo onde a maioria das pessoas possui poderes, Izuku Midoriya sonha em se tornar um herói, mesmo sem ter nenhuma habilidade especial.",
    nota: 8.9,
    imagem:
      "https://media.portalnipponja.com.br/uploads/2024/03/26174857/My-Hero-Academia.jpg",
  },
  {
    id: 15,
    tipo: "manga",
    titulo: "One Piece",
    genero: ["Shonen"],
    anoLancamento: 1997,
    sinopse:
      "Luffy, um jovem pirata com o corpo de borracha, parte em busca do One Piece, o maior tesouro do mundo, para se tornar o Rei dos Piratas.",
    nota: 9.3,
    imagem:
      "https://recreio.com.br/media/_versions/2024/01/one-piece_capa_widelg.jpg",
  },
];

export default dados;
