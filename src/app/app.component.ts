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
  /** Collection 選擇的項目 */
  selectedItemType: string = '';
  /** 類型 */
  typeTabs = TypeTabs;

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
    return (type === 'Array' && this.selectedType === 'Array')
      || (type === 'Collection' && this.selectedType === 'Collection');
  }

  selectTab(type:string,item: string) {
    this.selectedItemType = item;
    this.selectedType = type;
  }
}
