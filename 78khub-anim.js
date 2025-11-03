export const Anim = (()=>{
  const fadeIn = (el, dur=220)=>{ el.style.opacity=0; el.style.transition=`opacity ${dur}ms ease`; requestAnimationFrame(()=>{ el.style.opacity=1; }); };
  const fadeOut = (el, dur=180)=>{ el.style.transition=`opacity ${dur}ms ease`; el.style.opacity=0; };
  const slideYIn = (el, dy=10, dur=250)=>{
    el.style.opacity=0; el.style.transform=`translateY(${dy}px)`;
    el.style.transition=`transform ${dur}ms ease, opacity ${dur}ms ease`;
    requestAnimationFrame(()=>{ el.style.opacity=1; el.style.transform='translateY(0)'; });
  };
  const loader = {
    el:null,
    ensure(){
      if(this.el) return; 
      const d=document.createElement('div');
      d.style.cssText='position:fixed;inset:0;display:none;place-items:center;background:rgba(0,0,0,.35);z-index:9999';
      d.innerHTML='<div style="width:44px;height:44px;border-radius:50%;border:3px solid rgba(255,255,255,.25);border-top-color:#00ff8c;animation:spin 800ms linear infinite"></div>';
      const style=document.createElement('style'); style.textContent='@keyframes spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(style); document.body.appendChild(d); this.el=d;
    },
    show(){ this.ensure(); this.el.style.display='grid'; },
    hide(){ if(this.el) this.el.style.display='none'; }
  };
  return { fadeIn, fadeOut, slideYIn, loader };
})();