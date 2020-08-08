var db=require('../dbconnection');
var employee={
    
    getAllEmployee:function(callback){
        return db.query("select * from employee_tbl where e_status = 0",callback);
    },

    getEmployeeById:function(mobile_no,callback){
        return db.query("select * from employee_tbl where e_mobile=?",[mobile_no],callback);
    },

    getEmployeeServiceById:function(mobile_no,callback){
        return db.query("select s.*, e.*, es.* from service_tbl s,employee_tbl e ,employeeservice_tbl es where s.s_id=es.s_id and e.e_mobile=es.e_mobile and e.e_mobile=?",[mobile_no],callback);
    },

    addEmployee:function(item,filename,callback){
        var d=new Date();
        return db.query("INSERT INTO employee_tbl(e_mobile, aadharcard_no, e_name, e_image, e_address, e_pincode, e_workingstatus, e_addedAt, e_updatedAt, e_status) VALUES (?,?,?,?,?,?,?,?,?,?)",[item.e_mobile, item.aadharcard_no, item.e_name, filename, item.e_address, item.e_pincode, item.e_workingstatus, d, d, item.e_status],callback);
    },
    addEmployeeService:function(item,filename,callback){
        var d=new Date();
        return db.query("INSERT INTO employeeservice_tbl(es_id, e_mobile, s_id) VALUES (?,?,?)",[item.es_id, item.e_mobile, item.s_id],callback);
    },
    deleteEmployeeService:function(es_id,callback){
        return db.query("delete from employeeservice_tbl where es_id=?",[es_id],callback);
    },
    deleteEmployeeServiceByEmobileSid:function(item,callback){
        return db.query("delete from employeeservice_tbl where e_mobile=? and s_id=?",[item.e_mobile,item.s_id],callback);
    },
    updateEmployee:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update employee_tbl set aadharcard_no=?,e_name=?,e_address=?, e_pincode=?, e_workingstatus=?,e_updatedAt=? where e_status=0 and e_mobile=?",[item.aadharcard_no,item.e_name,item.e_address,item.e_pincode,item.e_workingstatus,d,mobile_no],callback);
    },
    
    deleteEmployee:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update employee_tbl set  e_updatedAt=? ,e_status=1 where e_mobile=?",[d,mobile_no],callback);
    }

};

module.exports=employee;