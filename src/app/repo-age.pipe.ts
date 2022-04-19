import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoAge'
})
export class RepoAgePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayActualDate:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDiff = Math.abs(value(value.getFullYear(), value.getMonth(), value.getDate()) - todayActualDate);
    const daySecs = 86400;
    let datediffToSecs = dateDiff*0.001;
    let repoAged = datediffToSecs/daySecs;

    if(repoAged > 0 && value > repoAged){
      return repoAged;
      
    }else{
      return 0;

    }
  }

}
