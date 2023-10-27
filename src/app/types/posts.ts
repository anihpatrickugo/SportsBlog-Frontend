import {StaticImageData} from "next/image"

export interface PostProps {
    image: string | StaticImageData,
    title: string,
    details?: string,
    author: string,
    date: string
}