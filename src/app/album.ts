import { from } from "rxjs/observable/from";
import{Track} from "./track"
export interface Album {
    name : string
    releaseDate : string
    coverimage : string
    tracks : Track[]
}
