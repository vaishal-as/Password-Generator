
function changeclass(element){
    var slidebar=document.getElementById('slidebar')
    var title1=document.getElementById('title1')
    var title2=document.getElementById('title2')
    var title3=document.getElementById('title3')
    var title4=document.getElementById('title4')
    var head=document.getElementById("head")
    var icon=document.getElementById('ico')
    if (slidebar.style.width == '39vh'){
        slidebar.style.width='10vh';
        title1.style.display='none';
        title2.style.display='none';
        title3.style.display='none';
        title4.style.display='none';
        head.style.display='none';
        icon.style.left='1.5vh'

    }   
    else{
        slidebar.style.width='39vh'
        title1.style.display='block';
        title2.style.display='block';
        title3.style.display='block';
        title4.style.display='block';
        head.style.display='block'
        icon.style.left='1.5vh'
    }
    element.classList.toggle('active')

}
function boxed1(){
    var box1=document.getElementById('box1')
    var pop=document.getElementById('pop')
    if (box1.style.display== 'none' && pop.style.display=='block') {
        box1.style.display = 'flex';
        pop.style.display = 'none';
    }
    else{
        box1.style.display = 'none';
        pop.style.display = 'block';
    }

}
function boxed2(){
    var box3=document.getElementById('box3')
    var pop2=document.getElementById('pop2')
    if (box3.style.display== 'none' && pop2.style.display=='block') {
        box3.style.display = 'flex';
        pop2.style.display = 'none';
    }
    else{
        box3.style.display = 'none';
        pop2.style.display = 'block';
    }

}
function valid(){
    const inputField1 = document.getElementById("inputField1");
    const inputField2 = document.getElementById("inputField2");
    const inputField3 = document.getElementById("inputField3");
    const inputField4 = document.getElementById("inputField4");
    const inputField5 = document.getElementById("inputField5");
    const messageSpan1 = document.getElementById("message1");
    const messageSpan2 = document.getElementById("message2");
    const messageSpan3 = document.getElementById("message3");
    const messageSpan4 = document.getElementById("message4");
    const messageSpan5 = document.getElementById("message5");
    inputField1.addEventListener("input", function valid1() {
        if (inputField1.value !== "") {
          messageSpan1.style.display = "none";
        } else {
          messageSpan1.style.display = "inline";
        }
      });
      inputField2.addEventListener("input", function valid2() {
        if (inputField2.value !== "") {
          messageSpan2.style.display = "none";
        } else {
          messageSpan2.style.display = "inline";
        }
      });
      inputField3.addEventListener("input", function valid3() {
        if (inputField3.value !== "") {
          messageSpan3.style.display = "none";
        } else {
          messageSpan3.style.display = "inline";
        }
      });
      inputField4.addEventListener("input", function valid4() {
        if (inputField4.value !== "") {
          messageSpan4.style.display = "none";
        } else {
          messageSpan4.style.display = "inline";
        }
      });
      inputField5.addEventListener("input", function valid5() {
        if (inputField5.value !== "") {
          messageSpan5.style.display = "none";
        } else {
          messageSpan5.style.display = "inline";
        }
      });
}
window.onload = function() {
    inputField3.value='';
    inputField4.value='';
    inputField1.value='';
    inputField2.value='';
    inputField5.value='';
}

