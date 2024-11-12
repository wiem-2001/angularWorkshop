import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { User } from '../models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        streetNumber: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
      }),
      skills: this.fb.array([this.createSkill()])
    });
  }

  ngOnInit(): void {}

  createSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required]

    });
  }

  addSkill(): void {
    this.skills.push(this.createSkill());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      console.log('Form submitted:', user);
      this.userForm.reset();
      this.skills.clear();
      this.skills.push(this.createSkill());
    } else {
      console.log('Form is invalid');
    }
  }
}
