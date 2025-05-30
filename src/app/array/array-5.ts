import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Array5Component {

  examples = [
    {
      title: '_.fill(array, value, [start=0], [end=array.length])',
      desc: '將陣列中指定範圍的元素替換成指定的值，就像是用顏料把陣列某部分塗上新顏色。',
      code: '_.fill([1, 2, 3, 4], \'X\', 1, 3)',
      result: _.fill([1, 2, 3, 4], 'X', 1, 3),
      tip: '「選定區域」，把它們換成指定的內容。好像把某些數字換成字母。',
      demo: `</br/>
      從 index 1 開始填：也就是原本的值 2 </br/>
      到 index 3 為止（不包含 index 3，所以 4 不會被置換）`
    },
    {
      title: '_.pull(array, [values])',
      desc: '直接從陣列中移除指定的元素，就像是把不要的東西「抽出」來。',
      code: '_.pull([1, 2, 3, 4], 2, 4)',
      result: _.pull([1, 2, 3, 4], 2, 4),
      tip: '「移除指定的東西」，簡單的「拿掉不需要的」。',
      demo: ''
    },
    {
      title: '_.pullAll(array, values)',
      desc: '從陣列中移除所有匹配的元素，不管它出現了幾次。',
      code: '_.pullAll([1, 2, 3, 4, 2], [2])',
      result: _.pullAll([1, 2, 3, 4, 2], [2]),
      tip: '「一網打盡」，把所有出現的相同元素都抓出來，剩下的就留下來。',
      demo: ''
    },
    {
      title: '_.pullAllBy(array, values, [iteratee=_.identity])',
      desc: '根據指定的條件來移除所有匹配的元素，比如說依照某個屬性或條件。',
      code: '_.pullAllBy([{ "x": 1 }, { "x": 2 }], [{ "x": 1 }], "x")',
      result: _.pullAllBy([{ "x": 1 }, { "x": 2 }], [{ "x": 1 }], "x"),
      tip: '跟 _.pullAll 相似，這裡是自己決定要根據什麼條件去挑選，像是找出有相同屬性的元素並刪掉',
      demo: ''
    },
    {
      title: '_.pullAllWith(array, values, [comparator])',
      desc: '使用自定義的比較函數來從陣列中移除所有匹配的元素，這樣可以根據比較方式來判斷。',
      code: '_.pullAllWith([1, 2, 3, 4], [2, 3], (a, b) => a === b)',
      result: _.pullAllWith([1, 2, 3, 4], [2, 3], (a, b) => a === b),
      tip: '可以設計比較邏輯，像是「兩個數字完全相等」才移除，這樣就能完全控制過濾條件。',
      demo: ''
    },
    {
      title: '_.pullAt(array, [indexes])',
      desc: '根據索引提取並移除陣列中的元素，可以一次移除一個或多個元素。',
      code: '_.pullAt([1, 2, 3, 4], [1, 3])',
      result: _.pullAt([1, 2, 3, 4], [1, 3]),
      tip: '「指定位置」，將陣列中的元素直接抽取出來，剩下的再放回。',
      demo: ''
    }
  ];
}
