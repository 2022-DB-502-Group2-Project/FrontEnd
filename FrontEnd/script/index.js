String id = "test", pwd = "123";
String user

function service(){
    let signIn = "${signIn}";
    if (signIn == ""){
        alert("서비스 페이지는 로그인 후 사용하실 수 있습니다.");
        location.href="${cpath}/login.do";
    } else {
        location.href="${cpath}/service.do"
    }
}




// 참고자료
// https://blog.naver.com/PostView.naver?blogId=flower-boon&logNo=222140677833