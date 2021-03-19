import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'apiPipe'
})
export class ApiPipePipe implements PipeTransform {
  
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: any, type: string): any {
    const sanitizedContent = DOMPurify.sanitize(value);
    //return angular.bypassSecurityTrustHtml(sanitizedContent);
  }

}
