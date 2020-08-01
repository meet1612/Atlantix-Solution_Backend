var db=require('../dbconnection');
var servicecat={
    
    getAllServicecat:function(callback){
        return db.query("select * from servicecategory_tbl",callback);
    },

    getServicecatById:function(sc_id,callback){
        return db.query("select * from servicecategory_tbl where sc_id=?",[sc_id],callback);
    },

    addServicecat:function(item,callback){
        
        return db.query("insert into servicecategory_tbl values(?,?)",[item.sc_id,item.sc_name],callback);
    },

    updateServicecat:function(sc_id,item,callback){
    
        return db.query("update servicecategory_tbl set sc_name=? where sc_id=?",[item.sc_name,sc_id],callback);
    },
    deleteServicecat:function(sc_id,callback){
        return db.query("delete from servicecategory_tbl where sc_id=?",[sc_id],callback);
    }
};

module.exports=servicecat;