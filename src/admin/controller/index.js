'use strict';

import Base from './base.js';

export default class extends Base {
  init(http){-
    super.init(http);

  }

  /**
   * 需求列表查看
   */
  async indexAction(){
    let listData = await this.model('publish').field('id, name, creat_time').select();
    this.assign('listData', listData);
    
    return this.display();
  }

  /**
   * 具体需求查看
   */
  async publishdetailAction(){
    let id = this.get('publishid');
    let detailData = await this.model('publish').find({where:{id:id}});
    this.assign('detailData', detailData);

    return this.display();
  }
}