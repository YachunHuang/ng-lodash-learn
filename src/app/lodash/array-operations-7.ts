import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'array-operations-7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-operations-7.html',
})
export class ArrayOperations7Component implements OnInit {

  ngOnInit(): void {
    this.findIndexTimeDemo1();
    this.differentWithDemo1();
    this.intersectionWithDemo1();
    this.joinDemo1();
    this.pullDemo1();
  }

  findIndexTimeDemo1() {
    const users = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 18 }
    ];

    // 測試 原生 findIndex()
    console.time('Native findIndex');
    users.findIndex(u => u.age === 18);
    console.timeEnd('Native findIndex');

    // 測試 Lodash findIndex()
    console.time('Lodash _.findIndex');
    _.findIndex(users, { age: 18 });
    console.timeEnd('Lodash _.findIndex');
  }

  /** 找出只有第一組資料有的項目（差集) */
  differentWithDemo1() {
    const beforeEdit = [
      { id: 1, tag: { name: '前端' } },
      { id: 2, tag: { name: '後端' } }
    ];

    const afterEdit = [
      { id: 1, tag: { name: '前端' } },
      { id: 2, tag: { name: '後端' } },
      { id: 3, tag: { name: 'Node.js' } }
    ];

    const addedItems = _.differenceWith(afterEdit, beforeEdit, _.isEqual);

    // console.log(addedItems);
    // 結果：[ { id: 3, tag: { name: 'Node.js' } } ]
  }

  /** 找出兩組資料的交集 */
  intersectionWithDemo1() {
    const apiResultA = [
      { id: 1, name: '前端' },
      { id: 2, name: '後端' },
      { id: 3, name: '資料庫' }
    ];

    const apiResultB = [
      { id: 2, name: '後端' },
      { id: 4, name: 'DevOps' }
    ];

    const commonTags = _.intersectionWith(apiResultA, apiResultB, _.isEqual);

    // console.log(commonTags);
    // 結果：[ { id: 2, name: '後端' } ]
  }

  joinDemo1() {
    const tagList = [
      { name: '前端' },
      { name: undefined },
      { id: 3, name: '資料庫' }
    ];

    const label = tagList
      .map(tag => tag.name)
      .filter(name => !!name)
      .join('、');

    // console.log(label);

    const label2 = _.join(_.compact(_.map(tagList, 'name')), '、');
    // console.log(label2);
    // 結果："前端、資料庫"
  }

  pullDemo1() {
    // const array = Array.from({ length: 100_000 }, (_, i) => i);
    // const valuesToRemove = [123, 456, 789, 9999, 54321];

    // // 測試 lodash.pull
    // const arr1 = [...array];
    // console.time('lodash.pull');
    // _.pull(arr1, ...valuesToRemove);
    // console.timeEnd('lodash.pull');

    // // 測試 filter + includes
    // const arr2 = [...array];
    // console.time('filter.includes');
    // arr2.filter(i => !valuesToRemove.includes(i));
    // console.timeEnd('filter.includes');

    const array = Array.from({ length: 100_000 }, (_, i) => i);
    const valuesToRemove = [123, 456, 789, 9999, 54321];

    // filter + includes
    // 每筆陣列都跑 includes()（也就是 valuesToRemove.length 次比對）
    // 如果 valuesToRemove 有 5 個，就會做 5 萬次查找（10 萬陣列 × 5）
    console.time('filter.includes');
    const r1 = array.filter(i => !valuesToRemove.includes(i));
    console.timeEnd('filter.includes');

    // for + indexOf + splice
    // 直接改原陣列＋移除數量少
    const arr2 = [...array];
    console.time('for.indexOf.splice');
    for (let i = 0; i < valuesToRemove.length; i++) {
      const index = arr2.indexOf(valuesToRemove[i]);
      if (index > -1) {
        arr2.splice(index, 1);
      }
    }
    console.timeEnd('for.indexOf.splice');

    // _.pull
    const arr3 = [...array];
    console.time('lodash _.pull');
    _.pull(arr3, ...valuesToRemove);
    console.timeEnd('lodash _.pull');

    // filter + Set.has
    // 會重複執行大量計算
    const arr4 = [...array];
    const set = new Set(valuesToRemove);
    console.time('filter.set.has');
    const r4 = arr4.filter(i => !set.has(i));
    console.timeEnd('filter.set.has');
  }
}
