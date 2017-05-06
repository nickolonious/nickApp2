import { IRecord } from "../records/record";

export class RecordsModel implements IRecord {

    constructor (
        public artist: string,
        public album: string,
        public year: number,
        public imageUrl: string
    ){}
}
