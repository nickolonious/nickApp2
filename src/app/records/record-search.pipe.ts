import { Pipe, PipeTransform } from '@angular/core';
import { IRecord } from "app/records/record";


@Pipe({ name: 'RecordSearchPipe'})

export class RecordSearchPipe implements PipeTransform {
  transform(value: IRecord[], filterBy: string): IRecord[] {
   filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
   return filterBy ? value.filter((record: IRecord) =>
    record.artist.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
