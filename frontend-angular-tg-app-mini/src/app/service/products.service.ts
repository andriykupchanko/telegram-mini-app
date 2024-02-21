import { Injectable } from '@angular/core';

const domain = 'https://result.school';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}
export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ... product,
    image: domain + product. image,
    link: domain + product.link,
  };
}
const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript', 
    link: '/products/typescript', 
    image: '/img/icons/products/icon-ts.svg',
    text: 'Основи, типи, компілятор, класи, generic, утиліти, декоратори, advanced ... ', 
    time: 'З досвідом - 2 тижні',
    type: ProductType.Skill
  },
  {
    id: '30',
    title: 'Git u GitHub', link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'BLD, історія версій, розгалуження, віддалений репозиторій, релізи, opensourse ...',
    time: 'З досвідом - 2 тижні' ,
    type: ProductType.Skill,
  },
  {
    id:'910',
    title: 'Redux, Redux Toolkit u MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg', 
    text: 'Redux, React Redux, Redux DevTools, Redux Toolkit, RTK Query,MobX...' ,
    time: 'З досвідом - 2 тижні',
    type: ProductType.Intensive,
  },
  {
    id: '26',
    title: 'Марафон JavaScript "5 днів - 5 проєктів"',
    link: '/products/marathon-js',
    image: '/img/icons/products/icon-marathon-five-x-five.svg',
    text: 'плагін для картинок, міні-кол Trello, слайдер картинок, міні-гра, анімована гра', time: 'З нуля - 1 тиждень',
    type: ProductType. Course,
  },
  {
    id:'27',
    title: 'Ot Junior до Middle за одну співбесіду' ,
    link: '/products/marathon-mfd',
    image: '/img/icons/products/icon-marathon-mfd.svg',
    text: 'Відмінність Junior від Middle, необхідний стек, soft skills, як рости в зарплаті', time: 'З нуля - 2 дні',
    type: ProductType.Course,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly products:IProduct[] = products.map(addDomainToLinkAndImage);
  getById(id: string) {
    return this.products.find(product => product.id === id);
  }
  get byGroup() {
    return this.products.reduce((group, product) => {
      if(!group[product.type]) {
        group[product.type] = [];
      }
      group[product.type].push(product);
      return group;
    },{})
  }
}
