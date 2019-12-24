import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi-app';
  public name = "Danyal Cheema";
  public message = "";


  onMediaItemDelete(mediaItem){}
}
