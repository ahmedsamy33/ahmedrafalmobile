import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { settings } from "../../app/settings";

/*
  Generated class for the SharedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.s
*/
@Injectable()
export class SharedServiceProvider {
  constructor(public http: Http) {
    console.log("Hello SharedServiceProvider Provider");
  }

  // Hiring laborartory services
  hiringService(service) {
    let data = service;
    return this.http
      .post(settings.DOMAIN_URL + "formservices/addhiringlabors", data, {
        headers: settings.getHeaderJsonWithTKN2()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  //fesability study services
  fesabilitystudy(service) {
    return this.http
      .post(settings.DOMAIN_URL + "formservices/addfesabilitystudy", service, {
        headers: settings.getHeaderJsonWithTKN2()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/add office services
  officeserv(service) {
    return this.http
      .post(settings.DOMAIN_URL + "formservices/addofficeserv", service, {
        headers: settings.getHeaderJsonWithTKN2()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/add charter Service
  charterService(accountyear, bank, company, yearofbudget) {
    let body = new FormData();
    body.append("accOfYear", accountyear);
    body.append("bankOfYear", bank);
    body.append("companyAcc", company);
    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addcharteracc?yearofbudget=" +
        yearofbudget,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/add  Establishing Service
  establishingService(
    countrycode,
    activity,
    region,
    capitalcurrency,
    other,
    idsimage,
    authorizationimage,
    agreementimage
  ) {
    let body = new FormData();
    body.append("idsimage", idsimage);
    body.append("authorizationimage", authorizationimage);
    body.append("agreementimage", agreementimage);
    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addestablishcompany?countrycode=" +
        countrycode +
        "&activity=" +
        activity +
        "&region=" +
        region +
        "&capitalcurrency=" +
        capitalcurrency +
        "&other=" +
        other,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/add  Employment Service
  EmploymentService(activity, jobtitle, salary, filetype, cv) {
    let body = new FormData();
    body.append("cv", cv);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addemplyment?activity=" +
        activity +
        "&jobtitle=" +
        jobtitle +
        "&salary=" +
        salary +
        "&filetype=" +
        filetype,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/add   Custom Clearance Service
  CustomClearanceService(
    shipmentport,
    shipmentdescription,
    other,
    shipmentbill,
    authorization
  ) {
    let body = new FormData();
    body.append("shipmentbill", shipmentbill);
    body.append("authorization", authorization);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addcustomclearance?shipmentport=" +
        shipmentport +
        "&shipmentdescription=" +
        shipmentdescription +
        "&other=" +
        other,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/add   Trading agency Service
  TradingagencyService(
    activity,
    requiredband,
    productdesc,
    location,
    other,
    productimge
  ) {
    let body = new FormData();
    body.append("productimge", productimge);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addtradingagency?activity=" +
        activity +
        "&requiredband=" +
        requiredband +
        "&productdesc=" +
        productdesc +
        "&location=" +
        location +
        "&other=" +
        other,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/Add Shipping Service
  ShippingService(
    shipmentport,
    responsablename,
    goodstype,
    streetadress,
    billauthorizationimge
  ) {
    let body = new FormData();
    body.append("billauthorizationimge", billauthorizationimge);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addshipping?shipmentport=" +
        shipmentport +
        "&responsablename=" +
        responsablename +
        "&goodstype=" +
        goodstype +
        "&streetadress=" +
        streetadress,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // formservices/Add Certified Translation
  CertifiedService(
    translationtype,
    language,
    responsiblereceiver,
    other,
    filetype,
    translationfile
  ) {
    let body = new FormData();
    body.append("translationfile", translationfile);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "formservices/addcertifiedtranslation?translationtype=" +
        translationtype +
        "&language=" +
        language +
        "&responsiblereceiver=" +
        responsiblereceiver +
        "&other=" +
        other +
        "&filetype=" +
        filetype,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  // company upgrade services
  companyupgradeservices(data) {
    return this.http
      .post(settings.DOMAIN_URL + "companyservices/companyupgrade", data, {
        headers: settings.getHeaderJsonGetMethod()
      })
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // image for upgrade
  UploadCompanyCR(crimage, compid) {
    let body = new FormData();
    body.append("crimage", crimage);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "companyservices/uploadcompanycr?compid=" +
        compid,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }
  /////////////////////////////////////// advertisment  /////////////////////////////////////////////////

  //add advertisment
  addAdvertisment(adimage, title, description) {
    let body = new FormData();
    body.append("adimage", adimage);

    return this.http
      .post(
        settings.DOMAIN_URL +
        "advertisementservices/addadvertisement?title=" +
        title +
        "&description=" +
        description,
        body,
        { headers: settings.getHeaderJsonWithTKN2() }
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // get all advertient token
  getalladvertienttoken(): Observable<any> {
    return this.http
      .get(settings.DOMAIN_URL + "advertisementservices/getadds")
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // get image by  token
  getimagebytoken(token): Observable<any> {
    return this.http
      .get(
        settings.DOMAIN_URL +
        "advertisementservices/getaddimage?imgetkn=" +
        token
      )
      .map(res => {
        return res.json();
      })
      .timeout(40000);
  }

  // get File
  // getFile(filename, type): Observable<any> {
  //   return this.http
  //     .get(settings.DOMAIN_URL + "formservices/getfile?filename=" + filename + '&type=' + type,
  //       { headers: settings.getHeaderJsonWithTKN2() })
  //     .map(res => {
  //       return res.json();
  //     })
  //     .timeout(40000);http://rafalgroups.com/Dolphin_Services/formservices/getfile?filename=34623366.png&type=CharterAccount
  // }


}
