let alert_tit = document.querySelectorAll(".alert_tit");
let alert_content_box=document.querySelectorAll('.alert_content_box')
let close = document.querySelectorAll(".close");
let elemBody=document.querySelector('body')
let nowH=''
function closeAll(){
  alert_content_box.forEach(item=>{
    item.classList.remove('show')
    item.classList.add('hide')
    elemBody.classList.remove("fixed");
  })
}

closeAll()

alert_tit.forEach(item => {
  item.addEventListener("click", function () {
    let childen=this.nextElementSibling.querySelector(".alert_content")
    // let h =window.pageYOffset + (window.screen.height - childen.clientHeight)/2;
    let h = (window.screen.height/2) - childen.clientHeight-80;
    nowH = window.pageYOffset;
    this.nextElementSibling.classList.remove("hide");
    this.nextElementSibling.classList.add("show");
    childen.style.top = h + "px";
    elemBody.classList.add("fixed");
  });
});

close.forEach(item => {
  item.addEventListener('click',()=>{
    closeAll()
    window.document.documentElement.scrollTop = nowH;
    nowH=''
  })
});
