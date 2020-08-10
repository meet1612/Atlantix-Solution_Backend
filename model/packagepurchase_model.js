var db=require('../dbconnection');
var packagePurchase={
    
    getAllOrdermaintain: function (callback) {
    return db.query(
      "SELECT om.om_id, p.pk_name, pd.p_name,pd.p_mobile, s.s_name ,om.om_status,om.e_mobile,e.e_name FROM ordermaintain_tbl om, packagepurchase_tbl pp, service_tbl s,package_tbl p, persondetail_tbl pd,employee_tbl e WHERE om.pp_id = pp.pp_id AND p.pk_id = pp.pk_id AND pp.p_mobile = pd.p_mobile AND om.e_mobile=e.e_mobile AND om.s_id = s.s_id AND om.om_status = 1 ",
      callback
    );
  },

  getAllOrdermaintainById: function (om_id, callback) {
    return db.query(
      "SELECT om.om_id, p.pk_name, pd.p_name,pd.p_mobile, s.s_name ,om.om_status,om.e_mobile,e.e_name FROM ordermaintain_tbl om, packagepurchase_tbl pp, service_tbl s,package_tbl p, persondetail_tbl pd,employee_tbl e WHERE om.pp_id = pp.pp_id AND p.pk_id = pp.pk_id AND pp.p_mobile = pd.p_mobile AND om.e_mobile=e.e_mobile AND om.s_id = s.s_id AND om_id=?",
      [om_id],
      callback
    );
  },
    addPackagePurchase:function(item,callback){
        var d=new Date();
        return db.query("insert into packagepurchase_tbl values(?,?,?,?,?,?,?)",[item.pp_id,item.p_mobile,d,item.pp_amount,item.pk_id,item.pp_endDate,item.pp_status],callback);
    },

    deletePackagePurchase:function(id,item,callback){
        var d=new Date();
        return db.query("update packagepurchase_tbl set pp_status=1 where pp_id=?",[id],callback);
    },
    topSellingPackagewithCount:function(callback){
        return db.query("select pk.pk_name, COUNT(pp.pk_id) as count from packagepurchase_tbl pp, package_tbl pk where pk.pk_id = pp.pk_id group by pk.pk_name Order by COUNT(pp.pk_id) desc LIMIT 3",callback);
    },
    packagePurchaseHistoryById:function(mobile_no,callback){
        return db.query("select pp.*,pd.*,pk.* from packagepurchase_tbl pp, persondetail_tbl pd, package_tbl pk where pp.pk_id=pk.pk_id and pp.p_mobile=pd.p_mobile and pp.p_mobile=?",[mobile_no],callback);
    }
};

module.exports=packagePurchase;
