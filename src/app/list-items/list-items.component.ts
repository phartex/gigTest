import { Component, OnInit } from '@angular/core';
import { Dataconfig } from '../app.config';
import { IDataType } from '../Model/IDataType';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  allTexts: any = [];
  constructor() {}

  ngOnInit(): void {
    this.allTexts = Dataconfig.alphanumericText;
    console.log(this.allTexts);
  }
}
