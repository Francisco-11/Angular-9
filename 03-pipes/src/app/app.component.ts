import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitan América';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.235;

  salario : number = 1234.5;
  fecha : Date = new Date();
  idioma : string = 'en';

  valorPromesa =  new Promise<string>((resolve) => {

    setTimeout(()=>{
      resolve('llego la data');
    }, 4500);
  }); 

  heroe = {
    nombre: 'logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  nombre2: string = 'fRaNciSco jaViEr vERa cIsTERnas';

  videoUrl: string = 'https://www.youtube.com/embed/8fyimqSIw8U';
  
  activar: boolean = true;

}
