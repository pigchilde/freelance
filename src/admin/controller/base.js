'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  init(http) {
    super.init(http);
  }

  async __before() {
    //登陆验证
    let isLogin = await this.islogin();

    if (!isLogin) {
        return this.redirect('/admin/login');
    }
  }

  async islogin(){
      let user = await this.session('userInfo');
      let res = think.isEmpty(user) ? false : true;
      return res;
  }

}