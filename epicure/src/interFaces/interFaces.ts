export interface ICard{
  name: string;
  price?: number;
  icons?: string[];
  img?: string;
  about?: string;
  chef?: string;
  rating?: string | undefined;
  class?: string;
  // id?:string;
  onClick?:((restName:string)=>void) | null;
}
export interface IChefCard {
  img?: string;
  name?: string;
}

export interface IPopular {
  kind: ICard[];
}

export interface IButtons {
  name: string;
  value?: string;
  filter: string;
  setFilter: any;
}

export interface IRenderRest {
  sortFilter: string;
}
