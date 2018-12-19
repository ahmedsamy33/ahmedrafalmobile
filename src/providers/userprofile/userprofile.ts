import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { settings } from "../../app/settings";

/*
  Generated class for the UserprofileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserprofileProvider {
  constructor(public http: Http) {
    console.log("Hello UserprofileProvider Provider");
  }

  // user profile data
  getUserProfileData(): Observable<any> {
    return this.http
      .get(settings.DOMAIN_URL + "userservices/getuserprofile", {
        headers: settings.getHeaderJsonWithTKN()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // pick list company country job-title
  getPickListCCJ(type, lang): Observable<any> {
    return this.http
      .get(
        settings.DOMAIN_URL +
          "picklistservices/getpicklist?type=" +
          type +
          "&language=" +
          lang
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // pick list Region
  getPickListRegion(parentcode, lang): Observable<any> {
    return this.http
      .get(
        settings.DOMAIN_URL +
          "picklistservices/getregionpicklist?parentcode=" +
          parentcode +
          "&language=" +
          lang
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // search employment
  searchEmploment(
    pageSize: number,
    pageNumber: number,
    lang: string,
    jobTitleCode: string
  ): Observable<any> {
    let data = {
      pageSize: pageSize,
      pageNumber: pageNumber,
      language: lang,
      jobTitleCode: jobTitleCode
    };
    return this.http
      .post(settings.DOMAIN_URL + "formservices/searchemployments", data, {
        headers: settings.getHeaderJson()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // search Hiringlabors
  searchHiringlabors(
    pageSize: number,
    pageNumber: number,
    lang: string,
    jobTitleCode: string
  ): Observable<any> {
    let data = {
      pageSize: pageSize,
      pageNumber: pageNumber,
      language: lang,
      jobTitleCode: jobTitleCode
    };

    return this.http
      .post(settings.DOMAIN_URL + "formservices/searchhiringlabors", data, {
        headers: settings.getHeaderJson()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
  //  Get Hiring Labors Details
  getHiringLabors(id, lang): Observable<any> {
    return this.http
      .get(
        settings.DOMAIN_URL +
          "formservices/gethiringlaborsdetails?id=" +
          id +
          "&language=" +
          lang
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
}
