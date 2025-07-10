export default function TextAniModule() {
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }
  function handleScroll() {
    const items = document.querySelectorAll('.text-ani');
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('actived');
      }
    });
  }

  
  window.addEventListener("resize",()=>{
    if (window.screen.width > 1200) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('load', handleScroll);
    }
  })


  if (window.screen.width > 1200) {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
  }

}
