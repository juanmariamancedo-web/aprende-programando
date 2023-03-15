document.querySelectorAll(`a[href^="#"]`).forEach(anchor =>{
    console.log(anchor)
    anchor.addEventListener("click", (e)=>{
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        const topOffset = target.offsetTop + 64;

        window.scrollTo({
            top: topOffset,
            behavior: "smooth"
        })

        console.log("Hay click")
    })
})