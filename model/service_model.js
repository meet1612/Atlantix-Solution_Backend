var db=require('../dbconnection');
var service={
    
    getAllService:function(callback){
        return db.query("select s.s_id,s.s_name,s.s_description,s.sc_id,sc.sc_name,s.s_addedAt,s.s_updatedAt,s.s_status from service_tbl s,servicecategory_tbl sc where s.sc_id=sc.sc_id and s.s_status=0",callback);
    },

    getServiceById:function(s_id,callback){
        return db.query("select * from service_tbl where s_status=0 and s_id=?",[s_id],callback);
    },

    
    getServiceByName:function(s_name,callback){
        return db.query("select * from service_tbl where s_status=0 and s_name=?",[s_name],callback);
    },

    addService:function(item,callback){
        var d=new Date();
        return db.query("insert into service_tbl values(?,?,?,?,?,?,?)",[item.s_id,item.s_name,item.s_description,item.sc_id,d,d,item.s_status],callback);
    },
    updateServiceById:function(s_id,item,callback){
        var d=new Date();
        return db.query("update service_tbl set s_name=?,s_description=?,sc_id=?,s_updatedAt=? where s_status=0 and s_id=?",[item.s_name,item.s_description,item.sc_id,d,s_id],callback);
    },
    deleteServiceById:function(s_id,callback){
        var d=new Date();
        return db.query("update service_tbl set s_updatedAt=?,s_status=? where s_id=?",[d,"1",s_id],callback);
    },
    deleteServiceByCatId:function(sc_id,callback){
        var d=new Date();
        return db.query("update service_tbl set s_updatedAt=?,s_status=? where sc_id=?",[d,"1",sc_id],callback);
    },
    
    getServiceByCategory:function(callback){
        return db.query("select s.*,sc.* from service_tbl s,servicecategory_tbl sc where sc.sc_id=s.sc_id",callback);
    },

    getServiceCount:function(callback){
        return db.query("SELECT COUNT(s_id) as scount FROM `service_tbl` WHERE s_status=0",callback);
    },

    getServiceStatus:function(id,mobile_no,callback){
        return db.query("SELECT s.s_name,om_status FROM package_tbl p,service_tbl s,packageservice_tbl ps,packagepurchase_tbl pp,ordermaintain_tbl om,persondetail_tbl pd WHERE p.pk_id=ps.pk_id and s.s_id=ps.s_id and pp.pk_id=p.pk_id AND om.pp_id=pp.pp_id and s.s_id=ps.s_id and om.s_id=s.s_id AND pd.p_mobile=pp.p_mobile and s_status=0 AND pp.pk_id=? AND pp.p_mobile=?",[id,mobile_no],callback);
    },

    getServiceNotInOrderMaintaintbl:function(pk_id1,mobile_no,pk_id2,callback){
        return db.query("SELECT s_name FROM service_tbl WHERE s_id IN (SELECT s_id FROM packageservice_tbl WHERE pk_id = ? AND s_id NOT IN (SELECT s_id FROM ordermaintain_tbl WHERE pp_id = ( SELECT pp_id FROM packagepurchase_tbl WHERE p_mobile = ? AND pk_id = ? )))",[pk_id1,mobile_no,pk_id2],callback);
    }
};

module.exports=service;
