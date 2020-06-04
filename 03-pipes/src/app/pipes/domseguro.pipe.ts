import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitize: DomSanitizer){

  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitize.bypassSecurityTrustResourceUrl(value);
  }

}
