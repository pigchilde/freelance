'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {
  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  init(http){
    super.init(http);
  }
  
  /**
   * postAction
   */
  async postAction() {
    if(this.isPost()) {
      let data = this.post();

      let isAdd = await this.model('order').where({telephone:data.telephone}).find();

      //判断用户是否提交过
      if(!think.isEmpty(isAdd)) {
         return this.fail("该用户已经提交过信息了！");
      }

      let result = this.model('order').add(data);

      if(result){
        return this.success(result);;
      }else {
        return this.fail("添加失败！")
      }
    }
  }
}