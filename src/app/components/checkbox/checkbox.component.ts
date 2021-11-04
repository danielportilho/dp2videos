import { Component, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnChanges {

  @Input() error: boolean;
  @Input() label: string;
  @Input() inputID: any;
  
  labelFor: any;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.checkboxCheck();
  }

  checkboxCheck() {
    if (!this.inputID) {
        this.inputID = this.el.nativeElement.firstChild.id;
    }
    this.labelFor = this.inputID;
  }

}
