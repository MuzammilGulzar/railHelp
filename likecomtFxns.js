const comt = document.getElementById("comt")
comt.addEventListener("click", function(){
    const commtdiv = document.createElement('div')
    commtdiv.style.width = "100vw"
    commtdiv.style.height = "100vh"
    document.body.appendChild(commtdiv)
    console.log(commtdiv)
})