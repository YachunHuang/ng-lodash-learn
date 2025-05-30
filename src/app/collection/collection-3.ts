import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection3Component {

  examples = [
    {
      title: '_.find(collection, predicate)',
      desc: '回傳第一個符合 predicate 條件的元素。',
      code: `_.find([{a: 1}, {a: 2}], {a: 2})`,
      result: _.find([{a: 1}, {a: 2}], {a: 2}),
      tip: '找到就不繼續了，效率不錯。',
      demo: ''
    },
    {
      title: '_.findLast(collection, predicate)',
      desc: '從右往左回傳第一個符合條件的元素。',
      code: `_.findLast([{a: 1}, {a: 2}], o => o.a > 1)`,
      result: _.findLast([{a: 1}, {a: 2}], o => o.a > 1),
      tip: '跟 find 類似，但方向相反。',
      demo: ''
    },
  ];
}
