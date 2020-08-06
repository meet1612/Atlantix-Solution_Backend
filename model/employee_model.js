var db=require('../dbconnection');
var employee={
    
    getAllEmployee:function(callback){
        return db.query("select e.e_mobile,e.aadharcard_no,e.e_name,e.e_image,e.e_address,e.e_pincode,e.e_workingstatus,s.s_name,e.e_addedAt,e.e_updatedAt,e.e_status from employee_tbl e,service_tbl s WHERE e.s_id=s.s_id",callback);
    },

    getEmployeeById:function(mobile_no,callback){
        return db.query("select * from employee_tbl where e_mobile=?",[mobile_no],callback);
    },

    addEmployee:function(item,filename,callback){
        var d=new Date();
        return db.query("insert into employee_tbl values(?,?,?,?,?,?,?,?,?,?,?)",[item.e_mobile,item.aadharcard_no,item.e_name,filename,item.e_address,item.e_pincode,item.e_workingstatus,item.s_id,d,d,item.e_status],callback);
    },

    updateEmployee:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update employee_tbl set aadharcard_no=?,e_name=?,e_address=?, e_pincode=?, e_workingstatus=? ,s_id=? ,e_updatedAt=? where e_status=0 and e_mobile=?",[item.aadharcard_no,item.e_name,item.e_address,item.e_pincode,item.e_workingstatus,item.s_id,d,mobile_no],callback);
    },

    deleteEmployee:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update employee_tbl set  e_updatedAt=? ,e_status=1 where e_mobile=?",[d,mobile_no],callback);
    }
};

module.exports=employee;