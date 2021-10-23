function enter(){//登录
    var n=document.getElementById("name");
    var nn=n.value;
    var p=document.getElementById("password")
    var pp=p.value;
    $.ajax("${pageContext.request.contextPath}/enter",
        {
            type:"post",
            dataType:"json",
            data:{name:nn,password:pp,message:"enter"},
            // 请求成功后的回调函数。
            success :function(data){
                if(data.message=="5")
                    location.href="${pageContext.request.contextPath}/jsp-index/library-view.jsp";
                else{
                    $("#span1").html("用户名或密码错误");
                }
            },
            // 请求出错时调用的函数
            error:function(){
                alert("发送失败");
            }
        });
}
$(function (){//切换图片
    $("body").css("background-image","url('${pageContext.request.contextPath}/素材/日出.jpg')");
    setTimeout(img,2000)
})
function img(){//切换图片
    var p=Math.floor((Math.random()*4)+1)
    if(p==1){
        $("body").css("background-image","url('${pageContext.request.contextPath}/素材/日出.jpg')");
    }
    else if(p==2){
        $("body").css("background-image","url('${pageContext.request.contextPath}/素材/海边.jpg')");
    }
    else if(p==3){
        $("body").css("background-image","url('${pageContext.request.contextPath}/素材/草地.jpg')");
    }
    else if(p==4){
        $("body").css("background-image","url('${pageContext.request.contextPath}/素材/高山.jpg')");
    }
    setTimeout(img,2000)
}
function login() {
    location.href="${pageContext.request.contextPath}/jsp-index/login.jsp";
}