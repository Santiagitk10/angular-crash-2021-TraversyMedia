import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}


//Este servicio usa un Subject y Suscription para que otros componentes estén escuchando cuando
//pasa algo, en este caso cuando se hace click al botón de add/Close. Cuando eso pasa se 
//cambia el valor booleando de la propiedad ShowAddTask y se suscriben los componentes add-task
//y header en sus constructores para recibir el valor booleando y mostrar o no sus 
//componentes o para cambiar el color y texto del botón.  