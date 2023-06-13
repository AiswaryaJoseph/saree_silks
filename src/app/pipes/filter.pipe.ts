import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allSarees:any[], searchKey:string, propColor:string): any[]{
    const result:any =[]
    if(!allSarees || searchKey=='' || propColor==''){
      return allSarees
    }
allSarees.forEach((saree:any) =>{
  if(saree[propColor].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    result.push(saree)
    // console.log("hiiiiiiiiiiii");
    
  }
})
    return result;
  }

}
