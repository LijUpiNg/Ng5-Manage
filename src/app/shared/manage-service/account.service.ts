import {Injectable} from '@angular/core';
import {AppApiService, ServiceRequestCallback} from '../base-service/app-api.service';

/** 用户登录服务 */
@Injectable()
export class AccountService {
  constructor(private appApiService: AppApiService) {
  }

  // 管理员登录
  managerLogin(param: any, callback: ServiceRequestCallback ) {
    return this.appApiService.call<any>('Account.Account-ManagerLogin',
      param, callback);
  }
}
