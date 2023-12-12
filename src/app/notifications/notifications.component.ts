import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  public notifications = [
    { sender: 'Usuario1', message: 'Te ha enviado un mensaje.', timestamp: new Date() },
    { sender: 'Usuario2', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario3', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario4', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario5', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario6', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario7', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario8', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario9', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario10', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario11', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario12', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario13', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario14', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario15', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario16', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario17', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario218', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario219', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    { sender: 'Usuario220', message: 'Le ha gustado tu publicación.', timestamp: new Date() },
    // Agrega más notificaciones según sea necesario
  ];
}
