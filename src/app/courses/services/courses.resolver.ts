import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { Course } from "../model/course";
import { CoursesEntityService } from "./courses-data.service";
import { CoursesHttpService } from "./courses-http.service";
import { LessonsEntityService } from "./lesson-entity/lessons-entity.service";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(
    private courseService: CoursesEntityService,
    lessonService: LessonsEntityService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.courseService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.courseService.getAll().pipe(map((courses) => !!courses));
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
