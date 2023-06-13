function changeclass(element){
    var slidebar=document.getElementById('slidebar')
    var title1=document.getElementById('title1')
    var title2=document.getElementById('title2')
    var title3=document.getElementById('title3')
    var title4=document.getElementById('title4')
    var head=document.getElementById("head")
    var ico=document.getElementById('ico')
    if (slidebar.style.width == '39vh'){
        slidebar.style.width='10vh';
        title1.style.display='none';
        title2.style.display='none';
        title3.style.display='none';
        title4.style.display='none';
        head.style.display='none';
        ico.style.left='0vh'
    }   
    else{
        slidebar.style.width='39vh'
        title1.style.display='block';
        title2.style.display='block';
        title3.style.display='block';
        title4.style.display='block';
        head.style.display='block'
        ico.style.left='1.5vh'
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
  const inputField6 = document.getElementById("inputField6");
  const inputField7 = document.getElementById("inputField7");
  const inputField8 = document.getElementById("inputField8");
  const inputField9 = document.getElementById("inputField9");
  const inputField10 = document.getElementById("inputField10");
  const inputField11 = document.getElementById("inputField11");
  const inputField12 = document.getElementById("inputField12");
  const messageSpan1 = document.getElementById("message1");
  const messageSpan2 = document.getElementById("message2");
  const messageSpan3 = document.getElementById("message3");
  const messageSpan4 = document.getElementById("message4");
  const messageSpan5 = document.getElementById("message5");
  const messageSpan6 = document.getElementById("message6");
  const messageSpan7 = document.getElementById("message7");
  const messageSpan8 = document.getElementById("message8");
  const messageSpan9 = document.getElementById("message9");
  const messageSpan10 = document.getElementById("message10");
  const messageSpan11 = document.getElementById("message11");
  const messageSpan12 = document.getElementById("message12");
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
    inputField6.addEventListener("input", function valid6() {
      if (inputField6.value !== "") {
        messageSpan6.style.display = "none";
      } else {
        messageSpan6.style.display = "inline";
      }
    });
    inputField7.addEventListener("input", function valid7() {
      if (inputField7.value !== "") {
        messageSpan7.style.display = "none";
      } else {
        messageSpan7.style.display = "inline";
      }
    });
    inputField8.addEventListener("input", function valid8() {
      if (inputField8.value !== "") {
        messageSpan8.style.display = "none";
      } else {
        messageSpan8.style.display = "inline";
      }
    });
    inputField9.addEventListener("input", function valid9() {
      if (inputField9.value !== "") {
        messageSpan9.style.display = "none";
      } else {
        messageSpan9.style.display = "inline";
      }
    });
    inputField10.addEventListener("input", function valid10() {
      if (inputField10.value !== "") {
        messageSpan10.style.display = "none";
      } else {
        messageSpan10.style.display = "inline";
      }
    });
    inputField11.addEventListener("input", function valid11() {
      if (inputField11.value !== "") {
        messageSpan11.style.display = "none";
      } else {
        messageSpan11.style.display = "inline";
      }
    });
    inputField12.addEventListener("input", function valid12() {
      if (inputField12.value !== "") {
        messageSpan12.style.display = "none";
      } else {
        messageSpan12.style.display = "inline";
      }
    });
  }
  
window.onload = function() {
  
  inputField1.value='';
  inputField2.value='';
  inputField3.value='';
  inputField4.value='';
  inputField5.value='';
  inputField6.value='';
  inputField7.value='';
  inputField8.value='';
  inputField9.value='';
  inputField10.value='';
  inputField11.value='';
  inputField12.value='';
}
function pop1(){
  var pop=document.getElementById("pop")
  var pop1=document.getElementById("pop1")
  pop1.style.display='block'
  pop.style.display='none'
}
function pop3(){
  var pop=document.getElementById("pop")
  var pop1=document.getElementById("pop3")
  pop1.style.display='block'
  pop.style.display='none'
}
function back1(){
  var pop=document.getElementById("pop")
  var pop1=document.getElementById("pop1")
  var inputField1=document.getElementById("inputField1")
  var inputField2=document.getElementById("inputField2")
  var inputField3=document.getElementById("inputField3")
  var message1=document.getElementById("message1")
  var message2=document.getElementById("message2")
  var message3=document.getElementById("message3")
  inputField1.value='';
  inputField2.value='';
  inputField3.value='';
  message1.style.display='block'
  message2.style.display='block'
  message3.style.display='block'
  pop1.style.display='none'
  pop.style.display='block'
}
function back2(){
  var pop=document.getElementById("pop")
  var pop1=document.getElementById("pop3")
  var inputField1=document.getElementById("inputField4")
  var inputField2=document.getElementById("inputField5")
  var inputField3=document.getElementById("inputField6")
  var message1=document.getElementById("message4")
  var message2=document.getElementById("message5")
  var message3=document.getElementById("message6")
  inputField1.value='';
  inputField2.value='';
  inputField3.value='';
  message1.style.display='block'
  message2.style.display='block'
  message3.style.display='block'
  pop1.style.display='none'
  pop.style.display='block'
}
function pop4(){
  var pop=document.getElementById("pop2")
  var pop1=document.getElementById("pop4")
  pop1.style.display='block'
  pop.style.display='none'
}
function pop5(){
  var pop=document.getElementById("pop2")
  var pop1=document.getElementById("pop5")
  pop1.style.display='block'
  pop.style.display='none'
}
function back3(){
  var pop=document.getElementById("pop2")
  var pop1=document.getElementById("pop4")
  var inputField1=document.getElementById("inputField7")
  var inputField2=document.getElementById("inputField8")
  var inputField3=document.getElementById("inputField9")
  var message1=document.getElementById("message7")
  var message2=document.getElementById("message8")
  var message3=document.getElementById("message9")
  inputField1.value='';
  inputField2.value='';
  inputField3.value='';
  message1.style.display='block'
  message2.style.display='block'
  message3.style.display='block'
  pop1.style.display='none'
  pop.style.display='block'
}
function back4(){
  var pop=document.getElementById("pop2")
  var pop1=document.getElementById("pop5")
  var inputField1=document.getElementById("inputField10")
  var inputField2=document.getElementById("inputField11")
  var inputField3=document.getElementById("inputField12")
  var message1=document.getElementById("message10")
  var message2=document.getElementById("message11")
  var message3=document.getElementById("message12")
  inputField1.value='';
  inputField2.value='';
  inputField3.value='';
  message1.style.display='block'
  message2.style.display='block'
  message3.style.display='block'
  pop1.style.display='none'
  pop.style.display='block'
}