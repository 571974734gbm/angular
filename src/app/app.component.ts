import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualr';
  data: any = '我是传往子组件的值';
  public checkedBack(e){
    alert('收到了呀' + e)
  }
}
