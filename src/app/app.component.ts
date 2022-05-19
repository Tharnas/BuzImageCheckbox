import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public checkboxForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.checkboxForm = formBuilder.group({
      "checkboxA": [false],
      "checkboxB": [false],
      "checkboxC": [false],
    });
  }
}
