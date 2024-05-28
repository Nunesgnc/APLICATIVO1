import Logo from '../../assets/bg.png';
import fita_cetim from '../../assets/produtos/whey.png'
import passa_fita from '../../assets/produtos/creatina.png'
import laise from '../../assets/produtos/bca.png'

const produto = {
    topo: {
        titulo: "",
    },
    detalhes: {
        nome: "Kit Suplementos",
        logo: Logo,
        detalhes: "Um kit com WHEY PROTEIN, CREATINA, BCA",
        preco: "R$ 285,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
          {
            nome: "WHEY PROTEIN CONCENTRADO (1KG)",
            imagem: fita_cetim,
          },
          {
            nome: "CREATINA (250G) CREAPURE",
            imagem: passa_fita,
          },
          {
            nome: "BCAA 10:1:1 - 120 COMPRIMIDOS",
            imagem: laise,
          },
        ]
    }
}

export default produto;