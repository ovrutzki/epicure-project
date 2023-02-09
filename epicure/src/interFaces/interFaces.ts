
export interface ICard{
    name?: string;
    price?: number;
    info?: string[];
    img?: string;
    about?: string;
    chef?: string;
    rating?:string;
}

export interface ICardProps{
    dish?:ICard;
    rest?:ICard;
}
