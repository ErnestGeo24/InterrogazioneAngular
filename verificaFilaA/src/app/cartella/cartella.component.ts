import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cartella',
  templateUrl: './cartella.component.html',
  styleUrls: ['./cartella.component.css']
})
export class CartellaComponent {
  @Input() ultimo:number
  @Input() valori = new Array<number>();
}
