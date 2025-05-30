import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'collection-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../operations.html',
})
export class Collection1Component {

  examples = [
    {
      title: '',
      desc: '',
      code: '',
      result: null,
      tip: '',
      demo: ''
    },
  ];
}
