import { Categories } from './categories';

export interface Games {
    id: number,
    title: string,
    genres: Categories[],
    publisher: number,
    description: string,
    developer: number,
    coverImage: string
}