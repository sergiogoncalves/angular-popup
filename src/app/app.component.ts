import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/api';
import { PopComponent } from './pop/pop.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dialogService: DialogService) {

  }
  name = 'Angular';
  show() {
    const ref = this.dialogService.open(PopComponent, {
      width: '50%',
      header: 'Popup ',
      closeOnEscape: false
    });

  }
}
