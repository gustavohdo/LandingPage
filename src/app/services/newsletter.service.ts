import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsletterResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl = "https://aegep.lambda-url.us-east-1.on.aws/";

  constructor(private http: HttpClient) {
   
  }

 

  sendData(name: string, email: string): Observable<NewsletterResponse>{
      const data = {name, email};
      const headers ={
        'Authorization': `Basic ${btoa('faed47pcwb7biktidlecuafuty')}`
      };
      return this.http.post<NewsletterResponse>(this.endpointUrl, data, {headers});
  }
}
