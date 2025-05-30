import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { Array1Component } from './array/array-1';
import { Array2Component } from './array/array-2';
import { Array3Component } from './array/array-3';
import { Array4Component } from './array/array-4';
import { Array5Component } from './array/array-5';
import { Array6Component } from './array/array-6';
import { Array7Component } from './array/array-7';
import { Array8Component } from './array/array-8';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Array1Component, Array2Component,
    Array3Component, Array4Component, 
    Array5Component, Array6Component,
    Array7Component, Array8Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ng-lodash-learn';
  /** 所選的類型 */
  selectedType: string = 'Array';
  /** 所選的細項 */
  selectedTab: number = 0;

  /** 類型 */
  typeTabs = ['Array', 'Collection', 'Date', 'Function', 'Lang', 'Math', 'Number', 'Object', 'Seq', 'String', 'Util'];

  /** 類型裡的細項 */
  tabs = [
    { id: 0, name: '分割', desc: '「切開、取出、丟掉」元素', },
    { id: 1, name: '比對差異', desc: '「比對差異、交集、去除重複」' },
    { id: 2, name: '索引', desc: '「找位置」或「找值」' },
    { id: 3, name: '改變結構', desc: '「改變陣列形狀、合併或拆解結構」' },
    { id: 4, name: '元素修改', desc: '「直接動手修改陣列裡的值或內容」' },
    { id: 5, name: '頭尾操作', desc: '操作頭尾，通常用來取單一值' },
    { id: 6, name: '看效能', desc: '' },
    { id: 7, name: '其他', desc: '' },
  ];
}
