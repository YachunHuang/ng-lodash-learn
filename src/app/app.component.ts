import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { Array1Component } from './array/array-1';
import { Array2Component } from './array/array-2';
import { Array3Component } from './array/array-3';
import { Array4Component } from './array/array-4';
import { Array5Component } from './array/array-5';
import { Array6Component } from './array/array-6';
import { Array7Component } from './array/array-7';
import { Array8Component } from './array/array-8';
import { Collection1Component } from './collection/collection-1';
import { Collection2Component } from './collection/collection-2';
import { Collection3Component } from './collection/collection-3';
import { Collection4Component } from './collection/collection-4';
import { Collection5Component } from './collection/collection-5';
import { Collection6Component } from './collection/collection-6';
import { Collection7Component } from './collection/collection-7';
import { Collection8Component } from './collection/collection-8';
import { Collection9Component } from './collection/collection-9';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Array1Component, Array2Component,
    Array3Component, Array4Component,
    Array5Component, Array6Component,
    Array7Component, Array8Component,
    Collection1Component, Collection2Component,
    Collection3Component, Collection4Component,
    Collection5Component, Collection6Component,
    Collection7Component, Collection8Component,Collection9Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ng-lodash-learn';
  /** 所選的類型 */
  selectedType: string = 'Array';
  /** Array 選擇的項目 */
  selectedArrayTab: number = 0;
  /** Collection 選擇的項目 */
  selectedCollectionTab: number = 0;

  /** 類型 */
  typeTabs = ['Array', 'Collection', 'Date', 'Function', 'Lang', 'Math', 'Number', 'Object', 'Seq', 'String', 'Util'];

  /** Array 項目 */
  arrayTabs = [
    { id: 0, name: '分割', desc: '「切開、取出、丟掉」元素', },
    { id: 1, name: '比對差異', desc: '「比對差異、交集、去除重複」' },
    { id: 2, name: '索引', desc: '「找位置」或「找值」' },
    { id: 3, name: '改變結構', desc: '「改變陣列形狀、合併或拆解結構」' },
    { id: 4, name: '元素修改', desc: '「直接動手修改陣列裡的值或內容」' },
    { id: 5, name: '頭尾操作', desc: '操作頭尾，通常用來取單一值' },
    { id: 6, name: '看效能', desc: '' },
    { id: 7, name: '其他', desc: '' },
  ];

  /** Collection 項目 */
  collectionTabs = [
    { id: 0, name: '迭代', desc: '' },
    { id: 1, name: '條件', desc: '' },
    { id: 2, name: '搜尋', desc: '' },
    { id: 3, name: '過濾', desc: '' },
    { id: 4, name: '轉換', desc: '' },
    { id: 5, name: '群組/計算', desc: '' },
    { id: 6, name: '排序', desc: '' },
    { id: 7, name: 'Collection Operations', desc: '' },
    { id: 8, name: '抽樣', desc: '' },
  ];
}
