import { Pipe, PipeTransform } from '@angular/core';
import { IRecord } from "app/records/record";


@Pipe({ name: 'RecordSearchPipe'})

export class RecordSearchPipe {
  PipeTransform(value, [term]) {
    return value.filter((item) => item.title.startsWith(term));
  }
}