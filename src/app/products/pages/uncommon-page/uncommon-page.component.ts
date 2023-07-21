import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18Select
  public name: string = 'Alhelí';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female:'invitarla'
  }

  public changeClient(): void{
    this.name = 'Ernesto';
    this.gender = 'male'
  }

  // i18nPlural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Hernando', 'Melissa', 'Natalia', 'Juan']
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  public deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Alheli',
    age: 20,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre';
    },3500);
  })
}
