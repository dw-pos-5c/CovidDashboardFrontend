import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  @Input() isVisible: boolean = false;
  @Output() dialogFinished: EventEmitter<string> = new EventEmitter<string>();

  password = '';

  constructor() { }

  ngOnInit(): void {
  }

}
