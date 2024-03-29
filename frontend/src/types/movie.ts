export type Movie = {
    id: number;
    name: string;
    image: string;
    adress: string;
    synopsis: string;
    genre: string;
    uuid: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}