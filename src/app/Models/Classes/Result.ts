export class Result {
    error_code: number;
    error_message: string;
    response: any;

    constructor() {
        this.error_code = -1;
        this.error_message = "";
    }
}