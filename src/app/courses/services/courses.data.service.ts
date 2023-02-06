import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../model/course";

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(private httpUrlGen: HttpUrlGenerator, httpClient: HttpClient) {
    super("Course", httpClient, httpUrlGen);
  }

  getAll(): Observable<Course[]> {
    return this.http.get("/api/courses").pipe(map((res) => res["payload"]));
  }
}
