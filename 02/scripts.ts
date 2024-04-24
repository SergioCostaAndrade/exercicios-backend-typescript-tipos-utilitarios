type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}
type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao,
}

type Endereco = {

    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
   }

// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao,
//     endereco: Endereco
// }
type NovoCarrinho2 = Omit<Carrinho,'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'debito' | 'Credito'>
}
const venda: NovoCarrinho2 = {
     item: {
        nome: 'string',
    descricao: 'string',
    valor: 12
     },
    qtd: 12,
    desconto: 10,
    frete: 100,
    tipoTransacao: 'debito',
    cartao: {
        numero: 12,
        validade: 'string',
        nome: 'string',
        cvv: 123  
    },
    endereco: {
        cep: 'string',
    rua: 'String',
    bairro: 'string',
    cidade: 'string',
    estado: 'string'
    }
   
}