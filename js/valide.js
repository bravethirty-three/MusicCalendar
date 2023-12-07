function valideForms(){
    var x= document.forms["login"]["id"].value;
    var y= document.forms["login"]["password"].value;
    if(x == "" || x == null){
        alert("用户名不能为空");
        return false;
    }
    else if(y == "" || y == null){
        alert("密码不能为空");
        return false;
    }
}
