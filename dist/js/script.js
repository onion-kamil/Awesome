const hamburger=document.getElementById("hamburger"),hamburgerExit=document.getElementById("hamburger-exit"),nav=document.getElementById("nav"),circleSquare=document.getElementById("circle-square"),containerBody=document.getElementById("full-screen-container"),textRow=document.getElementById("text-row"),circleSquareRow=document.getElementById("circleSquareRow"),socialMediaText=document.getElementById("social-media-text"),triangleRow=document.getElementById("triangle-row"),icon=document.getElementsByClassName("icon"),iconP=document.getElementsByClassName("icon-p");let rotated=!1;const displayMenu=function(){for(hamburger.style.display="none",hamburgerExit.style.display="block",nav.classList.remove("d-none"),nav.classList.remove("d-md-block"),containerBody.style.backgroundColor="#001820",containerBody.style.width="100%",containerBody.style.height="100vh",textRow.style.display="none",circleSquareRow.style.display="none",socialMediaText.style.display="none",triangleRow.style.display="none",open=!0,i=0;i<3;i++)iconP[i].style.display="none",icon[i].classList.remove("col-md-2"),icon[i].style.padding="5vh"},hideMenu=function(){for(hamburgerExit.style.display="none",hamburger.style.display="block",nav.classList.add("d-none"),nav.classList.add("d-md-block"),containerBody.style.backgroundColor="",textRow.style.display="",circleSquareRow.style.display="",socialMediaText.style.display="",triangleRow.style.display="",i=0;i<3;i++)iconP[i].style.display="",icon[i].classList.add("col-md-2"),icon[i].style.padding="";open=!1},rotate360=function(){"rotate(360deg)"==circleSquare.style.transform?circleSquare.style.transform=null:circleSquare.style.transform+="rotate(360deg)"};hamburger.addEventListener("click",displayMenu),hamburgerExit.addEventListener("click",hideMenu),circleSquare.addEventListener("click",rotate360);