var db = require("../dbconnection");
var image = {
  getAllImage: function (callback) {
    return db.query("select i.i_id,i.i_name,s.s_name,i.i_addedAt,i.i_updatedAt from image_tbl i, service_tbl s where i.s_id=s.s_id", callback);
  },
  getImageById:function(id,callback){
    return db.query("select * from image_tbl where i_id=?",[id],callback);
  },
  addImage:function(item,filename,callback){
    var d=new Date();
    return db.query("insert into item_tbl (i_name,s_id,i_addedAt,i_updatedAt) values (?,?,?,?)",[filename,item.s_id,filename,d,d],callback);
  },
  updateImage:function(id,item,callback){
    var d=new Date();
    return db.query("update image_tbl set i_name=?,s_id=?,i_updatedAt=? where i_id=?",[item.i_name,item.s_id,d,id],callback);
  },
  deleteImage:function(id,callback){
    return db.query("delete from image_tbl where i_id=?",[id],callback);
  },
  getImageBySerId:function(id,callback){
    return db.query('select i_name from image_tbl where s_id=? LIMIT 1',[id],callback);
  },
  getAllImageBySerId:function(id,callback){
    return db.query('select * from image_tbl where s_id=?',[id],callback);
  }
};

module.exports=image;