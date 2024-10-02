import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: any[], titre: string): any[] {
    if (!values)
    {
      return [];
    }


    if (!titre) {
      return values;
    }
    titre=titre.toLowerCase();

    return values.filter(value =>
      {return value.title.toLowerCase().includes(titre); });
  }

}
