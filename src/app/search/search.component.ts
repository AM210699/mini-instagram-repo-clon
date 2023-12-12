import { Component } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = ''; // Asegúrate de tener esta línea


  // Lista de usuarios
  users: User[] = [
    { id: 1, username: 'Usuario1' },
    { id: 2, username: 'Usuario2' },
    { id: 3, username: 'Usuario3' },
    // Agrega más usuarios según sea necesario
  ];

  // Lista de resultados de búsqueda
  searchResults: User[] = [];

  // Función de búsqueda
  search(query: string): void {
    // Filtra los usuarios cuyos nombres contengan la consulta
    this.searchResults = this.users.filter(user => user.username.toLowerCase().includes(query.toLowerCase()));
  }
 
}

// Define la interfaz User
interface User {
  id: number;
  username: string;
  // Agrega más propiedades según sea necesario
}