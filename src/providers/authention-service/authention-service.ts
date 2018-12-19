import { Injectable } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { settings } from "../../app/settings";

/*
  Generated class for the AuthentionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthentionServiceProvider {
  constructor(public http: Http) {}

  userLogin(
    usename: string,
    password: string,
    lang: string,
    countryphonecode,
    browserType,
    osType,
    notificationId
  ): Observable<any> {
    let data = {
      userName: usename,
      password: password,
      deviceType: "mobile",
      browserType: browserType,
      osType: osType,
      timeZone: "GMT+0200",
      language: lang,
      location: "Egypt",
      isMobileApp: true,
      notificationId: notificationId,
      countryPhoneCode: countryphonecode,
      appName: "Rafal Group Mobile"
    };
    return this.http
      .post(settings.DOMAIN_URL + "userservices/signin", data, {
        headers: settings.getHeaderJson()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  userSignUp(
    userName: string,
    password: string,
    name: string,
    nationalId: number,
    notificationId,
    countryphonecode
  ): Observable<any> {
    let data = {
      userName: userName,
      passWord: password,
      name: name,
      nationalId: nationalId,
      notificationId: notificationId,
      countryPhoneCode: countryphonecode
    };

    return this.http
      .post(settings.DOMAIN_URL + "userservices/signup", data, {
        headers: settings.getHeaderJson()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // /////////////////////////////////////////////////////////////////////////////

  forgetPassword(userName: string): Observable<any> {
    // let body = new FormData();
    // body.append('email', email);
    return this.http
      .post(
        settings.DOMAIN_URL +
          "userservices/forgetpassword?username=" +
          userName,
        { headers: settings.getHeaderJsonGetMethod() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  requestForgetPassword(
    verificationcode: string,
    username: string,
    newpassword: string
  ): Observable<any> {
    let data = new URLSearchParams();
    data.set("verificationcode", verificationcode);
    data.set("username", username);
    data.set("newpassword", newpassword);
    let body = data.toString();

    return this.http
      .post(settings.DOMAIN_URL + "userservices/resetpasswordforget", body, {
        headers: settings.getHeaderXWFORM()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  userVerifyCode(
    verifyCode: string,
    userName: string,
    password: string,
    lang: string,
    browserType,
    osType,
    countryPhoneCode
    // nationalId
  ): Observable<any> {
    let data = {
      userName: userName,
      password: password,
      deviceType: "mobile",
      browserType: browserType,
      osType: osType,
      timeZone: "GMT+0200",
      language: lang,
      location: "Egypt",
      isMobileApp: true,
      // nationalId: nationalId,
      countryPhoneCode: countryPhoneCode,
      appName: "Rafal Group Mobile"
    };
    return this.http
      .put(
        settings.DOMAIN_URL +
          "userservices/mobilevalidate?verificationcode=" +
          verifyCode,
        data,
        { headers: settings.getHeaderJson() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
  ResendCode(userPhone: string): Observable<any> {
    return this.http
      .get(
        settings.DOMAIN_URL + "userservices/resendcode?username=" + userPhone
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  changePassword(oldpass, newpass): Observable<any> {
    return this.http
      .put(settings.DOMAIN_URL + "userservices/changepassword", null, {
        headers: settings.getHeaderJsonFormData(oldpass, newpass)
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // /////////////////////////////////////////////////////////////////////////////////////////
  logOut(): Observable<any> {
    let options = new RequestOptions({
      headers: settings.getHeaderJsonWithTKN()
    });

    return this.http
      .post(settings.DOMAIN_URL + "userservices/logout", null, options)
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // /////////////////////////////////////////////////////////////////////////////////////////
  validateSession(): Observable<any> {
    return this.http
      .post(settings.DOMAIN_URL + "usersessionservices/validatesession", null, {
        headers: settings.getHeaderJsonWithTKN()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // /////////////////////////////////////////////////////////////////////////////////////////
  // deactivateAccount(): Observable<any> {
  //   return this.http.post(setting.DOMAIN_URL + '/userservices/deactivateuser', null, { headers: setting.getHeaderJsonWithTKN() })
  //     .map(res => {
  //       return res.json();
  //     }).timeout(40000);
  // }

  // getVersionMobile(version: string): Observable<any> {
  //   return this.http.get(setting.DOMAIN_URL + '/userservices/mobileversion?ver=' + version)
  //     .map(res => {
  //       return res.json();
  //     }).timeout(40000);
  // }

  // ///////////////////////////////////// get pick list /////////////////////////////////////////////////
  getcountriesphpicklistcodes(): Observable<any> {
    return this.http
      .get(settings.DOMAIN_URL + "picklistservices/getcountriesphpicklistcodes")
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // /////////////////////////////////////////////////////////////////////////////////////////
  updateLanguage(language): Observable<any> {
    return this.http
      .post(
        settings.DOMAIN_URL +
          "usersessionservices/updateusersession?language=" +
          language,
        null,
        { headers: settings.getHeaderJsonWithTKN() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
  ////////////////////////
  // upload user profile image
  uploadImage(file: any) {
    let formData: FormData = new FormData();
    formData.append("profileimage", file);
    // console.log("form ", formData);

    return this.http
      .post(settings.DOMAIN_URL + "userservices/uploadprofileimage", formData, {
        headers: settings.getHeaderJsonWithTKN3()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
}
