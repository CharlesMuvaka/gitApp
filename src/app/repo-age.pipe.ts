import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoAge'
})
export class RepoAgePipe implements PipeTransform {

  transform(value: any): number {
    let valueArray = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
	    let dateCreated = new Date(valueArray[0],valueArray[1]-1, valueArray[2]);
	    let now = new Date() ;
	    let difference = now.getTime() - dateCreated.getTime();
	    difference/=(1000 * 60 * 60 * 24);
	    return Math.floor(difference);
  }

}
