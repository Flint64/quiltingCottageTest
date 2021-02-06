import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendMessage(body){

    if (body){

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    
    let jsonBody = JSON.stringify(body);

    // return this.http.post("http://localhost:3000/email",jsonBody,headers);

    return this.http.post('http://localhost:3000/email', jsonBody, {headers: headers});

  }
}

// getFiles(){

//   let headers = {
//     headers : new HttpHeaders({ 'Content-Type' : 'application/json'})};

//   console.log("calling files route...");~
//   return this.httpreq.get("http://localhost:3000/files", headers);
// }

}
