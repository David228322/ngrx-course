<<<<<<< Updated upstream
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {EditCourseDialogComponent} from './edit-course-dialog/edit-course-dialog.component';
import {CoursesHttpService} from './services/courses-http.service';
import {CourseComponent} from './course/course.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {compareCourses, Course} from './model/course';

import {compareLessons, Lesson} from './model/lesson';
=======
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { CoursesCardListComponent } from "./courses-card-list/courses-card-list.component";
import { EditCourseDialogComponent } from "./edit-course-dialog/edit-course-dialog.component";
import { CoursesHttpService } from "./services/courses-http.service";
import { CourseComponent } from "./course/course.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import {
  DefaultDataService,
  EntityDataModule,
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from "@ngrx/data";
import { compareCourses, Course } from "./model/course";
>>>>>>> Stashed changes

import { compareLessons, Lesson } from "./model/lesson";
import { CoursesEntityService } from "./services/courses-data.service";
import { CoursesResolver } from "./services/courses.resolver";
import { CoursesDataService } from "./services/courses.data.service";
import { LessonsEntityService } from "./services/lesson-entity/lessons-entity.service";
import { LessonsDataService } from "./services/lesson-entity/lessons-data.service";

export const coursesRoutes: Routes = [
  {
<<<<<<< Updated upstream
    path: '',
    component: HomeComponent

  },
  {
    path: ':courseUrl',
    component: CourseComponent
  }
];

=======
    path: "",
    component: HomeComponent,
    resolve: {
      courses: CoursesResolver,
    },
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
    resolve: {
      courses: CoursesResolver,
    },
  },
];

const entityMetadata: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
  Lesson: { sortComparer: compareLessons },
};

>>>>>>> Stashed changes
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
<<<<<<< Updated upstream
    RouterModule.forChild(coursesRoutes)
=======
    RouterModule.forChild(coursesRoutes),
>>>>>>> Stashed changes
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
<<<<<<< Updated upstream
    CourseComponent
=======
    CourseComponent,
>>>>>>> Stashed changes
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
<<<<<<< Updated upstream
    CourseComponent
  ],
  entryComponents: [EditCourseDialogComponent],
  providers: [
    CoursesHttpService
  ]
})
export class CoursesModule {

  constructor() {

  }


=======
    CourseComponent,
  ],
  entryComponents: [EditCourseDialogComponent],
  providers: [
    CoursesHttpService,
    CoursesEntityService,
    CoursesResolver,
    CoursesDataService,
    LessonsEntityService,
    LessonsDataService,
  ],
})
export class CoursesModule {
  constructor(
    private eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    coursesDataService: CoursesDataService,
    lessonsDataService: LessonsDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService("Course", coursesDataService);
    entityDataService.registerService("Lesson", lessonsDataService);
  }
>>>>>>> Stashed changes
}
