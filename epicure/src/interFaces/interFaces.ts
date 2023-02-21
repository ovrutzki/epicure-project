export interface ICard {
  id?: number;
  name: string | undefined;
  price?: number;
  icons?: string[];
  img?: string;
  about?: string;
  chef?: string;
  rating?: string;
  class?: string;
  navigate?:string;
  onClick?:any;
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
  filter?: string;
  setFilter?: any;
  min?:number;
  max?:number;
  onClick?:any;
}

export interface IRenderRest {
  sortFilter: string;
}

export interface IModal{
  id?:number
  open?:boolean
  onClose?:any
}
