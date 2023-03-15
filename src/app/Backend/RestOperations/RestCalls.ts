import { Subject } from 'rxjs';
import { Result } from 'src/app/Models/Classes/Result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class RestCalls {

  POST(url: string, data: any): Promise<any> {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const promise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {

            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
    });
    xhr.send(JSON.stringify(data));
    return promise;
  }

  PUT(url: string, data: any): Promise<any> {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const promise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {

            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
    });
    xhr.send(JSON.stringify(data));
    return promise;
  }

  GET(url: string): Promise<any> {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    const promise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {            
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
    });
    xhr.send();
    return promise;
  }
  
  DELETE(url: string, empId: String): Promise<any> {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    const promise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {            
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
    });
    xhr.send();
    return promise;
  }
}