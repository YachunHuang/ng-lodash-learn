import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-operations-6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array.html',
})
export class Array6Component {

  examples = [
    {
      title: '_.head(array) 官方文件推薦使用的名稱',
      desc: '回傳陣列的第一個元素。',
      code: '_.head([1, 2, 3])',
      result: _.head([1, 2, 3]),
      tip: '看看陣列開頭是誰。',
      demo: ''
    },
    {
      title: '_.first(array) 別名，為了讓使用者能更直覺使用',
      desc: '拿出陣列的「第一個元素」。',
      code: '_.first([1, 2, 3])',
      result: _.first([1, 2, 3]),
      tip: '有兩種寫法：_.first 或 _.head，其實一樣。',
      demo: ''
    },
    {
      title: '_.last(array)',
      desc: '拿出陣列的「最後一個元素」。',
      code: '_.last([1, 2, 3])',
      result: _.last([1, 2, 3]),
      tip: '更語意化，如果常常用 .length - 1 的話，可以改用這個。',
      demo: ''
    },
  ];
}
