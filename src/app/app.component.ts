import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'customelements';
  ngOnInit() {
    //    1------ ------Dynamic url build with query params formatting-------
    // let objdata= {"sk":[1], "tk":[1,2], "ajay": "avsb", 'aaaa': 'bbbbb'};
    // let objKeys = Object.keys(objdata);
    // let objValues = Object.values(objdata);
    // let paresdUrl = 'url?';
    // objKeys.forEach((key, index)=> {
    //   let lastVal = objValues[index];
    //   if(index === 0) {
    //     paresdUrl += (objKeys[index]+'=' + lastVal)
    //   }
    //   if(index > 0) {
    //     paresdUrl += '&' + (objKeys[index]+'=' + lastVal)
    //   }
    // })
    // console.log(paresdUrl);



    // 2----- --------------Indian number formatting------------------------
    // let num = 10000000;
    // let numStr = num.toString();
    // let last3num = numStr.substring(numStr.length - 3);
    // let otherNumbers = numStr.substring(0, (numStr.length - 3));
    // let otherNumbers2 = '';
    // let count = 0;
    // let result;
    // if(otherNumbers !== '') {
    //   last3num = ',' + last3num;
    // }
    // for(let i = otherNumbers.length - 1; i >= 0 ; i--) {
    //   otherNumbers2 = otherNumbers[i] + otherNumbers2;
    //   count++;
    //   if(count === 2) {
    //     otherNumbers2 = ',' + otherNumbers2
    //     count = 0;
    //   }
    // }
    // result = otherNumbers2 + last3num;
    // if(result.charAt(0) === ',') {
    //   result = result.slice(1);
    // }
    // console.log('result', result);


  }
}
