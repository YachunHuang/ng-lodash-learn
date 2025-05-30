import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection1Component {

 examples = [
    {
      title: '_.forEach(collection, iteratee)',
      desc: '對集合中的每個元素執行 iteratee。',
      code: `_.forEach([1, 2, 3], n => console.log(n))`,
      result: _.forEach([1, 2, 3], n => console.log(n)),
      tip: '等同於原生的 forEach。',
      demo: ''
    },
    {
      title: '_.forEachRight(collection, iteratee)',
      desc: '從右至左遍歷集合並執行 iteratee。',
      code: `_.forEachRight([1, 2, 3], n => console.log(n))`,
      result: _.forEachRight([1, 2, 3], n => console.log(n)),
      tip: '用來反向處理陣列很實用。',
      demo: ''
    },
    {
      title: '_.invokeMap(collection, methodName)',
      desc: '對集合中的每個元素調用指定方法。',
      code: `_.invokeMap([[5, 1], [3, 2]], 'sort')`,
      result: _.invokeMap([[5, 1], [3, 2]], 'sort'),
      tip: '常用來對內部陣列進行排序。',
      demo: ''
    },
  ];
}
