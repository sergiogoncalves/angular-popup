import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/api';
@Component({
  selector: 'app-pop-inner',
  templateUrl: './pop-inner.component.html',
  styleUrls: ['./pop-inner.component.css']
})
export class PopInnerComponent implements OnInit {

  constructor(
    public dynamicDialogRef: DynamicDialogRef) { }
  close() {
    this.dynamicDialogRef.close();
  }
  ngOnInit() {
  }

}