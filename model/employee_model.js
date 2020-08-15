var db=require('../dbconnection');
var employee={
    
    getAllEmployee:function(callback){
        return db.query("select * from employee_tbl where e_status = 0",callback);
    },

    getEmployeeById:function(mobile_no,callback){
        return db.query("select * from employee_tbl where e_mobile=? and e_status=0",[mobile_no],callback);
    },

    getEmployeeServiceById:function(mobile_no,callback){
        return db.query("select s.*, e.*, es.* from service_tbl s,employee_tbl e ,employeeservice_tbl es where s.s_id=es.s_id and e.e_mobile=es.e_mobile and e.e_mobile=? and es_status=0",[mobile_no],callback);
    },

    addEmployee:function(item,filename,callback){
        var d=new Date();
        return db.query("INSERT INTO employee_tbl(e_mobile, aadharcard_no, e_name, e_image, e_address, e_pincode, e_workingstatus, e_addedAt, e_updatedAt, e_status) VALUES (?,?,?,?,?,?,?,?,?,?)",[item.e_mobile, item.aadharcard_no, item.e_name, filename, item.e_address, item.e_pincode, item.e_workingstatus, d, d, item.e_status],callback);
    },
    addEmployeeService:function(item,filename,callback){
        var d=new Date();
        return db.query("INSERT INTO employeeservice_tbl(es_id, e_mobile, s_id,es_status) VALUES (?,?,?,?)",[item.es_id, item.e_mobile, item.s_id,'0'],callback);
    },
    deleteEmployeeService:function(es_id,callback){
        return db.query("update employeeservice_tbl set es_status=1 where es_id=?",[es_id],callback);
    },
    deleteEmployeeServiceByEmobileSid:function(mobile_no,sid,callback){
        return db.query("update employeeservice_tbl set es_status=1 where e_mobile=? and s_id=?",[mobile_no,sid],callback);
    },
    updateEmployee:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update employee_tbl set aadharcard_no=?,e_name=?,e_address=?, e_pincode=?, e_workingstatus=?,e_updatedAt=? where e_status=0 and e_mobile=?",[item.aadharcard_no,item.e_name,item.e_address,item.e_pincode,item.e_workingstatus,d,mobile_no],callback);
    },
    
    deleteEmployee:function(mobile_no,item,callback){
        var d=new Date();
        return db.query("update employee_tbl set  e_updatedAt=? ,e_status=1 where e_mobile=?",[d,mobile_no],callback);
    },

    getEmployeeRemainingServiceById:function(mobile_no,callback){
        return db.query("select s_name from service_tbl where s_status=0 and s_name NOT IN (select s_name from service_tbl s, employee_tbl e, employeeservice_tbl es where s.s_id=es.s_id and e.e_mobile=es.e_mobile and e.e_mobile=? and s_status=0 and es_status=0)",[mobile_no],callback);
    },
    
     // this function also checks the current working status of the employee
  getEmployeeByServiceID: function (ID, callback) {
    return db.query(
      "select * from employeeservice_tbl as es join employee_tbl as e on es.e_mobile = e.e_mobile where e.e_workingstatus = 1 and es.s_id = ? and e.e_status = 0",
      [ID],
      callback
    );
  },

  //Appoint Employee
  appointEmployee: function (mobile_no, callback) {
    var d = new Date();
    return db.query(
      "update employee_tbl set e_updatedAt=? ,e_workingstatus=0 where e_mobile=?",
      [d, mobile_no],
      callback
    );
  },

};

module.exports=employee;
