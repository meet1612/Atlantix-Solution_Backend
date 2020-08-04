var db=require('../dbconnection');
var persondetail={
    getAllPersondetail:function(callback){  //admin
        return db.query('SELECT pd.p_mobile,pd.p_name,pd.p_address,pd.p_pincode,p.p_type,pd.p_addedAt,pd.p_updatedAt,pd.p_status from persondetail_tbl pd, person_tbl p WHERE pd.p_id=p.p_id',callback);
    },
    getPersondetailById:function(id,callback){
        return db.query("select * from persondetail_tbl where p_mobile=?",[id],callback);
    },
    PersondetailLogin:function(item,callback){
        return db.query('select * from persondetail_tbl where p_mobile=? And p_password=?',[item.p_mobile,item.p_password],callback);
    },
    PersondetailUpdate:function(id,item,callback){
        var d =new Date();
        return db.query("update persondetail_tbl set p_name=?,p_address=?,p_pincode=?,p_updatedAt=? where p_status=0 and p_mobile=?",[item.p_name,item.p_address,item.p_pincode,d,id],callback);
    },
    changepwd:function(item,callback){
        return db.query("update persondetail_tbl set p_password=? where p_mobile=?",[item.p_password,item.p_mobile],callback);
    }
};
module.exports=persondetail;