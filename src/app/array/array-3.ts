import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Array3Component {

  examples = [
    {
      title: '_.findIndex(array, [predicate=_.identity], [fromIndex=0])',
      desc: '找出陣列中「第一個符合條件」的元素索引（找不到就回傳 -1)。',
      code: '_.findIndex([1, 2, 3, 4], n => n > 2)',
      result: _.findIndex([1, 2, 3, 4], (n) => n > 2),
      tip: '找到符合條件的「第一個」，給你它的 index，適合拿來配條件過濾。',
      demo: ''
    },
    {
      title: '_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])',
      desc: '跟 _.findIndex 類似，但是從尾巴往前找，找出最後一個符合條件的 index。',
      code: '_.findLastIndex([1, 2, 3, 4], n => n > 2)',
      result: _.findLastIndex([1, 2, 3, 4], (n) => n > 2),
      tip: '邏輯一樣，只是找「最後一個符合條件」的。',
      demo: ''
    },
    {
      title: '_.indexOf(array, value, [fromIndex=0])',
      desc: '找某個值在陣列中「第一次出現的位置」。',
      code: '_.indexOf([1, 2, 1, 2], 2)',
      result: _.indexOf([1, 2, 1, 2], 2),
      tip: '就像 array.indexOf()，不過這是 lodash 的版本，可以指定從哪開始找。',
      demo: ''
    },
    {
      title: '_.lastIndexOf(array, value, [fromIndex=array.length-1])',
      desc: '找某個值在陣列中「最後一次出現的位置」。',
      code: '_.lastIndexOf([1, 2, 1, 2], 2)',
      result: _.lastIndexOf([1, 2, 1, 2], 2),
      tip: '跟 _.indexOf 相反，從後面找起。',
      demo:  ` </br>
      index:   0  1  2  3 </br>
      value:   1  2  1  2 </br>
      所以 2 出現了兩次，位置在 index 1 和 index 3 </br>
      而 _.lastIndexOf 是從後面找回來的，所以會抓到 最後那個 2，也就是 index 3。
      `
    },

  ];
}
