import {Injectable} from '@angular/core';
import {GlobalConfig, ToastrService} from 'ngx-toastr';

// 提示框类型
const types = ['success', 'error', 'info', 'warning'];

@Injectable()
export class OpenToastrService {

  options: GlobalConfig;  // 提示框配置参数
  type_default = types[3];  // 默认提示框类型

  constructor(public toastrService: ToastrService) {
    this.options = this.toastrService.toastrConfig;
    // this.options.positionClass = 'toast-top-center'; //  提示框方向
    this.options.closeButton = true;
  }


  /**
   * 打开提示框openToast()
   * 参数：type:提示框类型（'success', 'error', 'info', 'warning'），message:提示内容，title：主题
   **/
  public openToast(type, title, message) {
    let toast_message = message;
    const toast_title = title;
    let toast_type = types.find(t => t === type);
    if (!toast_type) {
      toast_type = this.type_default;
    }
    if (!toast_message && !toast_title) {
      toast_message = '未知错误';
    }
    return this.toastrService[toast_type](toast_message, toast_title, this.options);
  }
}
