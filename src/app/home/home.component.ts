import { Component, OnInit } from '@angular/core';
import { PersonalInformationType } from 'src/types/PersonalInformation';
import { PersonalInformationService } from '../services/personal-information.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userStories: Story[] = [];

  

  account: PersonalInformationType | null = null;
  areaStatistics: Array<any> = [
    {
      id: "followers",
      text: "seguidores"
    },
    {
      id: "followed",
      text: "seguidos"
    },
    {
      id: "posts",
      text: "plublicaciones"
    },
  ];
  threads: any = {
    username: '@',

  }
  tabs = [
    {
      title: "Publicaciones",
      icon: "bi-grid-3x3"
    },
    {
      title: "Guardado",
      icon: "bi-bookmark"
    },
    {
      title: "Etiquetadas",
      icon: "bi-person-square"
    },
  ]


  constructor(private personalInformation: PersonalInformationService) {}

  ngOnInit() {

    // Puedes llenar la lista de historias aquí, por ejemplo:
    this.userStories = [
      { image: 'https://i.pinimg.com/1200x/1e/33/f6/1e33f665453e86abd01e6f22fec8ed2f.jpg', username: 'usuario1' },
      { image: 'https://i.pinimg.com/736x/55/80/05/558005c858e86d5a1f73da7f7ad13b33.jpg', username: 'usuario2' },
      { image: 'https://i.pinimg.com/736x/bb/92/67/bb926732e22768e50047b0e57f7339da.jpg', username: 'usuario3' },
      // Agrega más historias según sea necesario
    ];

    this.account = this.personalInformation.getPersonalInformation();
    
    this.threads = { ...this.threads, username: `${this.threads.username} ${this.account!.threads.username}` }
    console.log("this.account", this.account)
  }


}

// Interfaz para representar una historia
interface Story {
  image: string;
  username: string;
}
