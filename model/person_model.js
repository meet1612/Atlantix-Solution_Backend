var db=require('../dbconnection');
var person={
    
    getAllPerson:function(callback){
        return db.query("select * from person_tbl",callback);
    },

    getPersonById:function(id,callback){
        return db.query("select * from person_tbl where p_id=?",[id],callback);
    },

    addPerson:function(item,callback){
        return db.query("insert into person_tbl values(?,?)",[item.p_pid,item.p_type],callback);
    },

    updatePerson:function(id,item,callback){
        return db.query("update person_tbl set p_type=? where p_id=?",[item.p_type,id],callback);
    }
};

module.exports=person;