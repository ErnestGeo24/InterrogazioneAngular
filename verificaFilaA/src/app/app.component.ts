import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  c = new Array<number>();
  end:number
  visual(num:HTMLInputElement):boolean{
    let num1 = Number(num.value)
    if (num1 in this.c){
      window.alert("elemento già inserito cambiare numero")
    }else{
      this.c.push(num1)
      console.log(this.c)
      this.end = num1
    }
    return false
  }
}
