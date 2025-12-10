import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createCourse, showForm } from '../state/courses.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000),
      ]),
      author: new FormControl(null, [Validators.required]),
      price: new FormControl(null),
      image: new FormControl(null),
    });
  }

  hideCreateForm() {
    this.store.dispatch(showForm({ value: false }));
  }

  onCreateCourse() {
    if (!this.courseForm.valid) {
      return;
    }

    this.store.dispatch(createCourse({ course: this.courseForm.value }));
    this.store.dispatch(showForm({ value: false }));
  }
}
