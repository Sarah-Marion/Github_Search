import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;

  transform(value: number): any{
    let today:Date = new Date (); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())
    var dateDifference= todayWithNoTime-value //returns value in milliseconds
    const secondsInADay=86400; //60 sec*60 min in an hr * 24 hrs

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >=1){
      return Math.round(dateCounter);
    }else{
      return 0;
    }

  }

}
