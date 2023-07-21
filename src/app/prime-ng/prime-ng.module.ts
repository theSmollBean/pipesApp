import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
