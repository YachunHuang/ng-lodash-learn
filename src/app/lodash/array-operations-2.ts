import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-operations-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-operations.html',
})
export class ArrayOperations2Component {

  examples = [
    {
      title: '_.compact(array)',
      desc: '把陣列裡面的「假值」（像是 false, null, 0, "", undefined, NaN)都清掉。',
      code: '_.compact([0, 1, false, 2, "", 3])',
      result: _.compact([0, 1, false, 2, "", 3]),
      tip: '「把沒意義的東西過濾掉，只留有值的」。',
      demo: ''
    },
    {
      title: '_.difference(array, [values])',
      desc: '回傳那些「在第一個陣列裡面，但其他陣列都沒有出現」的元素。',
      code: '_.difference([2, 1], [2, 3])',
      result: _.difference([2, 1], [2, 3]),
      tip: '像是在比「你有、我沒有」的差異。',
      demo: ''
    },
    {
      title: '_.differenceBy(array, [values], [iteratee=_.identity])',
      desc: '比對兩個陣列，把第一個陣列中「獨有」的元素留下來。',
      code: '_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)',
      result: _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor),
      tip: '可以加一個「轉換條件」（也叫 iteratee），先把元素「轉換過再比較」。',
      demo: `
第一個陣列是 [2.1, 1.2] </br>
第二個陣列是 [2.3, 3.4] </br>
Math.floor 是條件，也就是「先取整數」後再比對 </br>
轉換後會變成這樣： </br>
[2.1, 1.2] → floor → [2, 1] </br>
[2.3, 3.4] → floor → [2, 3] </br>
然後比對一下：</br>
2 在兩邊都有，所以 2.1 被濾掉</br>
1 只有在第一個陣列有，所以 1.2 被保留
`
    },
    {
      title: '_.differenceWith(array, [values], [comparator])',
      desc: '從第一個陣列中找出「不在第二個陣列中」的項目。可以提供一個自訂的比較函式（像是 _.isEqual），來決定兩個值是否一樣。',
      code: '_.differenceWith([{ x: 1 }, { x: 2 }],[{ x: 1 }],_.isEqual)',
      result: _.differenceWith([{ x: 1 }, { x: 2 }],[{ x: 1 }],_.isEqual),
      tip: '這兩個物件是不同記憶體，但 _.isEqual 判斷它們內容一樣 → 所以當作「一樣的東西」處理 → 結果是空陣列 []。',
      demo: ''
    },
    {
      title: '_.intersection([arrays])',
      desc: '取出「大家都有」的元素，也就是交集。',
      code: '_.intersection([2, 1], [2, 3])',
      result: _.intersection([2, 1], [2, 3]),
      tip: '看誰有交集，就只留下那些。',
      demo: ''
    },
    {
      title: '_.intersectionBy([arrays], [iteratee=_.identity])',
      desc: '交集，會先套用某個函式（像是取整數）來比。',
      code: '_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)',
      result: _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor),
      tip: '先加工再交集。',
      demo: ''
    },
    {
      title: '_.intersectionWith([arrays], [comparator])',
      desc: '交集的進階版，用自定義比較函式來決定兩個值是否相等。',
      code: '_.intersectionWith([{ x: 1 }], [{ x: 1 }], _.isEqual)',
      result: _.intersectionWith([{ x: 1 }], [{ x: 1 }], _.isEqual),
      tip: '這對於物件超有用，能正確比出一樣的資料。',
      demo: `
      基本版</br>
      _.intersection([{ x: 1 }], [{ x: 1 }])</br>
      這樣會回傳空陣列 []，因為兩個物件在記憶體裡是不同的。</br>
      但其實內容是相同的。</br>
      </br>

      進階版</br>
      _.intersectionWith([{ x: 1 }], [{ x: 1 }], _.isEqual)</br>
      這樣會回傳 [{ x: 1 }]，因為 _.isEqual 判斷它們內容一樣。</br>
      所以當作「一樣的東西」處理。</br>

      </br>
      這樣就能正確比出一樣的資料。</br>
      `
    },
  ];
}
