<<<<<<< Updated upstream
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Course} from '../model/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CoursesHttpService} from '../services/courses-http.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {

=======
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CoursesHttpService } from "../services/courses-http.service";
import { EntityServices } from "@ngrx/data";
import { CoursesEntityService } from "../services/courses-data.service";

@Component({
  selector: "course-dialog",
  templateUrl: "./edit-course-dialog.component.html",
  styleUrls: ["./edit-course-dialog.component.css"],
})
export class EditCourseDialogComponent {
>>>>>>> Stashed changes
  form: FormGroup;

  dialogTitle: string;

  course: Course;

<<<<<<< Updated upstream
  mode: 'create' | 'update';

  loading$:Observable<boolean>;
=======
  mode: "create" | "update";

  loading$: Observable<boolean>;
>>>>>>> Stashed changes

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
<<<<<<< Updated upstream
    private coursesService: CoursesHttpService) {

=======
    private coursesEntityService: CoursesEntityService
  ) {
>>>>>>> Stashed changes
    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;

    const formControls = {
<<<<<<< Updated upstream
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.course});
    }
    else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required]
=======
      description: ["", Validators.required],
      category: ["", Validators.required],
      longDescription: ["", Validators.required],
      promo: ["", []],
    };

    if (this.mode == "update") {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...data.course });
    } else if (this.mode == "create") {
      this.form = this.fb.group({
        ...formControls,
        url: ["", Validators.required],
        iconUrl: ["", Validators.required],
>>>>>>> Stashed changes
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
<<<<<<< Updated upstream

    const course: Course = {
      ...this.course,
      ...this.form.value
    };

    this.coursesService.saveCourse(course.id, course)
      .subscribe(
        () => this.dialogRef.close()
      )


  }


=======
    const course: Course = {
      ...this.course,
      ...this.form.value,
    };

    this.mode === "create"
      ? this.coursesEntityService
          .add(course)
          .subscribe((val) => this.dialogRef.close())
      : this.coursesEntityService.update(course);

    this.dialogRef.close();
  }
>>>>>>> Stashed changes
}
