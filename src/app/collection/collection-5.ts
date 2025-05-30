import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection5Component {
  examples = [
    {
      title: '_.map(collection, iteratee)',
      desc: '將集合的每個元素轉換為新值。',
      code: `_.map([1, 2, 3], n => n * 2)`,
      result: _.map([1, 2, 3], n => n * 2),
      tip: '就是熟悉的 map！',
      demo: ''
    },
    {
      title: '_.flatMap(collection, iteratee)',
      desc: 'map + flat 一層展開。',
      code: `_.flatMap([1, 2], n => [n, n])`,
      result: _.flatMap([1, 2], n => [n, n]),
      tip: '避免手動 map 再 flat。',
      demo: ''
    },
    {
      title: '_.flatMapDeep(collection, iteratee)',
      desc: 'map + 無限深度展開。',
      code: `_.flatMapDeep([1, [2, [3]]], _.identity)`,
      result: _.flatMapDeep([1, [2, [3]]], _.identity),
      tip: '能清空多層巢狀結構。',
      demo: ''
    },
    {
      title: '_.flatMapDepth(collection, iteratee, depth)',
      desc: 'map + 指定深度的展開。',
      code: `_.flatMapDepth([1, [2, [3]]], _.identity, 1)`,
      result: _.flatMapDepth([1, [2, [3]]], _.identity, 1),
      tip: '自由控制展開幾層。',
      demo: ''
    },
  ];
}
