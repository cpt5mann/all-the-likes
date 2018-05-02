window.onload = function(){
var likeCount=localStorage.getItem("like");
var loveCount=localStorage.getItem("love");
var laughCount=localStorage.getItem("laugh");
var likeImage=document.getElementById("like-image");
var loveImage=document.getElementById("love-image");
var laughImage=document.getElementById("laugh-image");
var likeText=document.getElementById("like-count");
var loveText=document.getElementById("love-count");
var laughText=document.getElementById("laugh-count");
var btn=document.getElementById("btn");

likeText.innerHTML=localStorage.getItem("like-count");
loveText.innerHTML=localStorage.getItem("love-count");
laughText.innerHTML=localStorage.getItem("laugh-count");



function doit(){
likeText.innerHTML=likeCount;
loveText.innerHTML=loveCount
laughText.innerHTML=laughCount;
}

likeImage.addEventListener("click", function(){
var lk=localStorage.getItem("like-count")
lk++;
localStorage.setItem("like-count", lk)
likeText.innerHTML=lk;
})
loveImage.addEventListener("click", function(){
var lv=localStorage.getItem("love-count")
lv++;
localStorage.setItem("love-count", lv)
loveText.innerHTML=lv;
})
laughImage.addEventListener("click", function(){
var lg=localStorage.getItem("laugh-count")
lg++;
localStorage.setItem("laugh-count", lg)
laughText.innerHTML=lg;
})

btn.addEventListener("click", function(){
localStorage.clear();
likeText.innerHTML=0;
loveText.innerHTML=0;
laughText.innerHTML=0;
})






}