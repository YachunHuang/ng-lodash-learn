import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection2Component {

 examples = [
    {
      title: '_.every(collection, predicate)',
      desc: '檢查集合中是否所有元素都通過 predicate 驗證。',
      code: `_.every([1, 2, 3], n => n > 0)`,
      result: _.every([1, 2, 3], n => n > 0),
      tip: '一個沒過就會回傳 false。',
      demo: ''
    },
    {
      title: '_.some(collection, predicate)',
      desc: '檢查集合中是否有任一元素通過 predicate 驗證。',
      code: `_.some([1, 2, 3], n => n > 2)`,
      result: _.some([1, 2, 3], n => n > 2),
      tip: '找到一個符合條件就返回 true。',
      demo: ''
    },
    {
      title: '_.includes(collection, value)',
      desc: '檢查集合是否包含某個值。',
      code: `_.includes([1, 2, 3], 2)`,
      result: _.includes([1, 2, 3], 2),
      tip: '可用來取代原生 includes。',
      demo: ''
    },
  ];
}
