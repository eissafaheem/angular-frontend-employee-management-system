import { Subject } from 'rxjs';
import { Result } from 'src/app/Models/Classes/Result';
export class RestCalls {
    public progressSubject = new Subject<any>();

    POST(
        url: string,
        body: any = null,
        stringifyBody: boolean = true,
        headers: any = null,
        IsAsync: boolean = true
    ): Promise<Result> {
        let result = new Result();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, IsAsync);
        //assigning headers
        if (headers != null) {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        xhr.onprogress = (event) => {
            this.progressSubject.next(event);
        };
        if (body != null) {
            if (stringifyBody == true) {
                xhr.send(JSON.stringify(body));
            } else {
                xhr.send(body);
            }
        } else {
            xhr.send();
        }
        return new Promise((resolve) => {
            //if failure to connect to network(network error)
            xhr.onerror = function (err) {
                result.error_code = 404;
                result.error_message = "network error";
                resolve(result);
            };
            //on receiving response
            xhr.onload = function () {
                result.error_code = xhr.status;
                result.error_message = xhr.statusText;
                if (xhr.status != 200) {
                    result.response = null;
                } else {
                    result.response = xhr.response;
                }
                resolve(result);
            };
        });
    }

    PUT(
        url: string,
        body: any = null,
        stringifyBody: boolean = true,
        headers: any = null,
        IsAsync: boolean = true
    ): Promise<Result> {
        let result = new Result();
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', url, IsAsync);
        //assigning headers
        if (headers != null) {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        xhr.onprogress = (event) => {
            this.progressSubject.next(event);
        };
        if (body != null) {
            if (stringifyBody == true) {
                xhr.send(JSON.stringify(body));
            } else {
                xhr.send(body);
            }
        } else {
            xhr.send();
        }
        return new Promise((resolve) => {
            //if failure to connect to network(network error)
            xhr.onerror = () => {
                result.error_code = 404;
                result.error_message = "network error";
                resolve(result);
            };
            //on receiving response
            xhr.onload = function () {
                result.error_code = xhr.status;
                result.error_message = xhr.statusText;
                if (xhr.status != 200) {
                    result.response = null;
                } else {
                    result.response = xhr.response;
                }
                resolve(result);
            };
        });
    }

    GET(
        url: string,
        body: any = null,
        stringifyBody: boolean = true,
        headers: any = null,
        IsAsync: boolean = true
    ): Promise<Result> {
        let result = new Result();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, IsAsync);
        //assigning headers
        if (headers != null) {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        xhr.onprogress = (event) => {
            this.progressSubject.next(event);
        };
        if (body != null) {
            if (stringifyBody == true) {
                xhr.send(JSON.stringify(body));
            } else {
                xhr.send(body);
            }
        } else {
            xhr.send();
        }
        return new Promise((resolve) => {
            //if failure to connect to network(network error)
            xhr.onerror = () => {
                result.error_code = 404;
                result.error_message = 'Not Found';
                resolve(result);
            };
            //on receiving response
            xhr.onload = function () {
                result.error_code = xhr.status;
                result.error_message = xhr.statusText;
                if (xhr.status != 200) {
                    result.response = null;
                } else {
                    result.response = xhr.response;
                }
                resolve(result);
            };
        });
    }

    DELETE(
        url: string,
        body: any = null,
        stringifyBody: boolean = true,
        headers: any = null,
        IsAsync: boolean = true
    ): Promise<Result> {
        let result = new Result();
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', url, IsAsync);
        //assigning headers
        if (headers != null) {
            for (let key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
        xhr.onprogress = (event) => {
            this.progressSubject.next(event);
        };
        if (body != null) {
            if (stringifyBody == true) {
                xhr.send(JSON.stringify(body));
            } else {
                xhr.send(body);
            }
        } else {
            xhr.send();
        }
        return new Promise((resolve) => {
            //if failure to connect to network(network error)
            xhr.onerror = () => {
                result.error_code = 404;
                result.error_message = 'Not Found';
                resolve(result);
            };
            //on receiving response
            xhr.onload = function () {
                result.error_code = xhr.status;
                result.error_message = xhr.statusText;
                if (xhr.status != 200) {
                    result.response = null;
                } else {
                    result.response = xhr.response;
                }
                resolve(result);
            };
        });
    }
}