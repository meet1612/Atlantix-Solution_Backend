var db=require('../dbconnection');
var ordermaintaintbl={
    
    getAllOrdermaintain:function(callback){
        return db.query("SELECT om.om_id, p.pk_name, pd.p_name, s.s_name FROM ordermaintain_tbl om, packagepurchase_tbl pp, service_tbl s,package_tbl p, persondetail_tbl pd WHERE om.pp_id = pp.pp_id AND p.pk_id = pp.pk_id AND pp.p_mobile = pd.p_mobile AND om.s_id = s.s_id",callback);
    },

    getAllOrdermaintainById:function(om_id,callback){
        return db.query("SELECT om.om_id, p.pk_name, pd.p_name, s.s_name FROM ordermaintain_tbl om, packagepurchase_tbl pp, service_tbl s,package_tbl p, persondetail_tbl pd WHERE om.pp_id = pp.pp_id AND p.pk_id = pp.pk_id AND pp.p_mobile = pd.p_mobile AND om.s_id = s.s_id AND om_id=?",[om_id],callback);
    },

    addOrdermaintain:function(item,callback){
        
        return db.query("insert into ordermaintain_tbl values(?,?,?)",[item.om_id,item.pp_id,item.s_id],callback);
    },

    updateOrdermaintain:function(om_id,item,callback){
    
        return db.query("update ordermaintain_tbl set pp_id=?,s_id=? where om_id=?",[item.pp_id,item.s_id,om_id],callback);
    }
};

module.exports=ordermaintaintbl;