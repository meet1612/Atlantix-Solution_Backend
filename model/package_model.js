var db=require('../dbconnection');
var package={
    
    getAllPackage:function(callback){
        return db.query("select * from package_tbl where pk_status=0",callback);
    },

    getPackageById:function(id,callback){
        return db.query("select * from package_tbl where pk_status=0 and pk_id=?",[id],callback);
    },

    getPackageServiceById:function(id,callback){
        return db.query("select ps.*,s.*,pk.*,sc.*,i.* from packageservice_tbl ps,service_tbl s,package_tbl pk, servicecategory_tbl sc,image_tbl i where ps.s_id=s.s_id and ps.pk_id=pk.pk_id and sc.sc_id=s.sc_id and i.s_id=s.s_id and ps.pk_id=? group by i.s_id",[id],callback);
    },

    addPackage:function(item,callback){
        var d=new Date();
        return db.query("insert into package_tbl values(?,?,?,?,?,?,?,?,?)",[item.pk_name,item.pk_description,item.pk_price,item.pk_discount,item.pk_includedser,item.pk_duration,d,d,item.pk_status],callback);
    },

    updatePackage:function(id,item,callback){
        var d=new Date();
        return db.query("update package_tbl set pk_name=?, pk_description=?, pk_price=?, pk_discount=?, pk_includedser=?, pk_duration=?, pk_updatedAt=? where pk_status=0 and pk_id=?",[item.pk_name,item.pk_description,item.pk_price,item.pk_discount,item.pk_includedser,item.pk_duration,d,id],callback);
    },

    deletePackage:function(id,item,callback){
        var d=new Date();
        return db.query("update package_tbl set pk_updatedAt=? ,pk_status=1 where pk_id=?",[d,id],callback);
    }
};

module.exports=package;
