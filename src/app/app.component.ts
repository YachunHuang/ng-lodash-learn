import { ArrayItems, CollectionItems, DateItems, FunctionItems, LangItems, MathItems, NumberItems, ObjectItems, SeqItems, StringItems, TypeTabs, UtilItems } from './shared/category.interface';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Array1Component } from './array/array-1';
import { Collection1Component } from './collection/collection-1';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './shared/highlight.directive';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HighlightDirective,
    Array1Component,
    Collection1Component,],
  templateUrl: './app.component.html',
  providers: [],
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {

  @ViewChild('backToTopBtn')
  backToTopBtn!: ElementRef<HTMLButtonElement>;
  /** 是否展開側邊欄 */
  sidebarOpen = false;
  /** 所選的類型 */
  selectedType: string = 'Array';
  /** Array 選擇的項目 */
  selectedArrayTab: number = 0;
  /** Collection 選擇的項目 */
  selectedCollectionTab: string = '';

  /** 類型 */
  typeTabs = TypeTabs;

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

  // 展開/收合主類別
  expandedTypeIndex: number | null = 0;

  /** 收合類別 */
  toggleType(i: number) {
    this.expandedTypeIndex = this.expandedTypeIndex === i ? null : i;
  }

  /** 依類別取得項目 */
  getItems(type: (typeof TypeTabs)[number]) {
    switch (type) {
      case TypeTabs[0]: return ArrayItems;         // 'Array'
      case TypeTabs[1]: return CollectionItems;    // 'Collection'
      case TypeTabs[2]: return DateItems;          // 'Date'
      case TypeTabs[3]: return FunctionItems;      // 'Function'
      case TypeTabs[4]: return LangItems;          // 'Lang'
      case TypeTabs[5]: return MathItems;          // 'Math'
      case TypeTabs[6]: return NumberItems;        // 'Number'
      case TypeTabs[7]: return ObjectItems;        // '物件'
      case TypeTabs[8]: return SeqItems;           // 'Seq'
      case TypeTabs[9]: return StringItems;        // 'String'
      case TypeTabs[10]: return UtilItems;         // 'Util'
      default: return [];
    }
  }

  isActiveTab(type: string, idx: number) {
    return (type === 'Array' && this.selectedType === 'Array' && this.selectedArrayTab === idx)
      || (type === 'Collection' && this.selectedType === 'Collection');
  }

  selectTab(type:string,item: string) {
    this.selectedCollectionTab = item;
    this.selectedType = type;
  }
}
