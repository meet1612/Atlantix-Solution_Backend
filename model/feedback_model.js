var db=require('../dbconnection');
var feedback={

    getAllFeedback:function(callback)
    {
        return db.query("select f.*,pd.* from feedback_tbl f,persondetail_tbl pd WHERE f.p_mobile=pd.p_mobile",callback);
    },
    addFeedback:function(item,callback)
    {
        return db.query("insert into feedback_tbl values(?,?,?,?)",[item.f_id,item.f_experience,item.f_comment,item.p_mobile],callback);
    },
    deleteFeedback:function(id,callback)
    {
        return db.query("delete from feedback_tbl where f_id=?",[id],callback);
    }
};
module.exports=feedback;
