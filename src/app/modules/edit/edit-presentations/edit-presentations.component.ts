import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-presentations',
  templateUrl: './edit-presentations.component.html',
  styleUrls: ['./edit-presentations.component.css']
})
export class EditPresentationsComponent implements OnInit {
  campos: Array<any> = [
    'Code',
    'Name',
    'Reference',
    'Plu',
    'Stock',
    'Price1',
    'Price2',
    'Price3',
    'Med',
    'Bulk',
    'IsActive'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
