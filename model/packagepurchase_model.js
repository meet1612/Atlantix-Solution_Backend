var db=require('../dbconnection');
var packagePurchase={
    
    getAllPackagePurchase:function(callback){
        return db.query("select pp.pp_id,pp.p_mobile,pp.pp_date,pp.pp_amount,p.pk_name,pp.pp_endDate from packagepurchase_tbl pp,package_tbl p WHERE pp.pk_id=p.pk_id",callback);
       
    },

    getAllPackagePurchaseCount:function(callback){
       
        return db.query("select pk.pk_name, COUNT(pp.pk_id) as pp_count,pp.pp_date,pp.pp_amount from packagepurchase_tbl pp, package_tbl pk where pk.pk_id = pp.pk_id group by pk.pk_name Order by COUNT(pp.pk_id)",callback);
    },

    getPackagePurchaseById:function(id,callback){
        return db.query("select * from packagepurchase_tbl where pp_status=0 and pp_id=?",[id],callback);
    },
    addPackagePurchase:function(item,callback){
        var d=new Date();
        return db.query("insert into packagepurchase_tbl values(?,?,?,?,?,?,?)",[item.pp_id,item.p_mobile,d,item.pp_amount,item.pk_id,item.pp_endDate,item.pp_status],callback);
    },

    deletePackagePurchase:function(id,item,callback){
        var d=new Date();
        return db.query("update packagepurchase_tbl set pp_status=1 where pp_id=?",[id],callback);
    },
    topSellingPackagewithCount:function(callback){
        return db.query("select pk.pk_name, COUNT(pp.pk_id) as count from packagepurchase_tbl pp, package_tbl pk where pk.pk_id = pp.pk_id group by pk.pk_name Order by COUNT(pp.pk_id) desc LIMIT 3",callback);
    },
    packagePurchaseHistoryById:function(mobile_no,callback){
        return db.query("select pp.*,pd.*,pk.* from packagepurchase_tbl pp, persondetail_tbl pd, package_tbl pk where pp.pk_id=pk.pk_id and pp.p_mobile=pd.p_mobile and pp.p_mobile=?",[mobile_no],callback);
    }
};

module.exports=packagePurchase;
