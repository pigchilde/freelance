'use strict';

export default class extends think.controller.base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let isLogin = await this.islogin();

    if(this.isPost()){

      let username = this.post('username');
      let password = this.post('password');

      if(username === '' || password === ''){
        return this.fail('用户名或密码不能为空!');
      }

      let user = await this.model('user').where({username : username}).find();

      if(!think.isEmpty(user)) {
        if(password === user.password){

          let userInfo = {
              'uid': user.id,
              'username': user.username
          };

          await this.session('userInfo', userInfo);
          this.success();
          //this.redirect('/admin/index');

        }else{
          return this.fail('密码错误!');
        }
      }else{
        return this.fail('用户不存在!');
      }
    }else{
      if(isLogin){
          this.redirect('/admin/index');
      }else{
          return this.display();
      }
    }
    //auto render template file index_index.html
    return this.display();
  }

   /**
   * 退出登录
   */
  async logoutAction(){
      //退出登录
      let isLogin = await this.islogin();
      if(isLogin){
          await this.session('userInfo', null);
          this.redirect('/admin/login');
      }else{
          this.redirect('/admin/login');
      }
  }

  async islogin(){
      let user = await this.session('userInfo');
      let res = think.isEmpty(user) ? false : true;
      return res;
  }



}