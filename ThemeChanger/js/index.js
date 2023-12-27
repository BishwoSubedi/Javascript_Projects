const images =document.querySelectorAll("img")
const content=document.getElementById("content")
const imgBox=document.getElementById("imageBox")
const closeBtn=document.getElementById("close-btn")
images.forEach((image)=>{
    image.addEventListener("click",showImgBox)
})


closeBtn.addEventListener("click",()=>{
    imgBox.style.display="none";
})
function showImgBox(){
    imgBox.style.display="block";
    // imgBox.style="height:500px"
    // console.log(this)
    // const imgSource=this.src;
    let image= document.createElement("img")
    // Add animation on hover
    image.classList.add("hover-animation");
      image.src=this.src
      //    console.log(image.src)
   image.style.objectFit="cover"
   image.style="height:620px"
   image.style="width:620px"
   content.innerHTML="";
   content.append(image)
}