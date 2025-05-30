import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection6Component {

  examples = [{
    title: '_.countBy(collection, iteratee)',
    desc: '根據 iteratee 的結果對集合進行分組並計數。',
    code: `_.countBy([6.1, 4.2, 6.3], Math.floor)`,
    result: _.countBy([6.1, 4.2, 6.3], Math.floor),
    tip: '可以快速得知某個分類下有幾個。',
    demo: ''
  },
  {
    title: '_.groupBy(collection, iteratee)',
    desc: '根據 iteratee 的結果對集合進行分組。',
    code: `_.groupBy(['one', 'two', 'three'], 'length')`,
    result: _.groupBy(['one', 'two', 'three'], 'length'),
    tip: '分類整理資料的好幫手。',
    demo: ''
  },
  {
    title: '_.keyBy(collection, iteratee)',
    desc: '根據 iteratee 結果來做 key，值為原物件。',
    code: `_.keyBy([{ id: 'a' }, { id: 'b' }], 'id')`,
    result: _.keyBy([{ id: 'a' }, { id: 'b' }], 'id'),
    tip: '常用來做 lookup map。',
    demo: ''
  },];
}
