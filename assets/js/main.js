const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const progress=document.querySelector('.scroll-progress');
if(progress){
  const updateProgress=()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max>0?Math.min(100,(d.scrollTop/max)*100):0)+'%'};
  updateProgress();document.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);
}

document.querySelectorAll('[data-lens]').forEach(group=>{
  const buttons=[...group.querySelectorAll('.lens-button')];
  const title=group.querySelector('[data-lens-title]');
  const text=group.querySelector('[data-lens-text]');
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.setAttribute('aria-selected','false'));
    btn.setAttribute('aria-selected','true');
    if(title) title.textContent=btn.dataset.title||'';
    if(text) text.textContent=btn.dataset.text||'';
  }));
});

document.querySelectorAll('.project-figure').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const dialog=document.querySelector(btn.dataset.dialog||'');
    if(!dialog) return;
    const target=dialog.querySelector('img');
    const src=btn.querySelector('img');
    if(target&&src){target.src=src.src;target.alt=src.alt}
    if(typeof dialog.showModal==='function') dialog.showModal();
  });
});
document.querySelectorAll('.project-dialog').forEach(dialog=>{
  dialog.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
});
