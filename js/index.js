window.onload=function(){

var imgarr=["../img/lun1.jpg",
    "../img/lun2.jpg",
    "../img/lun3.jpg",
    "../img/lun4.jpg",
    "../img/lun5.jpg",
    "../img/lun6.jpg"
]
console.log(imgarr.length);
var aarr=document.getElementsByClassName("a-bgc");
var image=document.getElementsByClassName("image")[0];
console.log(image);
var index=0;
aarr[0].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center bottom;";
var timer=setInterval(begin,2500);
function begin(){
    index++;
    if(index>5){
        index=0;
    }
    for(let i=0;i<aarr.length;i++){
        if(i!==index){
            aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center top;";
        }else{
            aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center bottom;";
        }
        
    
    
    }
    image.src=imgarr[index];
}
for(let i=0;i<aarr.length;i++){
    aarr[i].onclick=function(){
        clearInterval(timer);
        index=i;
        image.src=imgarr[i];
        for(let i=0;i<aarr.length;i++){
            if(i!==index){
                aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center top;";
            }else{
                aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center bottom;";
            }
            
        
        
        }
        timer=setInterval(begin,2500);
    }
}
var prev=document.getElementsByClassName("focus-prev")[0];
prev.onclick=function(){
    clearInterval(timer);
    index--;
    if(index<0){
        index=5;
    }
    image.src=imgarr[index];
    for(let i=0;i<aarr.length;i++){
        if(i!==index){
            aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center top;";
        }else{
            aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center bottom;";
        }
        
    
    
    }
    timer=setInterval(begin,2500);
}
var next=document.getElementsByClassName("focus-next")[0];
next.onclick=function(){
    clearInterval(timer);
    index++;
    if(index>5){
        index=0;
    }
    image.src=imgarr[index];
    for(let i=0;i<aarr.length;i++){
        if(i!==index){
            aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center top;";
        }else{
            aarr[i].style.cssText="background:url(http://www.gdufe.edu.cn/_upload/tpl/00/6f/111/template111/images/slide_btns.png) no-repeat center bottom;";
        }
        
    
    
    }
    timer=setInterval(begin,2500);
}
}