import * as _ from 'lodash-es';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../shared/highlight.directive';
import { scrollToElementById } from '../shared/helper';

@Component({
  selector: 'array-1',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: '../operations.html',
})
export class Array1Component implements OnChanges {
  @Input() itemType: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemType'] && changes['itemType'].currentValue) {
      scrollToElementById(this.itemType);
    }
  }

  examples = [
    {
      title: '_.chunk(array, [size=1])',
      desc: '把一個陣列，按照指定大小，切成「一塊塊的小陣列」。',
      code: `_.chunk(['a', 'b', 'c', 'd'], 2)`,
      typescript: `function chunk<T>(arr: T[], size = 1): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}`,
      result: _.chunk(['a', 'b', 'c', 'd'], 2),
      tip: '每 2 個為一組切開。如果原陣列長度不能整除，就會剩一組沒滿的。'
    },
    {
      title: '_.compact(array)',
      desc: '把陣列裡面的「假值」（像是 false, null, 0, "", undefined, NaN)都清掉。',
      code: '_.compact([0, 1, false, 2, "", 3])',
      typescript: `[0, 1, false, 2, "", 3].filter(Boolean)`,
      result: _.compact([0, 1, false, 2, "", 3]),
      tip: ''
    },
    {
      title: '_.concat(array, [values])',
      desc: '把原陣列和其他資料組合起來，形成一個全新的陣列，不會改變原本的陣列。',
      code: '_.concat([1, 2], [3, 4], [5])',
      typescript: `const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5];

const result = arr1.concat(arr2, arr3);
`,
      result: _.concat([1, 2], [3, 4], [5]),
      tip: ''
    },
    {
      title: '_.difference(array, [values])',
      desc: '回傳那些「在第一個陣列裡面，但其他陣列都沒有出現」的元素。',
      code: '_.difference([2, 1], [2, 3])',
      typescript: `const arr1 = [2, 1];
const arr2 = [2, 3];

// 過濾掉 arr2 裡面有的元素
const result = arr1.filter(x => !arr2.includes(x));
`,
      result: _.difference([2, 1], [2, 3]),
      tip: ''
    },
    {
      title: '_.differenceBy(array, [values], [iteratee=_.identity])',
      desc: `對比兩個陣列，保留 只存在第一個陣列 中的項目；
可以指定用什麼方式來比對（用 iteratee）。`,
      code: `_.differenceBy(
  [{ name: 'a' }, { name: 'b' }],
  [{ name: 'b' }],
  o => o.name
)
`,
      typescript: `const arr1 = [{ name: 'a' }, { name: 'b' }];
const arr2 = [{ name: 'b' }];

// 先把 arr2 的 name 值拉出來
const namesInArr2 = arr2.map(x => x.name);

// 再過濾 arr1，把 name 不在 arr2 裡的留下來
const result = arr1.filter(x => !namesInArr2.includes(x.name));
`,
      result: _.differenceBy(
        [{ name: 'a' }, { name: 'b' }],
        [{ name: 'b' }],
        o => o.name
      )
      ,
      tip: ''
    },
    {
      title: '_.differenceWith(array, [values], [comparator])',
      desc: `從第一個陣列中找出「不在第二個陣列中」的項目。
可以提供一個自訂的比較函式（像是 _.isEqual），來決定兩個值是否一樣。`,
      code: '_.differenceWith([{ x: 1 }, { x: 2 }],[{ x: 1 }],_.isEqual)',
      typescript: `isEqual(obj1, obj2) {
  return obj1.x === obj2.x;
}

const result = [{ x: 1 }, { x: 2 }].filter(a =>
  ![{ x: 1 }].some(b => isEqual(a, b))
);
`,
      result: _.differenceWith([{ x: 1 }, { x: 2 }], [{ x: 1 }], _.isEqual),
      tip: ''
    },
    {
      title: '_.drop(array, [n=1])',
      desc: '從陣列開頭丟掉 n 個元素。',
      code: `_.drop([1, 2, 3], 2)`,
      typescript: `[1, 2, 3].slice(2)`,
      result: _.drop([1, 2, 3], 2),
      tip: ''
    },
    {
      title: '_.dropRight(array, [n=1])',
      desc: '從陣列尾巴丟掉 n 個元素。',
      code: `_.dropRight([1, 2, 3], 2)`,
      typescript: `[1, 2, 3].slice(0, [1, 2, 3].length - 2)`,
      result: _.dropRight([1, 2, 3], 2),
      tip: ''
    },
    {
      title: '_.dropRightWhile(array, [predicate=_.identity])',
      desc: '從尾巴開始檢查，只要符合條件的元素就丟掉，直到第一個不符合為止。',
      code: `_.dropRightWhile([1, 2, 3, 4], n => n > 2)`,
      typescript: `(() => {
  const arr = [1, 2, 3, 4];
  let i = arr.length;
  while (i-- && arr[i] > 2) {}
  return arr.slice(0, i + 1);
})()`,
      result: _.dropRightWhile([1, 2, 3, 4], n => n > 2),
      tip: ''
    },
    {
      title: '_.dropWhile(array, [predicate=_.identity])',
      desc: '從陣列開頭開始，一個一個檢查元素，只要「符合條件」就丟掉，遇到第一個不符合的就停，剩下的元素通通回傳。',
      code: `_.dropWhile([1, 2, 3, 4], n => n < 3)`,
      typescript: `const arr = [1, 2, 3, 4];
const index = arr.findIndex(n => !(n < 3));
const result = arr.slice(index);
console.log(result);
`,
      result: _.dropWhile([1, 2, 3, 4], n => n < 3),
      tip: ''
    },
    {
      title: '_.fill(array, value, [start=0], [end=array.length])',
      desc: '就是把陣列裡從 start 到 end（不包含 end）的元素，都換成同一個新值',
      code: "_.fill([1, 2, 3, 4], 'X', 1, 3)",
      typescript: `const arr = [1, 2, 3, 4];
arr.fill('X', 1, 3);
`,
      result: _.fill([1, 2, 3, 4], 'X', 1, 3),
      tip: `從 index 1 開始填：也就是原本的值 2
到 index 3 為止（不包含 index 3，所以 4 不會被置換）`
    },
    {
      title: '_.findIndex(array, [predicate=_.identity], [fromIndex=0])',
      desc: '找出陣列裡第一個符合條件的元素的 index，找不到會回傳 -1。',
      code: '_.findIndex([1, 2, 3, 4], n => n > 2)',
      typescript: `[1, 2, 3, 4].findIndex(n => n > 2)`,
      result: _.findIndex([1, 2, 3, 4], (n) => n > 2),
      tip: ''
    },
    {
      title: '_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])',
      desc: '跟 _.findIndex 類似，但是從尾巴往前找，找出最後一個符合條件的 index。',
      code: '_.findLastIndex([1, 2, 3, 4], n => n > 2)',
      typescript: `[1, 2, 3, 4].length - 1 - [...[1, 2, 3, 4]].reverse().findIndex(n => n > 2)`,
      result: _.findLastIndex([1, 2, 3, 4], (n) => n > 2),
      tip: ''
    },
    {
      title: '_.first(array) 別名，為了讓使用者能更直覺使用',
      desc: '是 array[0] 的別名，讓語意更明確一點：直接拿第一個元素。',
      code: '_.first([1, 2, 3])',
      typescript: `[1, 2, 3][0]`,
      result: _.first([1, 2, 3]),
      tip: ''
    },
    {
      title: '_.flatten(array)（只攤一層）',
      desc: '把「只有一層巢狀的陣列攤平」，讓它變成一個單純的陣列。',
      code: '_.flatten([1, [2, 3], [4, [5]]])',
      typescript: '[1, [2, 3], [4, [5]]].flat()',
      result: _.flatten([1, [2, 3], [4, [5]]]),
      tip: ''
    },
    {
      title: '_.flattenDeep(array) (攤到最底層）',
      desc: '把任何層數的巢狀陣列，全部打開、展平，變成一個單純的一維陣列。',
      code: '_.flattenDeep([1, [2, [3, [4]]]])',
      typescript: `[1, [2, [3, [4]]]].flat(Infinity)
// arr.flat(Infinity) 這寫法其實是原生 JS 陣列提供的一種「攤平」方式`,
      result: _.flattenDeep([1, [2, [3, [4]]]]),
      tip: ''
    },
    {
      title: '_.flattenDepth(array, [depth=1]) (指定層數的展開)',
      desc: '將陣列展開到指定的層數，可以控制要展開幾層的巢狀陣列，超過的層數就不會展開。',
      code: '_.flattenDepth([1, [2, [3, [4]]]], 2)',
      typescript: '[1, [2, [3, [4]]]].flat(2)',
      result: _.flattenDepth([1, [2, [3, [4]]]], 2),
      tip: `
Level 0: [1, [2, [3, [4]]]]   // 根陣列，不算在 flatten 的層數裡
Level 1: 1, [2, [3, [4]]]     // 第一層
Level 2: 2, [3, [4]]          // 第二層
Level 3: 3, [4]               // 第三層
Level 4: 4
    `
    },
    {
      title: '_.fromPairs(pairs)',
      desc: '把一個「對偶陣列」，也就是每個元素都包含「key」和「value」的二元組，轉換成物件。',
      code: '_.fromPairs([["a", 1], ["b", 2]])',
      typescript: `Object.fromEntries([["a", 1], ["b", 2]])`,
      result: _.fromPairs([["a", 1], ["b", 2]]),
      tip: ''
    },
    {
      title: '_.head(array) 官方文件推薦使用的名稱',
      desc: '回傳陣列的第一個元素。',
      code: '_.head([1, 2, 3])',
      typescript: '[1, 2, 3][0]',
      result: _.head([1, 2, 3]),
      tip: ''
    },
    {
      title: '_.indexOf(array, value, [fromIndex=0])',
      desc: '找某個值在陣列中「第一次出現的位置」。',
      code: '_.indexOf([1, 2, 1, 2], 2)',
      typescript: `[1, 2, 1, 2].indexOf(2)`,
      result: _.indexOf([1, 2, 1, 2], 2),
      tip: ''
    },
    {
      title: '_.initial(array)',
      desc: '把陣列中最後一個元素丟掉，回傳剩下的前面那些。',
      code: `_.initial([1, 2, 3])`,
      typescript: `[1, 2, 3].slice(0, -1)`,
      result: _.initial([1, 2, 3]),
      tip: ''
    },
    {
      title: '_.intersection([arrays])',
      desc: '把多個陣列做「交集運算」：只留下那些「每一個陣列裡都出現過」的元素。',
      code: '_.intersection([2, 1], [2, 3])',
      typescript: `[2, 1].filter(x => [2, 3].includes(x))`,
      result: _.intersection([2, 1], [2, 3]),
      tip: ''
    },
    {
      title: '_.intersectionBy([arrays], [iteratee=_.identity])',
      desc: '求交集，但「比的是加工後的值」',
      code: `_.intersectionBy(
  [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
  [{ id: 2, name: 'x' }],
  'id'
)`,
      typescript: `[{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
  .filter(x => [2].includes(x.id))
`,
      result: _.intersectionBy(
  [{ id: 1, name: 'a' }, { id: 2, name: 'b' }],
  [{ id: 2, name: 'x' }],
  'id'
),
      tip: ''
    },
    {
      title: '_.intersectionWith([arrays], [comparator])',
      desc: '交集的進階版，用自定義比較函式來決定兩個值是否相等。',
      code: '_.intersectionWith([{ x: 1 }], [{ x: 1 }], _.isEqual)',
      typescript: `[{ x: 1 }, { x: 2 }]
  .filter(a =>
    [{ x: 1 }].some(b =>
      JSON.stringify(a) === JSON.stringify(b)
    )
  )
`,
      result: _.intersectionWith([{ x: 1 }], [{ x: 1 }], _.isEqual),
      tip: ''
    },
    {
      title: '_.join(array, [separator=\',\'])',
      desc: '將陣列中的元素用指定的分隔符號連接成一個字串。',
      code: `_.join(['a', 'b', 'c'], '-')`,
      typescript: `['a', 'b', 'c'].join('-')`,
      result: _.join(['a', 'b', 'c'], '-'),
      tip: ''
    },
    {
      title: '_.last(array)',
      desc: '拿出陣列的「最後一個元素」。',
      code: '_.last([1, 2, 3])',
      typescript: '[1, 2, 3][[1, 2, 3].length - 1]',
      result: _.last([1, 2, 3]),
      tip: ''
    },
    {
      title: '_.lastIndexOf(array, value, [fromIndex=array.length-1])',
      desc: '找某個值在陣列中「最後一次出現的位置」。',
      code: '_.lastIndexOf([1, 2, 1, 2], 2)',
      typescript: `[1, 2, 1, 2].lastIndexOf(2)`,
      result: _.lastIndexOf([1, 2, 1, 2], 2),
      tip: ''
    },
    {
      title: '_.nth(array, [n=0])',
      desc: '回傳陣列中第 n 個元素，可以是負數代表從後面數。',
      code: `_.nth([1, 2, 3, 4], 2)`,
      typescript: `[1, 2, 3, 4][2] \n[1, 2, 3, 4].at(-2) `,
      result: _.nth([1, 2, 3, 4], 2),
      tip: ''
    },
    {
      title: '_.pull(array, [values])',
      desc: '直接從陣列中移除指定的元素，就像是把不要的東西「抽出」來。',
      code: '_.pull([1, 2, 3, 4], 2, 4)',
      typescript: `(() => {
  const arr = [1, 2, 3, 4];
  [2, 4].forEach(val => {
    let idx;
    while ((idx = arr.indexOf(val)) !== -1) arr.splice(idx, 1);
  });
  return arr;
})()`,
      result: _.pull([1, 2, 3, 4], 2, 4),
      tip: ''
    },
    {
      title: '_.pullAll(array, values)',
      desc: '從陣列中移除所有匹配的元素，不管它出現了幾次。',
      code: '_.pullAll([1, 2, 3, 4, 2], [2])',
      typescript: `(() => {
  const arr = [1, 2, 3, 4, 2];
  [2].forEach(val => {
    let idx;
    while ((idx = arr.indexOf(val)) !== -1) arr.splice(idx, 1);
  });
  return arr;
})()`,
      result: _.pullAll([1, 2, 3, 4, 2], [2]),
      tip: ''
    },
    {
      title: '_.pullAllBy(array, values, [iteratee=_.identity])',
      desc: '根據指定的條件來移除所有匹配的元素，比如說依照某個屬性或條件。',
      code: '_.pullAllBy([{ "x": 1 }, { "x": 2 }], [{ "x": 1 }], "x")',
      typescript: `(() => {
  const arr = [{ x: 1 }, { x: 2 }];
  const values = [{ x: 1 }];
  const key = "x";
  values.forEach(val => {
    let idx;
    while ((idx = arr.findIndex(item => item[key] === val[key])) !== -1) arr.splice(idx, 1);
  });
  return arr;
})()`,
      result: _.pullAllBy([{ "x": 1 }, { "x": 2 }], [{ "x": 1 }], "x"),
      tip: ''
    },
    {
      title: '_.pullAllWith(array, values, [comparator])',
      desc: '使用自定義的比較函數來從陣列中移除所有匹配的元素，這樣可以根據比較方式來判斷。',
      code: '_.pullAllWith([1, 2, 3, 4], [2, 3], (a, b) => a === b)',
      typescript: `(() => {
  const arr = [1, 2, 3, 4];
  const values = [2, 3];
  values.forEach(val => {
    let idx;
    while ((idx = arr.findIndex(item => item === val)) !== -1) arr.splice(idx, 1);
  });
  return arr;
})()`,
      result: _.pullAllWith([1, 2, 3, 4], [2, 3], (a, b) => a === b),
      tip: ''
    },
    {
      title: '_.pullAt(array, [indexes])',
      desc: '根據索引提取並移除陣列中的元素，可以一次移除一個或多個元素。',
      code: '_.pullAt([1, 2, 3, 4], [1, 3])',
      typescript: `(() => {
  const arr = [1, 2, 3, 4];
  const indexes = [1, 3].sort((a, b) => b - a);
  const removed = [];
  indexes.forEach(i => removed.unshift(arr.splice(i, 1)[0]));
  return removed;
})()`,
      result: _.pullAt([1, 2, 3, 4], [1, 3]),
      tip: ''
    },
    {
      title: '_.remove(array, predicate)',
      desc: '移除符合條件的元素，原陣列會被改動。',
      code: `_.remove([1, 2, 3, 4], n => n % 2 == 0)`,
      typescript: `[1, 2, 3, 4].filter(n => n % 2 !== 0) // 不會改原本的陣列，只會回傳新陣列`,
      result: _.remove([1, 2, 3, 4], n => n % 2 == 0),
      tip: '會直接修改原本的 array！',
    },
    {
      title: '_.reverse(array)',
      desc: '反轉陣列順序，會修改原陣列。',
      code: `_.reverse([1, 2, 3])`,
      typescript: `[1, 2, 3].reverse() // 會直接改原本的陣列`,
      result: _.reverse([1, 2, 3]),
      tip: ''
    },
    {
      title: '_.slice(array, start, end)',
      desc: '從陣列中擷取一段，不改變原陣列。',
      code: `_.slice([1, 2, 3, 4], 1, 3)`,
      typescript: `[1, 2, 3, 4].slice(1, 3)`,
      result: _.slice([1, 2, 3, 4], 1, 3),
      tip: ''
    },
    {
      title: '_.sortedIndex(array, value)',
      desc: '找到 value 插入已排序陣列中的位置。',
      code: `_.sortedIndex([10, 20, 30, 40], 25)`,
      typescript: `[10, 20, 30, 40].findIndex(n => n >= 25) // 沒有找到時可用 arr.length`,
      result: _.sortedIndex([10, 20, 30, 40], 25),
      tip: ''
    },
    {
      title: '_.sortedIndexBy(array, value, iteratee)',
      desc: '和 sortedIndex 類似，但允許指定依據欄位。',
      code: `_.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x)`,
      typescript: `[{ x: 4 }, { x: 5 }].findIndex(o => o.x >= 4)`,
      result: _.sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x),
      tip: ''
    },
    {
      title: '_.sortedIndexOf(array, value)',
      desc: '回傳已排序陣列中第一個等於 value 的索引。',
      code: `_.sortedIndexOf([1, 1, 2, 2], 2)`,
      typescript: `[1, 1, 2, 2].indexOf(2)`,
      result: _.sortedIndexOf([1, 1, 2, 2], 2),
      tip: ''
    },
    {
      title: '_.sortedLastIndex(array, value)',
      desc: '和 sortedIndex 類似，但回傳插入在後面的位置。',
      code: `_.sortedLastIndex([4, 5], 5)`,
      typescript: `[4, 5].findIndex(n => n > 5) !== -1 ? [4, 5].findIndex(n => n > 5) : [4, 5].length`,
      result: _.sortedLastIndex([4, 5], 5),
      tip: ''
    },
    {
      title: '_.sortedLastIndexBy(array, value, iteratee)',
      desc: '和 sortedLastIndex 類似，但允許指定依據欄位。',
      code: `_.sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x)`,
      typescript: `[{ x: 4 }, { x: 5 }].findIndex(o => o.x > 4) !== -1 ? [{ x: 4 }, { x: 5 }].findIndex(o => o.x > 4) : 2`,
      result: _.sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x),
      tip: ''
    },
    {
      title: '_.sortedLastIndexOf(array, value)',
      desc: '找到已排序陣列中最後一個等於 value 的索引。',
      code: `_.sortedLastIndexOf([1, 1, 2, 2], 2)`,
      typescript: `[1, 1, 2, 2].lastIndexOf(2)`,
      result: _.sortedLastIndexOf([1, 1, 2, 2], 2),
      tip: ''
    },
    {
      title: '_.sortedUniq(array)',
      desc: '去除已排序陣列的重複項目。',
      code: `_.sortedUniq([1, 1, 2])`,
      typescript: `[...new Set([1, 1, 2])]`,
      result: _.sortedUniq([1, 1, 2]),
      tip: ''
    },
    {
      title: '_.sortedUniqBy(array, iteratee)',
      desc: '排序後根據 iteratee 做唯一化。',
      code: `_.sortedUniqBy([1.1, 1.2, 2.3], Math.floor)`,
      typescript: `[1.1, 1.2, 2.3].filter((v, i, arr) => i === arr.findIndex(x => Math.floor(x) === Math.floor(v)))`,
      result: _.sortedUniqBy([1.1, 1.2, 2.3], Math.floor),
      tip: ''
    },
    {
      title: '_.tail(array)',
      desc: '回傳第一個之後的所有元素',
      code: `_.tail([1, 2, 3])`,
      typescript: `[1, 2, 3].slice(1)`,
      result: _.tail([1, 2, 3]),
      tip: ''
    },
    {
      title: '_.take(array, [n=1])',
      desc: '回傳 array 前 n 個元素。',
      code: `_.take([1, 2, 3], 2)`,
      typescript: `[1, 2, 3].slice(0, 2)`,
      result: _.take([1, 2, 3], 2),
      tip: ''
    },
    {
      title: '_.takeRight(array, [n=1])',
      desc: '回傳 array 最後 n 個元素。',
      code: `_.takeRight([1, 2, 3], 2)`,
      typescript: `[1, 2, 3].slice(-2)`,
      result: _.takeRight([1, 2, 3], 2),
      tip: ''
    },
    {
      title: '_.takeRightWhile(array, predicate)',
      desc: '從尾巴開始，直到 predicate 不成立為止。',
      code: `_.takeRightWhile([1, 2, 3, 4], n => n > 2)`,
      typescript: `[1, 2, 3, 4].slice([1, 2, 3, 4].findIndex(n => n > 2))`,
      result: _.takeRightWhile([1, 2, 3, 4], n => n > 2),
      tip: ''
    },
    {
      title: '_.takeWhile(array, predicate)',
      desc: '從頭開始，只取 predicate 成立的元素。',
      code: `_.takeWhile([1, 2, 3, 4], n => n < 3)`,
      typescript: `[1, 2, 3, 4].filter((n, i, arr) => i < arr.findIndex(x => !(x < 3)))`,
      result: _.takeWhile([1, 2, 3, 4], n => n < 3),
      tip: ''
    },
    {
      title: '_.union([...arrays])',
      desc: '回傳所有不重複的元素。',
      code: `_.union([2], [1, 2])`,
      typescript: `[...new Set([...[2], ...[1, 2]])]`,
      result: _.union([2], [1, 2]),
      tip: ''
    },
    {
      title: '_.unionBy([...arrays], iteratee)',
      desc: '指定條件合併去除重複。',
      code: `_.unionBy([2.1], [1.2, 2.3], Math.floor)`,
      typescript: `[...[ [2.1], [1.2, 2.3] ].flat()].filter((v, i, arr) => i === arr.findIndex(x => Math.floor(x) === Math.floor(v)))`,
      result: _.unionBy([2.1], [1.2, 2.3], Math.floor),
      tip: ''
    },
    {
      title: '_.unionWith([...arrays], comparator)',
      desc: '自訂兩個值相等的比較方式。',
      code: `_.unionWith([1, 2], [2, 3], _.isEqual)`,
      typescript: `[...[ [1, 2], [2, 3] ].flat()].filter((v, i, arr) => i === arr.findIndex(x => JSON.stringify(x) === JSON.stringify(v)))`,
      result: _.unionWith([1, 2], [2, 3], _.isEqual),
      tip: ''
    },
    {
      title: '_.uniq(array)',
      desc: '去除重複值，回傳新陣列。',
      code: `_.uniq([2, 1, 2])`,
      typescript: `[...new Set([2, 1, 2])]`,
      result: _.uniq([2, 1, 2]),
      tip: ''
    },
    {
      title: '_.uniqBy(array, iteratee)',
      desc: '自訂條件去除重複。',
      code: `
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Alice' },
  { id: 1, name: 'Bob' }
];
_.uniqBy(users, user => user.id)`,
      typescript: `
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Alice' },
  { id: 1, name: 'Bob' }
];
users.filter((v, i, arr) => i === arr.findIndex(x => x.id === v.id))`,
      result: (() => {
        const users = [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Alice' },
          { id: 1, name: 'Bob' }
        ];
        return _.uniqBy(users, user => user.id)
      })(),
      tip: ''
    },
    {
      title: '_.uniqWith(array, comparator)',
      desc: '自訂比較函式做去除重複。',
      code: `_.uniqWith([1, 2], _.isEqual)`,
      typescript: `[1, 2].filter((v, i, arr) => i === arr.findIndex(x => JSON.stringify(x) === JSON.stringify(v)))`,
      result: _.uniqWith([1, 2], _.isEqual),
      tip: ''
    },
    {
      title: '_.unzip(array)',
      desc: '跟 zip 相反，把陣列的陣列拆開。',
      code: `_.unzip([[1, 2], [10, 20]])`,
      typescript: `[[1, 2], [10, 20]][0].map((_, i) => [[1, 2], [10, 20]].map(row => row[i]))`,
      result: _.unzip([[1, 2], [10, 20]]),
      tip: ''
    },
    {
      title: '_.unzipWith(array, iteratee)',
      desc: '一邊拆一邊做運算。',
      code: `_.unzipWith([[1, 10], [2, 20]], _.add)`,
      typescript: `[[1, 10], [2, 20]][0].map((_, i) => [[1, 10], [2, 20]].reduce((sum, row) => sum + row[i], 0))`,
      result: _.unzipWith([[1, 10], [2, 20]], _.add),
      tip: ''
    },
    {
      title: '_.without(array, [values])',
      desc: '回傳排除某些元素的新陣列。',
      code: `_.without([2, 1, 2, 3], 1, 2)`,
      typescript: `[2, 1, 2, 3].filter(x => ![1, 2].includes(x))`,
      result: _.without([2, 1, 2, 3], 1, 2),
      tip: ''
    },
    {
      title: '_.xor([...arrays])',
      desc: '傳回只出現在其中一個陣列的值（排除重複）。',
      code: `_.xor([2, 1], [2, 3])`,
      typescript: `[...[ [2, 1], [2, 3] ].flat()].filter((v, _, arr) => arr.filter(x => x === v).length === 1)`,
      result: _.xor([2, 1], [2, 3]),
      tip: ''
    },
    {
      title: '_.xorBy([...arrays], iteratee)',
      desc: '用自訂條件來做 xor。',
      code: `_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)`,
      typescript: `[...[ [2.1, 1.2], [2.3, 3.4] ].flat()].filter((v, _, arr) => arr.filter(x => Math.floor(x) === Math.floor(v)).length === 1)`,
      result: _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor),
      tip: ''
    },
    {
      title: '_.xorWith([...arrays], comparator)',
      desc: '自訂比較方式做對稱差集。',
      code: `_.xorWith([1, 2], [2, 3], _.isEqual)`,
      typescript: `[...[ [1, 2], [2, 3] ].flat()].filter((v, _, arr) => arr.filter(x => JSON.stringify(x) === JSON.stringify(v)).length === 1)`,
      result: _.xorWith([1, 2], [2, 3], _.isEqual),
      tip: ''
    },
    {
      title: '_.zip([...arrays])',
      desc: '把多個陣列的相同索引項目組合成陣列。',
      code: `_.zip(['a', 'b'], [1, 2], [true, false])`,
      typescript: `['a', 'b'].map((_, i) => [['a', 'b'], [1, 2], [true, false]].map(arr => arr[i]))`,
      result: _.zip(['a', 'b'], [1, 2], [true, false]),
      tip: '把所有陣列的第 0 項放在一起、第 1 項放在一起，像「拉鍊」一樣，一格一格對起來'
    },
    {
      title: '_.zipObject([props], [values])',
      desc: `回傳一個物件
props: key 們的陣列
values: 對應的 value 們`,
      code: `_.zipObject(['a', 'b'], [1, 2])`,
      typescript: `Object.fromEntries([['a', 1], ['b', 2]])`,
      result: _.zipObject(['a', 'b'], [1, 2]),
      tip: ''
    },
    {
      title: '_.zipObjectDeep([props], [values])',
      desc: `巢狀結構的物件
props: 是一個陣列，裡面放的是 點記號或陣列語法 表示的巢狀路徑字串。
values: 是一個陣列，跟 props 對應，一一對應每個 key 的值。`,
      code: `_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])`,
      typescript: `// 內建沒有直接寫法，需自行遞迴處理巢狀 key`,
      result: _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]),
      tip: ''
    },
    {
      title: '_.zipWith(array1, array2, ..., iteratee)',
      desc: `array1, array2, ...：要壓在一起的陣列
iteratee：對應位置的值要拿來做什麼運算（加法、相減、自訂邏輯都可以）`,
      code: `_.zipWith([1, 2], [10, 20], _.add)`,
      typescript: `[1, 2].map((v, i) => v + [10, 20][i])`,
      result: _.zipWith([1, 2], [10, 20], _.add),
      tip: `把 [1, 2] 和 [10, 20] 壓在一起，一次處理一組對應的值
把每一組的兩個值拿來做加法（_.add）`
    }
  ];
}
