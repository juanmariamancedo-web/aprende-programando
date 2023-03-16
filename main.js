//Programamos las navegaciones internas
const links = document.querySelectorAll('.nav-link');

console.log(links)

links.forEach(link => {
  //Añadimos eventos de click los anchors con id en href
  link.addEventListener('click', (event) => {
    event.preventDefault();

    //Obtenemos el target
    const section = link.getAttribute('href');
    const target = document.getElementById(section.slice(section.indexOf("#") + 1))

    //Si target es null, hacemos scroll a top: 0
    if(!target){
        return window.scrollTo({
            top: 0,
            behavior: "smooth"
        });    
    }

    const topOffset = target.offsetTop - 64;

    console.log(target.offsetTop - 100)

    window.scrollTo({
      top: topOffset,
      behavior: "smooth"
    });

  });
});