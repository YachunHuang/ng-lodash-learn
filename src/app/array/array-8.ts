import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Array8Component {

  examples = [
    {
      title: '_.remove(array, predicate)',
      desc: '移除符合條件的元素，原陣列會被改動。',
      code: `_.remove([1, 2, 3, 4], n => n % 2 == 0)`,
      result: _.remove([1, 2, 3, 4], n => n % 2 == 0),
      tip: '會直接修改原本的 array！',
      demo: ''
    },
    {
      title: '_.reverse(array)',
      desc: '反轉陣列順序，會修改原陣列。',
      code: `_.reverse([1, 2, 3])`,
      result: _.reverse([1, 2, 3]),
      tip: '這不是回傳新的 array，而是直接改動原 array！',
      demo: ''
    },
    {
      title: '_.slice(array, start, end)',
      desc: '從陣列中擷取一段，不改變原陣列。',
      code: `_.slice([1, 2, 3, 4], 1, 3)`,
      result: _.slice([1, 2, 3, 4], 1, 3),
      tip: '跟 Array.prototype.slice 一樣，右邊是「不包含」。',
      demo: ''
    },
    {
      title: '_.sortedIndex(array, value)',
      desc: '找到 value 插入已排序陣列中的位置。',
      code: `_.sortedIndex([10, 20, 30, 40], 25)`,
      result: _.sortedIndex([10, 20, 30, 40], 25),
      tip: '可以拿來做二分搜尋型的邏輯。',
      demo: ''
    },
    {
      title: '_.sortedIndexBy(array, value, iteratee)',
      desc: '和 sortedIndex 類似，但允許指定依據欄位。',
      code: `_.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x)`,
      result: _.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x),
      tip: '常用在物件陣列排序插入。',
      demo: ''
    },
    {
      title: '_.sortedIndexOf(array, value)',
      desc: '回傳已排序陣列中第一個等於 value 的索引。',
      code: `_.sortedIndexOf([1, 1, 2, 2], 2)`,
      result: _.sortedIndexOf([1, 1, 2, 2], 2),
      tip: '前提是 array 要先排序過喔！',
      demo: ''
    },
    {
      title: '_.sortedLastIndex(array, value)',
      desc: '和 sortedIndex 類似，但回傳插入在後面的位置。',
      code: `_.sortedLastIndex([4, 5], 5)`,
      result: _.sortedLastIndex([4, 5], 5),
      tip: '可以讓重複值插在最後。',
      demo: ''
    },
    {
      title: '_.sortedLastIndexBy(array, value, iteratee)',
      desc: '和 sortedLastIndex 類似，但允許指定依據欄位。',
      code: `_.sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x)`,
      result: _.sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x),
      tip: '插在重複值的最末端。',
      demo: ''
    },
    {
      title: '_.sortedLastIndexOf(array, value)',
      desc: '找到已排序陣列中最後一個等於 value 的索引。',
      code: `_.sortedLastIndexOf([1, 1, 2, 2], 2)`,
      result: _.sortedLastIndexOf([1, 1, 2, 2], 2),
      tip: '這比 sortedIndexOf 更適合找「最後一個」位置。',
      demo: ''
    },
    {
      title: '_.sortedUniq(array)',
      desc: '去除已排序陣列的重複項目。',
      code: `_.sortedUniq([1, 1, 2])`,
      result: _.sortedUniq([1, 1, 2]),
      tip: '效率比 _.uniq 高，但前提是你已經排序好了。',
      demo: ''
    },
    {
      title: '_.sortedUniqBy(array, iteratee)',
      desc: '排序後根據 iteratee 做唯一化。',
      code: `_.sortedUniqBy([1.1, 1.2, 2.3], Math.floor)`,
      result: _.sortedUniqBy([1.1, 1.2, 2.3], Math.floor),
      tip: '注意要先排序好，否則結果可能不如預期。',
      demo: ''
    },
    {
      title: '_.tail(array)',
      desc: '	回傳第一個之後的所有元素',
      code: `_.tail([1, 2, 3])`,
      result: _.tail([1, 2, 3]),
      tip: '不改原本的 array',
      demo: ''
    },
    {
      title: '_.take(array, [n=1])',
      desc: '回傳 array 前 n 個元素。',
      code: `_.take([1, 2, 3], 2)`,
      result: _.take([1, 2, 3], 2),
      tip: '想像成從頭「取出」幾個。',
      demo: ''
    },
    {
      title: '_.takeRight(array, [n=1])',
      desc: '回傳 array 最後 n 個元素。',
      code: `_.takeRight([1, 2, 3], 2)`,
      result: _.takeRight([1, 2, 3], 2),
      tip: '方向相反，從尾巴開始取。',
      demo: ''
    },
    {
      title: '_.takeRightWhile(array, predicate)',
      desc: '從尾巴開始，直到 predicate 不成立為止。',
      code: `_.takeRightWhile([1, 2, 3, 4], n => n > 2)`,
      result: _.takeRightWhile([1, 2, 3, 4], n => n > 2),
      tip: '倒著掃，掃到第一個不符合的停下來。',
      demo: ''
    },
    {
      title: '_.takeWhile(array, predicate)',
      desc: '從頭開始，只取 predicate 成立的元素。',
      code: `_.takeWhile([1, 2, 3, 4], n => n < 3)`,
      result: _.takeWhile([1, 2, 3, 4], n => n < 3),
      tip: '從前面掃過去，一直到不符合為止。',
      demo: ''
    },
    {
      title: '_.union([...arrays])',
      desc: '回傳所有不重複的元素。',
      code: `_.union([2], [1, 2])`,
      result: _.union([2], [1, 2]),
      tip: '像是把多個陣列 merge 起來去除重複。',
      demo: ''
    },
    {
      title: '_.unionBy([...arrays], iteratee)',
      desc: '指定條件合併去除重複。',
      code: `_.unionBy([2.1], [1.2, 2.3], Math.floor)`,
      result: _.unionBy([2.1], [1.2, 2.3], Math.floor),
      tip: '合併多個陣列，並用指定的方式判斷哪些項目算「重複」，然後只保留第一個出現的。',
      demo: ''
    },
    {
      title: '_.unionWith([...arrays], comparator)',
      desc: '自訂兩個值相等的比較方式。',
      code: `_.unionWith([1, 2], [2, 3], _.isEqual)`,
      result: _.unionWith([1, 2], [2, 3], _.isEqual),
      tip: '合併多個陣列，並且用指定的函式來決定「兩個值是否相等」接著去除重複。',
    },
    {
      title: '_.uniq(array)',
      desc: '去除重複值，回傳新陣列。',
      code: `_.uniq([2, 1, 2])`,
      result: _.uniq([2, 1, 2]),
      tip: '排序前或後都可以用，效率比 sortedUniq 差。',
      demo: ''
    },
    {
      title: '_.uniqBy(array, iteratee)',
      desc: '自訂條件去除重複。',
      code: `</br>const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Alice' },
  { id: 1, name: 'Bob' }
];
</br>
_.uniqBy(users, user => user.id)`,
      result: (() => {
        const users = [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Alice' },
          { id: 1, name: 'Bob' }
        ];
        return _.uniqBy(users, user => user.id)
      })(),
      tip: '根據指定的條件，移除重複的項目，只保留第一個出現的。',
      demo: ''
    },
    {
      title: '_.uniqWith(array, comparator)',
      desc: '自訂比較函式做去除重複。',
      code: `_.uniqWith([1, 2], _.isEqual)`,
      result: _.uniqWith([1, 2], _.isEqual),
      tip: '與 unionWith 類似，適合複雜比對。',
      demo: ''
    },
    {
      title: '_.unzip(array)',
      desc: '跟 zip 相反，把陣列的陣列拆開。',
      code: `_.unzip([[1, 2], [10, 20]])`,
      result: _.unzip([[1, 2], [10, 20]]),
      tip: '行列對調的概念。',
      demo: `</br>
      [</br>
  [1, 10], // 把所有的「第一個」元素組成一組</br>
  [2, 20]  // 把所有的「第二個」元素組成一組</br>
]`
    },
    {
      title: '_.unzipWith(array, iteratee)',
      desc: '一邊拆一邊做運算。',
      code: `_.unzipWith([[1, 10], [2, 20]], _.add)`,
      result: _.unzipWith([[1, 10], [2, 20]], _.add),
      tip: '加總轉置',
      demo: ''
    },
    {
      title: '_.without(array, [values])',
      desc: '回傳排除某些元素的新陣列。',
      code: `_.without([2, 1, 2, 3], 1, 2)`,
      result: _.without([2, 1, 2, 3], 1, 2),
      tip: '排除法，剔除不要的。',
      demo: ''
    },
    {
      title: '_.xor([...arrays])',
      desc: '傳回只出現在其中一個陣列的值（排除重複）。',
      code: `_.xor([2, 1], [2, 3])`,
      result: _.xor([2, 1], [2, 3]),
      tip: '集合的「對稱差集」概念。',
      demo: ''
    },
    {
      title: '_.xorBy([...arrays], iteratee)',
      desc: '用自訂條件來做 xor。',
      code: `_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)`,
      result: _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor),
      tip: '針對物件類型資料更好用。',
      demo: ''
    },
    {
      title: '_.xorWith([...arrays], comparator)',
      desc: '自訂比較方式做對稱差集。',
      code: `_.xorWith([1, 2], [2, 3], _.isEqual)`,
      result: _.xorWith([1, 2], [2, 3], _.isEqual),
      tip: '配合 _.isEqual 做深層差集。',
      demo: ''
    },
    {
      title: '_.zip([...arrays])',
      desc: '把多個陣列的相同索引項目組合成陣列。',
      code: `_.zip(['a', 'b'], [1, 2], [true, false])`,
      result: _.zip(['a', 'b'], [1, 2], [true, false]),
      tip: '像是把每欄組起來變 row。',
      demo: ''
    },
    {
      title: '_.zipObject([props], [values])',
      desc: '組成一個物件，把 key-value 配起來。',
      code: `_.zipObject(['a', 'b'], [1, 2])`,
      result: _.zipObject(['a', 'b'], [1, 2]),
      tip: '適合處理平行欄位資料。',
      demo: ''
    },
    {
      title: '_.zipObjectDeep([props], [values])',
      desc: '支援巢狀路徑的 key。',
      code: `_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])`,
      result: _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]),
      tip: '可以產出巢狀結構的物件。',
      demo: ''
    },
    {
      title: '_.zipWith([...arrays], iteratee)',
      desc: 'zip 同時搭配一個運算。',
      code: `_.zipWith([1, 2], [10, 20], _.add)`,
      result: _.zipWith([1, 2], [10, 20], _.add),
      tip: '像是一邊壓扁一邊加總。',
      demo: ''
    }
  ];

}
