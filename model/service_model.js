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
    }
};

module.exports=service;
