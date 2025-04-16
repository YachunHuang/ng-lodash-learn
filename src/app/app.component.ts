import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { ArrayOperations1Component } from './lodash/array-operations-1';
import { ArrayOperations2Component } from './lodash/array-operations-2';
import { ArrayOperations3Component } from './lodash/array-operations-3';
import { ArrayOperations4Component } from './lodash/array-operations-4';
import { ArrayOperations5Component } from './lodash/array-operations-5';
import { ArrayOperations6Component } from './lodash/array-operations-6';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ArrayOperations1Component, ArrayOperations2Component,
    ArrayOperations3Component, ArrayOperations4Component, 
    ArrayOperations5Component, ArrayOperations6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ng-lodash-learn';
  selectedTab: number = 0;  // 預設選擇第一個tab

  // tabs改為物件陣列，包含id和name
  tabs = [
    { id: 0, name: '分割', desc: '「切開、取出、丟掉」元素' },
    { id: 1, name: '比對差異', desc: '「比對差異、交集、去重」' },
    { id: 2, name: '索引', desc: '「找位置」或「找值」' },
    { id: 3, name: '改變結構', desc: '「改變陣列形狀、合併或拆解結構」' },
    { id: 4, name: '元素修改', desc: '「直接動手修改陣列裡的值或內容」' },
    { id: 5, name: '頭尾操作', desc: '操作頭尾，通常用來取單一值' },
  ];
}
