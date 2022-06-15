import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  public addUserForm!: FormGroup;
  public isUpdate: boolean = false;
  public users: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildAddUserForm();
  }

  buildAddUserForm() {
    this.addUserForm = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      company: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get firstName(): FormControl {
    return this.addUserForm.get('firstname') as FormControl;
  }

  get lastName(): FormControl {
    return this.addUserForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.addUserForm.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.addUserForm.get('phone') as FormControl;
  }

  get company(): FormControl {
    return this.addUserForm.get('company') as FormControl;
  }

  get gender(): FormControl {
    return this.addUserForm.get('gender') as FormControl;
  }

  get dob(): FormControl {
    return this.addUserForm.get('dob') as FormControl;
  }

  get password(): FormControl {
    return this.addUserForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.addUserForm.get('confirmPassword') as FormControl;
  }

  addUpdateUser() {
    console.log('coming into function to add/Update user details');
    const password = this.password.value;
    if(password == this.confirmPassword.value) {
      if(this.isUpdate) {

      } else {
        this.users.push(this.addUserForm.value);
        this.addUserForm.reset();
      }
    } else {
      alert('Password mismatch');
      this.confirmPassword.reset();
    }
    console.log(this.users);
    console.log(this.users.length);
  }

  resetForm() {
    this.addUserForm.reset();
    this.isUpdate = false;
  }

  getDetails(userDetails: any){
    this.isUpdate = true;
    this.addUserForm.patchValue(userDetails);
  }

  deleteUser(user: any) {
    console.log('coming inside function');
  }

}
