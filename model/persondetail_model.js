var db=require('../dbconnection');
var persondetail={

    getAllPersondetail:function(callback){  //admin
        return db.query('SELECT pd.p_mobile,pd.p_name,pd.p_address,pd.p_pincode,p.p_type,pd.p_addedAt,pd.p_updatedAt,pd.p_status from persondetail_tbl pd, person_tbl p WHERE pd.p_id=p.p_id',callback);
    },
    getPersondetailById:function(id,callback){
        return db.query("select * from persondetail_tbl where p_mobile=?",[id],callback);
    },
    PersondetailLoginforAdmin:function(item,callback){  //admin
        return db.query('select * from persondetail_tbl where p_mobile=? And p_password=? And p_id=1 and p_status=0',[item.p_mobile,item.p_password],callback);
    },
    PersondetailLoginforUser:function(item,callback){  //user
        return db.query('select * from persondetail_tbl where p_mobile=? And p_password=? And p_id=2 and p_status=0',[item.p_mobile,item.p_password],callback);
    },
    PersondetailRegister:function(item,callback){
        var d=new Date();
        return db.query("insert into persondetail_tbl values (?,?,?,?,?,?,?,?,?,?)",[item.p_mobile,item.p_name,item.p_password,item.p_address,item.p_pincode,'2',d,d,'0','0'],callback);
    },
    PersondetailUpdate:function(id,item,callback){
        var d =new Date();
        return db.query("update persondetail_tbl set p_name=?,p_password=?,p_address=?,p_pincode=?,p_updatedAt=? where p_status=0 and p_mobile=?",[item.p_name,item.p_password,item.p_address,item.p_pincode,d,id],callback);
    },
    changepwd:function(item,callback){
        return db.query("update persondetail_tbl set p_password=? where p_mobile=?",[item.p_password,item.p_mobile],callback);
    },
    deletePersondetail:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update persondetail_tbl set  p_updatedAt=? ,p_status=1 where p_mobile=?",[d,mobile_no],callback);
    }
};
module.exports=persondetail;