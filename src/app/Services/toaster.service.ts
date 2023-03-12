import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  success(title: string, message: string) {
    this.toastr.success(message, title, { positionClass: 'toast-bottom-left' });;
  }
  error(title: string, message: string) {
    this.toastr.error(message, title, { positionClass: 'toast-bottom-left' });;
  }
  warning(title: string, message: string) {
    this.toastr.warning(message, title, { positionClass: 'toast-bottom-left' });;
  }
  info(title: string, message: string) {
    this.toastr.info(message, title, { positionClass: 'toast-bottom-left' });;
  }
}
