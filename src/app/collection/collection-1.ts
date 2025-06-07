import * as _ from 'lodash-es';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../shared/highlight.directive';
import { scrollToElementById } from '../shared/helper';

@Component({
  selector: 'collection-1',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: '../operations.html',
})
export class Collection1Component implements OnChanges {

  @Input() itemType: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemType'] && changes['itemType'].currentValue) {
      scrollToElementById(this.itemType);
    }
  }
  examples = [
    {
      title: '_.countBy(collection, iteratee)',
      desc: '根據 iteratee 的結果對集合進行分組並計數。',
      code: `_.countBy([6.1, 4.2, 6.3], Math.floor)`,
      typescript: `[6.1, 4.2, 6.3].reduce((acc, cur) => {
      const key = Math.floor(cur);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)`,
      result: _.countBy([6.1, 4.2, 6.3], Math.floor),
    },
    {
      title: '_.every(collection, predicate)',
      desc: '檢查集合中是否所有元素都通過 predicate 驗證。',
      code: `_.every([1, 2, 3], n => n > 0)`,
      typescript: `[1, 2, 3].every(n => n > 0)`,
      result: _.every([1, 2, 3], n => n > 0),
    },
    {
      title: '_.filter(collection, predicate)',
      desc: '回傳所有符合 predicate 條件的元素。',
      code: `_.filter([1, 2, 3], n => n % 2 === 1)`,
      typescript: `[1, 2, 3].filter(n => n % 2 === 1)`,
      result: _.filter([1, 2, 3], n => n % 2 === 1),
    },
    {
      title: '_.find(collection, predicate)',
      desc: '回傳第一個符合 predicate 條件的元素。',
      code: `_.find([{a: 1}, {a: 2}], {a: 2})`,
      typescript: `[{a: 1}, {a: 2}].find(item => _.isMatch(item, {a: 2})) // 需用 isMatch 判斷物件`,
      result: _.find([{ a: 1 }, { a: 2 }], { a: 2 }),
    },
    {
      title: '_.findLast(collection, predicate)',
      desc: '從右往左回傳第一個符合條件的元素。',
      code: `_.findLast([{a: 1}, {a: 2}], o => o.a > 1)`,
      typescript: `[{a: 1}, {a: 2}].slice().reverse().find(o => o.a > 1)`,
      result: _.findLast([{ a: 1 }, { a: 2 }], o => o.a > 1),
    },
    {
      title: '_.flatMap(collection, iteratee)',
      desc: 'map + flat 一層展開。',
      code: `_.flatMap([1, 2], n => [n, n])`,
      typescript: `[1, 2].flatMap(n => [n, n])`,
      result: _.flatMap([1, 2], n => [n, n]),
    },
    {
      title: '_.flatMapDeep(collection, iteratee)',
      desc: 'map + 無限深度展開。',
      code: `_.flatMapDeep([1, [2, [3]]], _.identity)`,
      typescript: `[1, [2, [3]]].flatMap(x => x).flat(Infinity)`,
      result: _.flatMapDeep([1, [2, [3]]], _.identity),
    },
    {
      title: '_.flatMapDepth(collection, iteratee, depth)',
      desc: 'map + 指定深度的展開。',
      code: `_.flatMapDepth([1, [2, [3]]], _.identity, 1)`,
      typescript: `[1, [2, [3]]].flatMap(x => x).flat(1)`,
      result: _.flatMapDepth([1, [2, [3]]], _.identity, 1),
    },
    {
      title: '_.forEach(collection, iteratee)',
      desc: '對集合中的每個元素執行 iteratee。',
      code: `_.forEach([1, 2, 3], n => console.log(n))`,
      typescript: `[1, 2, 3].forEach(n => console.log(n))`,
      result: _.forEach([1, 2, 3], n => console.log(n)),
    },
    {
      title: '_.forEachRight(collection, iteratee)',
      desc: '從右至左遍歷集合並執行 iteratee。',
      code: `_.forEachRight([1, 2, 3], n => console.log(n))`,
      typescript: `[1, 2, 3].slice().reverse().forEach(n => console.log(n))`,
      result: _.forEachRight([1, 2, 3], n => console.log(n)),
    },
    {
      title: '_.groupBy(collection, iteratee)',
      desc: '根據 iteratee 的結果對集合進行分組。',
      code: `_.groupBy(['one', 'two', 'three'], 'length')`,
      typescript: `['one', 'two', 'three'].reduce((acc, cur) => {
      const key = cur.length;
      (acc[key] = acc[key] || []).push(cur);
      return acc;
    }, {} as Record<string, string[]>)`,
      result: _.groupBy(['one', 'two', 'three'], 'length'),
    },
    {
      title: '_.includes(collection, value)',
      desc: '檢查集合是否包含某個值。',
      code: `_.includes([1, 2, 3], 2)`,
      typescript: `[1, 2, 3].includes(2)`,
      result: _.includes([1, 2, 3], 2),
    },
    {
      title: '_.invokeMap(collection, methodName)',
      desc: '對集合中的每個元素呼叫指定方法。',
      code: `_.invokeMap([[5, 1], [3, 2]], 'sort')`,
      typescript: `[[5, 1], [3, 2]].map(arr => arr.sort())`,
      result: _.invokeMap([[5, 1], [3, 2]], 'sort'),
    },
    {
      title: '_.keyBy(collection, iteratee)',
      desc: '根據 iteratee 結果來做 key，值為原物件。',
      code: `_.keyBy([{ id: 'a' }, { id: 'b' }], 'id')`,
      typescript: `[{ id: 'a' }, { id: 'b' }].reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {} as Record<string, { id: string }>)`,
      result: _.keyBy([{ id: 'a' }, { id: 'b' }], 'id'),
    },
    {
      title: '_.map(collection, iteratee)',
      desc: '將集合的每個元素轉換為新值。',
      code: `_.map([1, 2, 3], n => n * 2)`,
      typescript: `[1, 2, 3].map(n => n * 2)`,
      result: _.map([1, 2, 3], n => n * 2),
    },
    {
      title: '_.orderBy(collection, iteratees, orders)',
      desc: '多層排序集合。',
      code: `_.orderBy([{a:1,b:2}, {a:1,b:1}], ['a', 'b'], ['asc', 'desc'])`,
      typescript: `[{a:1,b:2}, {a:1,b:1}].sort((x, y) => x.a - y.a || (y.b - x.b))`,
      result: _.orderBy([{ a: 1, b: 2 }, { a: 1, b: 1 }], ['a', 'b'], ['asc', 'desc']),
    },
    {
      title: '_.partition(collection, predicate)',
      desc: '將集合分成兩組：符合與不符合 predicate 的。',
      code: `_.partition([1, 2, 3], n => n % 2)`,
      typescript: `const arr = [1, 2, 3]; [arr.filter(n => n % 2), arr.filter(n => !(n % 2))]`,
      result: _.partition([1, 2, 3], n => n % 2),
    },
    {
      title: '_.reduce(collection, iteratee, [accumulator])',
      desc: '把集合（不管是陣列還是物件）從頭到尾掃一遍，透過提供的函式，逐步累加成一個「最終值」',
      code: `_.reduce([1, 2], (sum, n) => sum + n, 0)`,
      typescript: `[1, 2].reduce((sum, n) => sum + n, 0)`,
      result: _.reduce([1, 2], (sum, n) => sum + n, 0),
    },
    {
      title: '_.reduceRight(collection, iteratee, [accumulator])',
      desc: '將集合歸納成單一值（從右往左）。',
      code: `_.reduceRight(['a', 'b', 'c'], (acc, val) => acc + val, '')`,
      typescript: `['a', 'b', 'c'].reduceRight((acc, val) => acc + val, '')`,
      result: _.reduceRight(['a', 'b', 'c'], (acc, val) => acc + val, ''),
    },
    {
      title: '_.reject(collection, predicate)',
      desc: '回傳所有不符合 predicate 條件的元素。',
      code: `_.reject([1, 2, 3], n => n % 2 === 1)`,
      typescript: `[1, 2, 3].filter(n => !(n % 2 === 1))`,
      result: _.reject([1, 2, 3], n => n % 2 === 1),
    },
    {
      title: '_.sample(collection)',
      desc: '從集合中隨機取出一個元素。',
      code: `_.sample([1, 2, 3, 4])`,
      typescript: `[1, 2, 3, 4][Math.floor(Math.random() * 4)]`,
      result: _.sample([1, 2, 3, 4]),
    },
    {
      title: '_.sampleSize(collection, n)',
      desc: '從集合中隨機取出 n 個不重複的元素。',
      code: `_.sampleSize([1, 2, 3, 4], 2)`,
      typescript: `[1, 2, 3, 4].sort(() => Math.random() - 0.5).slice(0, 2)`,
      result: _.sampleSize([1, 2, 3, 4], 2)
    },
    {
      title: '_.shuffle(collection)',
      desc: '將集合隨機打亂順序。',
      code: `_.shuffle([1, 2, 3, 4])`,
      typescript: `[1, 2, 3, 4].sort(() => Math.random() - 0.5)`,
      result: _.shuffle([1, 2, 3, 4]),
    },
    {
      title: '_.size(collection)',
      desc: '回傳集合的長度或物件的屬性數量。',
      code: `_.size({ a: 1, b: 2 })`,
      typescript: `Object.keys({ a: 1, b: 2 }).length`,
      result: _.size({ a: 1, b: 2 }),
    },
    {
      title: '_.some(collection, predicate)',
      desc: '檢查集合中是否有任一元素通過 predicate 驗證。',
      code: `_.some([1, 2, 3], n => n > 2)`,
      typescript: `[1, 2, 3].some(n => n > 2)`,
      result: _.some([1, 2, 3], n => n > 2),
    },
    {
      title: '_.sortBy(collection, [iteratees])',
      desc: '根據 iteratees 排序集合。',
      code: `_.sortBy([{a:2}, {a:1}], ['a'])`,
      typescript: `[{a:2}, {a:1}].sort((x, y) => x.a - y.a)`,
      result: _.sortBy([{ a: 2 }, { a: 1 }], ['a']),
    }
  ];
}
