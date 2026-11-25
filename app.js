// menu mobilne
(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('mnav');
  function zamknij(){m.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.style.overflow=''}
  b.addEventListener('click',function(){m.classList.add('open');b.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'});
  m.querySelector('.mnav-x').addEventListener('click',zamknij);
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',zamknij)});
})();
// galeria: strzalki i przeciaganie mysza
(function(){
  var g=document.getElementById('gal');if(!g)return;
  document.querySelectorAll('.gal-nav button').forEach(function(btn){
    btn.addEventListener('click',function(){var f=g.querySelector('figure');g.scrollBy({left:(+btn.dataset.k)*(f.offsetWidth+20)*2,behavior:'smooth'})});
  });
  var x0=0,s0=0,ciagnie=false;
  g.addEventListener('mousedown',function(e){ciagnie=true;x0=e.pageX;s0=g.scrollLeft;g.classList.add('drag')});
  window.addEventListener('mouseup',function(){if(!ciagnie)return;ciagnie=false;g.classList.remove('drag')});
  g.addEventListener('mousemove',function(e){if(!ciagnie)return;e.preventDefault();g.scrollLeft=s0-(e.pageX-x0)});
})();
