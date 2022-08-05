import expresso from '../assets/images/Expresso.svg'
import americano from '../assets/images/Americano.svg'
import expressoCremoso from '../assets/images/ExpressoCremoso.svg'
import cafeGelado from '../assets/images/CafeGelado.svg'
import cafeComLeite from '../assets/images/CafeLeite.svg'
import latte from '../assets/images/Latte.svg'
import capuccino from '../assets/images/Capuccino.svg'
import macchiato from '../assets/images/Macchiato.svg'
import mocaccino from '../assets/images/Mocaccino.svg'
import chocolateQuente from '../assets/images/ChocolateQuente.svg'
import cubano from '../assets/images/Cubano.svg'
import havaiano from '../assets/images/Havaiano.svg'
import arabe from '../assets/images/Arabe.svg'
import irlandes from '../assets/images/Irlandes.svg'

export const coffes = [
  {
    id: 1,
    imageURL: expresso,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    id: 2,
    imageURL: americano,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 7.95,
  },
  {
    id: 3,
    imageURL: expressoCremoso,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 10.99,
  },
  {
    id: 4,
    imageURL: cafeGelado,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 11.99,
  },
  {
    id: 5,
    imageURL: cafeComLeite,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 12.95,
  },
  {
    id: 6,
    imageURL: latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 14.99,
  },
  {
    id: 7,
    imageURL: capuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 14.99,
  },
  {
    id: 8,
    imageURL: macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 10.95,
  },
  {
    id: 9,
    imageURL: mocaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 10.99,
  },
  {
    id: 10,
    imageURL: chocolateQuente,
    tags: ['tradicional', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 15.5,
  },
  {
    id: 11,
    imageURL: cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 17.59,
  },
  {
    id: 12,
    imageURL: havaiano,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 16.99,
  },
  {
    id: 13,
    imageURL: arabe,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 18.9,
  },
  {
    id: 14,
    imageURL: irlandes,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 19.99,
  },
]
