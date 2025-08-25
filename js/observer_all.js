document.addEventListener("DOMContentLoaded" , function(){
    let observer = new IntersectionObserver((e)=>{
        e.forEach((ObserverIn)=>{
            if( ObserverIn.isIntersecting ){
                ObserverIn.target.classList.add("inn");
            } else {
                // ObserverIn.target.classList.remove("inn");
            }
        })
    })

    let divs = document.querySelectorAll(".observer");
    divs.forEach( div =>{
        observer.observe( div );
    });
});