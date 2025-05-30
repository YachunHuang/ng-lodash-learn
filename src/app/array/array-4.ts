import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'array-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Array4Component {

  examples = [
    {
      title: '_.concat(array, [values])',
      desc: '把兩個或多個陣列「擠在一起」，變成一個新的陣列。',
      code: '_.concat([1, 2], [3, 4], [5])',
      result: _.concat([1, 2], [3, 4], [5]),
      tip: '把不同的拼圖塊合併成一個大拼圖，沒有改變原本的拼圖，只是把它們湊在一起。',
      demo: ''
    },
    {
      title: '_.flatten(array)（只攤一層）',
      desc: '把「只有一層巢狀的陣列攤平」，讓它變成一個單純的陣列。',
      code: '_.flatten([1, [2, 3], [4, [5]]])',
      result: _.flatten([1, [2, 3], [4, [5]]]),
      tip: '它只會攤平一層，再多層就不處理了。不會遞迴深入到最底層，那要用 _.flattenDeep。',
      demo: ''
    },
    {
      title: '_.flattenDeep(array) (攤到最底層）',
      desc: '把任何層數的巢狀陣列，全部打開、展平，變成一個單純的一維陣列。',
      code: '_.flattenDeep([1, [2, [3, [4]]]])',
      result: _.flattenDeep([1, [2, [3, [4]]]]),
      tip: '想像 flattenDeep 是「把超深的盒子打開到見底」，全部的內容物都倒出來！',
      demo: ''
    },
    {
      title: '_.flattenDepth(array, [depth=1]) (指定層數的展開)',
      desc: '將陣列展開到指定的層數，可以控制要展開幾層的巢狀陣列，超過的層數就不會展開。',
      code: '_.flattenDepth([1, [2, [3, [4]]]], 2)',
      result: _.flattenDepth([1, [2, [3, [4]]]], 2),
      tip: 'depth 控制展開的層數，預設是 1 層。只會展開到指定層數，超過的層數就不會攤開。',
      demo:` </br>
Level 0: [1, [2, [3, [4]]]]   // 根陣列，不算在 flatten 的層數裡 </br>
Level 1: 1, [2, [3, [4]]]     // 第一層 </br>
Level 2: 2, [3, [4]]          // 第二層 </br>
Level 3: 3, [4]               // 第三層 </br>
Level 4: 4

      `
    },
    {
      title: '_.fromPairs(pairs)',
      desc: '把一個「對偶陣列」，也就是每個元素都包含「key」和「value」的二元組，轉換成物件。',
      code: '_.fromPairs([["a", 1], ["b", 2]])',
      result: _.fromPairs([["a", 1], ["b", 2]]),
      tip: '由「對偶」組成的陣列（每個元素是一個 [key, value] 的組合）。會把它轉換成物件，key、value 就變成物件的屬性和值。',
      demo: ''
    },
    {
      title: '_.join(array, [separator=\',\'])',
      desc: '將陣列中的元素用指定的分隔符號連接成一個字串。',
      code: '_.join([\'a\', \'b\', \'c\'], \'-\')',
      result: _.join(['a', 'b', 'c'], '-'),
      tip: '把數字、字母、物件元素都「串起來」。',
      demo: ''
    },
  ];
}
