import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection7Component {
  examples = [
    {
      title: '_.orderBy(collection, iteratees, orders)',
      desc: '多層排序集合。',
      code: `_.orderBy([{a:1,b:2}, {a:1,b:1}], ['a', 'b'], ['asc', 'desc'])`,
      result: _.orderBy([{a:1,b:2}, {a:1,b:1}], ['a', 'b'], ['asc', 'desc']),
      tip: '支援多層欄位與排序方向。',
      demo: ''
    },
    {
      title: '_.sortBy(collection, [iteratees])',
      desc: '根據 iteratees 排序集合。',
      code: `_.sortBy([{a:2}, {a:1}], ['a'])`,
      result: _.sortBy([{a:2}, {a:1}], ['a']),
      tip: '支援多層欄位排序。',
      demo: ''
    }
  ];
}
