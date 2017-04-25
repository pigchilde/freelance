'use strict';

import Base from './base.js';

export default class extends Base {

   /**
   * 添加需求发布
   */
  async addAction(){
    if(this.isPost()){
      let data = this.post();

      //判断需求名称,联系电话，需求描述是否为空
      if(data.name === '' || data.telephone === '' || data.description == ''){
         this.assign('msg', '需求名称,联系电话，需求描述不能为空！');
         return this.display("add");//错误信息渲染至登录页面
        //return this.fail('需求名称,联系电话，需求描述不能为空！');
      }
      
      //判断同个电话是否提交过需求
      let isExistence = await this.model('publish').where({telephone : data.telephone}).find();
      
      if(think.isEmpty(isExistence)) {
        await this.model('publish').add(data);
      }else{
        return this.fail('该电话号码已经提交过需求了！');
      }

      return this.success(data);

    }else{

      return this.display();

    }
  }

}