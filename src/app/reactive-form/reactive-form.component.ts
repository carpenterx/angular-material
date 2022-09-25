import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  reactiveForm: FormGroup = new FormGroup('');

  // reactiveForm: FormGroup = new FormGroup({
  //   userName: new FormControl('', [Validators.required, this.shouldStartWithUppercaseLetter]),
  //   emailAddress: new FormControl('', [Validators.required, Validators.email]),
  //   documentName: new FormControl('', [Validators.required]),
  //   documentContent: new FormControl('', [Validators.required]),
  //   aliasName: new FormControl('', [Validators.required]),
  //   dataGroup: new FormControl('', [Validators.required]),
  // });

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      userName: ['', [Validators.required, this.shouldStartWithUppercaseLetter]],
      emailAddress: ['', [Validators.required, Validators.email]],
      documentName: ['', [Validators.required]],
      documentContent: ['', [Validators.required]],
      aliasName: ['', [Validators.required]],
      dataGroup: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  get userName()
  {
    return this.reactiveForm.get('userName');
  }

  get emailAddress()
  {
    return this.reactiveForm.get('emailAddress');
  }

  shouldStartWithUppercaseLetter(control: FormControl): {[s: string]: boolean} | null {
    if (control.value)
    {
      let firstLetter: string = control.value[0] as string;
      if(firstLetter.toUpperCase() !== firstLetter) {
        return {'startsWithLowercase': true};
      }
    }
    
    return null;
  }
}
