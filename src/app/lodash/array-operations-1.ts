import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-operations-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-operations.html',
})
export class ArrayOperations1Component {

  examples = [
    {
      title: '_.chunk(array, [size=1])',
      desc: '把一個陣列切成一塊塊的子陣列，每塊最多 n 個元素。',
      code: "_.chunk(['a', 'b', 'c', 'd'], 2)",
      result: _.chunk(['a', 'b', 'c', 'd'], 2),
      tip: '想像成「每幾個分一組」，分完回傳一個陣列的陣列。',
      demo: ''
    },
    {
      title: '_.drop(array, [n=1])',
      desc: '從陣列{開頭}丟掉 n 個元素。',
      code: "_.drop([1, 2, 3], 2)",
      result: _.drop([1, 2, 3], 2),
      tip: '「前面不要」，丟掉頭幾個。',
      demo: ''
    },
    {
      title: '_.dropRight(array, [n=1])',
      desc: '從陣列{尾巴}丟掉 n 個元素。',
      code: "_.dropRight([1, 2, 3], 2)",
      result: _.dropRight([1, 2, 3], 2),
      tip: '跟 _.drop 相反，是「後面不要」。',
      demo: ''
    },
    {
      title: '_.dropWhile(array, [predicate=_.identity])',
      desc: '從{開頭}開始檢查，只要符合條件的元素就丟掉，直到第一個不符合為止。',
      code: "_.dropWhile([1, 2, 3, 4], n => n < 3)",
      result: _.dropWhile([1, 2, 3, 4], n => n < 3),
      tip: '條件滿足就一直丟，遇到不滿足才停下來，剩下的才會保留。',
      demo: ''
    },
    {
      title: '_.dropRightWhile(array, [predicate=_.identity])',
      desc: '從{尾巴}開始檢查，只要符合條件的元素就丟掉，直到第一個不符合為止。',
      code: "_.dropRightWhile([1, 2, 3, 4], n => n > 2)",
      result: _.dropRightWhile([1, 2, 3, 4], n => n > 2),
      tip: '跟 _.dropWhile 類似，只是方向反過來。',
      demo: ''
    },
    {
      title: '_.initial(array)',
      desc: '把陣列中最後一個元素丟掉，回傳剩下的前面那些。',
      code: `_.initial([1, 2, 3])`,
      result: _.initial([1, 2, 3]),
      tip: '「尾巴不要」，只保留前面的。',
      demo: ''
    },
    {
      title: '_.nth(array, [n=0])',
      desc: '回傳陣列中第 n 個元素，可以是負數代表從後面數。',
      code: '_.nth([1, 2, 3, 4], 2)',
      result: _.nth([1, 2, 3, 4], 2),
      tip: '正數是從前數，負數從後數。',
      demo: ''
    },
  ];
}
