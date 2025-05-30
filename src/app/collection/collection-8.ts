import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection8Component {
  examples = [
    {
      title: '_.reduce(collection, iteratee, [accumulator])',
      desc: '把集合（不管是陣列還是物件）從頭到尾掃一遍，透過提供的函式，逐步累加成一個「最終值」',
      code: `_.reduce([1, 2], (sum, n) => sum + n, 0)`,
      result: _.reduce([1, 2], (sum, n) => sum + n, 0),
      tip: '就像陣列的 reduce。',
      demo: '從多個值 ➜ 歸納成一個值，從左往右處理'
    },
    {
      title: '_.reduceRight(collection, iteratee, [accumulator])',
      desc: '將集合歸納成單一值（從右往左）。',
      code: `_.reduceRight(['a', 'b', 'c'], (acc, val) => acc + val, '')`,
      result: _.reduceRight(['a', 'b', 'c'], (acc, val) => acc + val, ''),
      tip: '跟 reduce 類似，但方向相反。',
      demo: ''
    },
    {
      title: '_.size(collection)',
      desc: '回傳集合的長度或物件的屬性數量。',
      code: `_.size({ a: 1, b: 2 })`,
      result: _.size({ a: 1, b: 2 }),
      tip: '支援陣列、字串、物件。',
      demo: ''
    },
  ];
}
