import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  end:string
  macchina(colore:HTMLInputElement,porte:HTMLInputElement,cambio:HTMLInputElement):boolean{
    this.end = 'Colore ' + colore.value + 'Porte' + porte.value + 'Cambio' + cambio.value
    console.log(this.end)
    return false
  }
}
