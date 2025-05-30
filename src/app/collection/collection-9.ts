import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection9Component {

  examples = [
    {
      title: '_.sample(collection)',
      desc: '從集合中隨機取出一個元素。',
      code: `_.sample([1, 2, 3, 4])`,
      result: _.sample([1, 2, 3, 4]),
      tip: '隨機抽一筆資料。',
      demo: ''
    },
    {
      title: '_.sampleSize(collection, n)',
      desc: '從集合中隨機取出 n 個不重複的元素。',
      code: `_.sampleSize([1, 2, 3, 4], 2)`,
      result: _.sampleSize([1, 2, 3, 4], 2),
      tip: '用來做抽獎、測試樣本等超方便。',
      demo: ''
    },
    {
      title: '_.shuffle(collection)',
      desc: '將集合隨機打亂順序。',
      code: `_.shuffle([1, 2, 3, 4])`,
      result: _.shuffle([1, 2, 3, 4]),
      tip: '打亂順序常用在遊戲或隨機排序。',
      demo: ''
    },
  ];
}
