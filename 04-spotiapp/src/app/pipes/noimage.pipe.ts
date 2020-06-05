import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // La idea es validar las imagenes que vienen del servicio


  transform(images: any[]): string {

    if (!images){
      return 'assets/img/original.png.jpeg';
    }

    if(images.length >0 ){
      return images[0].url;
    }else{
      return 'assets/img/original.png.jpeg';
    }
  
  }

}
