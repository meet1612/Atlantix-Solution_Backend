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
    
    getServiceByPackageId:function(id,callback){
        return db.query("select pk.*,s.*,ps.* from package_tbl pk,service_tbl s,packageservice_tbl ps where s.s_id=ps.s_id and ps.pk_id=pk.pk_id and ps.pk_id=? and ps_status=0 and s_status=0",[id],callback);
    },

    getServiceNotInPackageById:function(id,callback){
        return db.query("select s_name from service_tbl where s_status = 0 and s_name NOT IN (select s_name from service_tbl s, package_tbl pk, packageservice_tbl ps where s.s_id=ps.s_id and pk.pk_id=ps.pk_id and pk.pk_id=? and s_status=0 and ps_status=0)",[id],callback);
    },
    
    addPackageService:function(item,filename,callback){
        var d=new Date();
        return db.query("INSERT INTO packageservice_tbl(ps_id, pk_id, s_id,ps_status) VALUES (?,?,?,?)",[item.ps_id, item.pk_id, item.s_id,'0'],callback);
    },

    deletePackageServiceByPackageIdSid:function(pkid,sid,callback){
        return db.query("update packageservice_tbl set ps_status=1 where ps_status=0 and pk_id=? and s_id=?",[pkid,sid],callback);
    },

    addPackage:function(item,callback){
        var d=new Date();
        return db.query("insert into package_tbl values(?,?,?,?,?,?,?,?,?,?)",['',item.pk_name,item.pk_description,item.pk_price,item.pk_discount,item.pk_includedser,item.pk_duration,d,d,item.pk_status],callback);
    },

    updatePackage:function(id,item,callback){
        var d=new Date();
        return db.query("update package_tbl set pk_name=?, pk_description=?, pk_price=?, pk_discount=?, pk_includedser=?, pk_duration=?, pk_updatedAt=? where pk_status=0 and pk_id=?",[item.pk_name,item.pk_description,item.pk_price,item.pk_discount,item.pk_includedser,item.pk_duration,d,id],callback);
    },

    deletePackage:function(id,item,callback){
        var d=new Date();
        return db.query("update package_tbl set pk_updatedAt=? ,pk_status=1 where pk_id=?",[d,id],callback);
    },
    
    getPackageCount:function(callback){
        return db.query("SELECT COUNT(pk_id) as pcount FROM `package_tbl` WHERE pk_status=0",callback);
    }
};

module.exports=package;
