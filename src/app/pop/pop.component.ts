import { Component, OnInit } from '@angular/core';

import { PopInnerComponent } from '../pop-inner/pop-inner.component';
import { DialogService, DynamicDialogRef } from 'primeng/api';
@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  public closable = false;
  constructor(
    public dynamicDialogRef: DynamicDialogRef,
    private dialogService: DialogService) { }
  close() {
    this.dynamicDialogRef.close();
  }

  show() {
    const ref = this.dialogService.open(PopInnerComponent, {
      width: '50%',
      header: 'Popup ',
      closeOnEscape: false
    });
    this.closable = true;
  }
  ngOnInit() {
  }

}