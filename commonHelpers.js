import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=document.querySelector(".search-form"),l=document.querySelector(".gallery-container"),c=document.querySelector(".loading");y.addEventListener("submit",p);function p(o){o.preventDefault();const i=o.currentTarget,r=i.elements.insert.value.toLowerCase().trim();if(r==="")return a();c.style.display="flex",l.innerHTML="",h(r).then(g).catch(a).finally(()=>i.reset())}function h(o){return fetch(`https://pixabay.com/api/?key=44767976-5c84653ee99974363117d019c&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g({hits:o}){const i=o.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${n}"> 
   <img src="${r}" alt="${e}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${t}</li>
  <li class="discrabe-item"><b>Views</b> ${s}</li>
  <li class="discrabe-item"><b>Comments</b> ${u}</li>
  <li class="discrabe-item"><b>Downloads</b> ${f}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(l.innerHTML=i,o.length===0)return a();b.refresh(),c.style.display="none"}const b=new d(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function a(){m.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
