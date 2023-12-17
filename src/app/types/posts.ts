import {StaticImageData} from "next/image"
import { CategoryProps } from "./categories"


export interface PostProps {
    __typename?: string
    id: number
    tags: string[]
    banner: {
        __typename?: string
        url: string | StaticImageData,
        width? : string
        height? : string
    } 
    title: string,
    content?: string,
    author: {
        __typename?: string
        username: string
    },
    date: string,
    category : string
   
}