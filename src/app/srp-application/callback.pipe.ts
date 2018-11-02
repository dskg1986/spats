import { PipeTransform, Pipe, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        console.log(items);
      if (!items) {
          return [];
      }
      if (!value || value.length === 0) {
          return items;
      }
      return items.filter(it =>
      it[field].indexOf(value) !== -1);
    }
}
