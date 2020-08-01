var db=require('../dbconnection');
var feedback={

    getAllFeedback:function(callback)
    {
        return db.query("select * from feedback_tbl",callback);
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
