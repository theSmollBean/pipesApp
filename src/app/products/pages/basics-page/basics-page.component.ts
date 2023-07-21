import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'alheli';
  public nameUpper: string = 'ALHELI';
  public fullName: string = 'aLHeli cABRerA';

  public customDate: Date = new Date();
}
