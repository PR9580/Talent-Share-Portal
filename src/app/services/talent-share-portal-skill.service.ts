import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class TalentSharePortalSkillService {

  private baseURL = 'http://localhost:8070/api/v1/skill';

  constructor(private httpClient: HttpClient) {}

  getAllSkills(): Observable<Skill> {
    const url = `${this.baseURL}/get-all-skills`;
    return this.httpClient.get<Skill>(url);
  }

}
