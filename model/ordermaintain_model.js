var db=require('../dbconnection');
var ordermaintaintbl={
    
    getAllOrdermaintain:function(callback){
        return db.query("SELECT om.om_id, p.pk_name, pd.p_name,pd.p_mobile,e.e_name, s.s_name ,om.om_status,om.e_mobile FROM ordermaintain_tbl om, packagepurchase_tbl pp, service_tbl s,package_tbl p, persondetail_tbl pd,employee_tbl e WHERE om.pp_id = pp.pp_id AND p.pk_id = pp.pk_id AND pp.p_mobile = pd.p_mobile AND om.e_mobile=e.e_mobile AND om.s_id = s.s_id AND om.om_status = 1",callback);
    },

    getAllOrdermaintainById:function(om_id,callback){
        return db.query("SELECT om.om_id, p.pk_name, pd.p_name, s.s_name,pd.p_mobile,e.e_name ,om.om_status,om.e_mobile FROM ordermaintain_tbl om, packagepurchase_tbl pp, service_tbl s,package_tbl p, persondetail_tbl pd,employee_tbl e WHERE om.pp_id = pp.pp_id AND p.pk_id = pp.pk_id AND pp.p_mobile = pd.p_mobile AND om.e_mobile=e.e_mobile AND om.s_id = s.s_id AND om.s_id = s.s_id AND om.om_status = 1 AND om_id=?",[om_id],callback);
    },

    addOrdermaintain:function(item,callback){
        
        return db.query("insert into ordermaintain_tbl values(?,?,?,?,?)",[item.om_id,item.pp_id,item.s_id,item.e_mobile,item.om_status],callback);
    },

    updateOrdermaintain:function(om_id,item,callback){
    
        return db.query("update ordermaintain_tbl set pp_id=?,s_id=?,e_mobile=?,om_status=? where om_id=?",[item.pp_id,item.s_id,item.e_mobile,"0",om_id],callback);
    },
    serviceCompleted:function(om_id,callback){
    
        return db.query("update ordermaintain_tbl set om_status=? where om_id=?",["0",om_id],callback);
    },
    serviceFailed:function(om_id,callback){
    
        return db.query("update ordermaintain_tbl set om_status=? where om_id=?",["2",om_id],callback);
    },
    countPending:function(callback){
    
        return db.query("select count(*) from ordermaintain_tbl where om_status=?",["1"],callback);
    },
    countCompleted:function(callback){
    
        return db.query("select count(*) from ordermaintain_tbl where om_status=?",["0"],callback);
    },
    countFailed:function(callback){
    
        return db.query("select count(*) from ordermaintain_tbl where om_status=?",["2"],callback);
    },
    
    getServiceStatus: function (id, mobile_no, callback) {
    return db.query(
      "SELECT s.s_name,om_status FROM package_tbl p,service_tbl s,packageservice_tbl ps,packagepurchase_tbl pp,ordermaintain_tbl om,persondetail_tbl pd WHERE p.pk_id=ps.pk_id and s.s_id=ps.s_id and pp.pk_id=p.pk_id AND om.pp_id=pp.pp_id and s.s_id=ps.s_id and om.s_id=s.s_id AND pd.p_mobile=pp.p_mobile and s_status=0 AND pp.pk_id=? AND pp.p_mobile=?",
      [id, mobile_no],
      callback
    );
  },

    
  //

  totalEssentialServiceCount: function (id, callback) {
    return db.query(
      "select * from ordermaintain_tbl as omtbl join service_tbl as stbl on stbl.s_id = omtbl.s_id join servicecategory_tbl as sctbl on sctbl.sc_id = stbl.sc_id where sctbl.sc_name = 'Essential' and omtbl.om_status = 0 and omtbl.pp_id = ?",
      [id],
      callback
    );
  },

};

module.exports=ordermaintaintbl;
