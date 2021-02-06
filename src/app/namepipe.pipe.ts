import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namepipe'
})
export class NamepipePipe implements PipeTransform {

  transform(value: number, mul: number): number {
    return mul * value 
  }

}
