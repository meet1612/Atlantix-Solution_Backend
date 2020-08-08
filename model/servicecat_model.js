var db=require('../dbconnection');
var servicecat={
    
    getAllServicecat:function(callback){
        return db.query("select * from servicecategory_tbl where sc_status=0",callback);
    },

    getServicecatById:function(sc_id,callback){
        return db.query("select * from servicecategory_tbl where sc_status=0 and sc_id=?",[sc_id],callback);
    },

    addServicecat:function(item,callback){
        return db.query("insert into servicecategory_tbl values(?,?,?)",[item.sc_id,item.sc_name,'0'],callback);
    },

    updateServicecat:function(sc_id,item,callback){
        return db.query("update servicecategory_tbl set sc_name=? where sc_id=?",[item.sc_name,sc_id],callback);
    },
    deleteServicecat:function(sc_id,callback){
        return db.query("update servicecategory_tbl set sc_status=1 where sc_id=?",[sc_id],callback);
    }
};

module.exports=servicecat;