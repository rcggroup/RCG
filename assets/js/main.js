// <!-- this script for include html file in onather html file -->
document.addEventListener("DOMContentLoaded", function () {
  let e = document.getElementsByTagName("include");
  for (var t = 0; t < e.length; t++) {
    let a = e[t];
    n(e[t].attributes.src.value, function (e) {
      a.insertAdjacentHTML("afterend", e), a.remove()
    })
  }
  // animated counter
  const counters=document.querySelectorAll('.count');
  const speed =200;
counters.forEach((counter)=>{
  const updateCount=()=>{
    const target=parseInt(counter.getAttribute('data-target'));
    const count=parseInt(counter.innerText);
    const increment=Math.trunc(target / speed);
    if (count < target){
      counter.innerText= count+increment;
      setTimeout(updateCount,1)
    }
    else{
      counter.innerText=target;
    }
  };

  updateCount();
});
  // owl crasouel
  function n(e, t) {
    fetch(e).then(e => e.text()).then(e => t(e))
  }
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
})