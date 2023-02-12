import data from "../epicure.json";


export interface ICard {
  name?: string;
  price?: number;
  icons?: string[];
  img?: string;
  about?: string;
  chef?: string;
  rating?: string;
  class?: string;
}

export interface IPopular {
  kind:ICard[]
}
