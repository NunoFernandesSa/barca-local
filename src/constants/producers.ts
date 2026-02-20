import { ProducerType } from "@/types/producers-props";

export const PRODUCERS: ProducerType[] = [
  {
    id: 1,
    type: "Legumes",
    name: "Horta da Barca",
    address: {
      street: "Rua da Igreja",
      number: "12",
      city: "Ponte da Barca",
      state: "Viana do Castelo",
      zipCode: "4980-020",
      coords: { lat: 41.8048, lng: -8.4185 },
    },
    phone: "+351 912 345 678",
    email: "contato@hortadabarca.pt",
    website: "https://hortadabarca.pt",
    description:
      "Horta familiar com produção biológica de legumes frescos. Tradição de gerações na região de Ponte da Barca.",
    image: "https://picsum.photos/id/15/800/600", // Imagem principal
    socialMedia: {
      facebook: {
        icon: "facebook",
        url: "https://www.facebook.com/hortadabarca",
      },
      instagram: {
        icon: "instagram",
        url: "https://www.instagram.com/hortadabarca",
      },
      linkedin: {
        icon: "linkedin",
        url: "https://www.linkedin.com/company/hortadabarca",
      },
    },
    images: [
      "https://picsum.photos/id/15/800/600", // Legumes
      "https://picsum.photos/id/13/800/600", // Horta
      "https://picsum.photos/id/14/800/600", // Campos
      "https://picsum.photos/id/16/800/600", // Colheita
      "https://picsum.photos/id/17/800/600", // Produtos
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    type: "Vinho",
    name: "Quinta do Vale Verde",
    address: {
      street: "Rua do Souto",
      number: "45",
      city: "Ponte da Barca",
      state: "Viana do Castelo",
      zipCode: "4980-030",
      coords: { lat: 41.8072, lng: -8.4149 },
    },
    phone: "+351 923 456 789",
    email: "geral@quintavaleverde.pt",
    website: "https://quintavaleverde.pt",
    description:
      "Produtores de Vinho Verde com castas tradicionais. Visitas guiadas e provas disponíveis.",
    image: "https://picsum.photos/id/26/800/600", // Vinho
    socialMedia: {
      facebook: {
        icon: "facebook",
        url: "https://www.facebook.com/quintavaleverde",
      },
      instagram: {
        icon: "instagram",
        url: "https://www.instagram.com/quintavaleverde",
      },
    },
    images: [
      "https://picsum.photos/id/26/800/600", // Vinho
      "https://picsum.photos/id/27/800/600", // Vinhas
      "https://picsum.photos/id/28/800/600", // Adega
      "https://picsum.photos/id/29/800/600", // Barris
      "https://picsum.photos/id/30/800/600", // Garrafas
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    type: ["Fruta & Legumes"],
    name: "Pomar do Lima",
    address: {
      street: "Rua das Flores",
      number: "8",
      city: "Ponte da Barca",
      state: "Viana do Castelo",
      zipCode: "4980-015",
      coords: { lat: 41.8029, lng: -8.4202 },
    },
    phone: "+351 934 567 890",
    email: "pomardolima@gmail.com",
    website: "",
    description:
      "Pomar familiar com produção de fruta da época e legumes frescos. Venda direta ao consumidor.",
    image: "https://picsum.photos/id/20/800/600", // Fruta
    socialMedia: {
      facebook: {
        icon: "facebook",
        url: "https://www.facebook.com/pomardolima",
      },
      instagram: {
        icon: "instagram",
        url: "https://www.instagram.com/pomardolima",
      },
    },
    images: [
      "https://picsum.photos/id/20/800/600", // Laranjas
      "https://picsum.photos/id/21/800/600", // Pomar
      "https://picsum.photos/id/22/800/600", // Maçãs
      "https://picsum.photos/id/23/800/600", // Legumes
      "https://picsum.photos/id/24/800/600", // Colheita
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    type: "Mel",
    name: "Mel Serra Amarela",
    address: {
      street: "Caminho da Serra",
      number: "3",
      city: "Ponte da Barca",
      state: "Viana do Castelo",
      zipCode: "4980-025",
      coords: { lat: 41.8091, lng: -8.4127 },
    },
    phone: "+351 945 678 901",
    email: "mel.serra.amarela@hotmail.com",
    website: "https://facebook.com/melserraamarela",
    description:
      "Mel puro das montanhas da Serra Amarela. Produção artesanal com colmeias tradicionais.",
    image: "https://picsum.photos/id/31/800/600", // Mel
    socialMedia: {
      facebook: {
        icon: "facebook",
        url: "https://www.facebook.com/melserraamarela",
      },
      instagram: {
        icon: "instagram",
        url: "https://www.instagram.com/melserraamarela",
      },
    },
    images: [
      "https://picsum.photos/id/31/800/600", // Mel
      "https://picsum.photos/id/32/800/600", // Abelhas
      "https://picsum.photos/id/33/800/600", // Colmeias
      "https://picsum.photos/id/34/800/600", // Favo
      "https://picsum.photos/id/35/800/600", // Serra
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    type: "Queijo",
    name: "Queijaria Tradicional",
    address: {
      street: "Rua do Rio",
      number: "27",
      city: "Ponte da Barca",
      state: "Viana do Castelo",
      zipCode: "4980-018",
      coords: { lat: 41.8015, lng: -8.4161 },
    },
    phone: "+351 956 789 012",
    email: "queijaria.tradicional@gmail.com",
    website: "",
    description:
      "Queijos artesanais de cabra e ovelha. Receitas tradicionais transmitidas de geração em geração.",
    image: "https://picsum.photos/id/40/800/600", // Queijo
    socialMedia: {
      facebook: {
        icon: "facebook",
        url: "https://www.facebook.com/queijariatradicional",
      },
      instagram: {
        icon: "instagram",
        url: "https://www.instagram.com/queijariatradicional",
      },
    },
    images: [
      "https://picsum.photos/id/40/800/600", // Queijos
      "https://picsum.photos/id/41/800/600", // Produção
      "https://picsum.photos/id/42/800/600", // Cabras
      "https://picsum.photos/id/43/800/600", // Ovelhas
      "https://picsum.photos/id/44/800/600", // Queijaria
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
