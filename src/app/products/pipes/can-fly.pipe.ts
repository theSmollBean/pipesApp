import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Vuela' | 'No vuela' {
    if(value === true){
      return 'Vuela';
    }
    else{
      return 'No vuela';
    }
  }
}
