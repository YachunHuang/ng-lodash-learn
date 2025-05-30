import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection4Component {
  examples = [
    {
      title: '_.filter(collection, predicate)',
      desc: '回傳所有符合 predicate 條件的元素。',
      code: `_.filter([1, 2, 3], n => n % 2 === 1)`,
      result: _.filter([1, 2, 3], n => n % 2 === 1),
      tip: '用來過濾資料超方便。',
      demo: ''
    },
    {
      title: '_.reject(collection, predicate)',
      desc: '回傳所有不符合 predicate 條件的元素。',
      code: `_.reject([1, 2, 3], n => n % 2 === 1)`,
      result: _.reject([1, 2, 3], n => n % 2 === 1),
      tip: '剛好與 filter 相反。',
      demo: ''
    },
    {
      title: '_.partition(collection, predicate)',
      desc: '將集合分成兩組：符合與不符合 predicate 的。',
      code: `_.partition([1, 2, 3], n => n % 2)`,
      result: _.partition([1, 2, 3], n => n % 2),
      tip: '回傳 [符合, 不符合]。',
      demo: ''
    },
  ];
}
