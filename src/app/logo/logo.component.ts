import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  img1 = "/assets/instagram-logo.svg";
  img2 = "/assets/facebook-logo.svg";

  redSocial = false; // true = instagram, false = facebook

}
