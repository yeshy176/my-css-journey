import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-css-journey';
  css: boolean = true;

  switchToCss() {
    this.css = true;
  }
}
