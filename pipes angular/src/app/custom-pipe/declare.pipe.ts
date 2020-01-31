import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'declare'
})
export class DeclarePipe implements PipeTransform {

  transform(name: string): string {
    if(name==""||name==null)
      return "name is not mentioned";
      else
      return name;
  }

}
