window.onload = function(){
    // 상단의 마이페이지리스트 기능
    const click1 = document.querySelector(".mypage-bt");
    const mypage = document.querySelector(".mypage-list");

    click1.onclick = function(){
    mypage.classList.toggle("show");
};
}