function e(e,t){new Promise(((n,o)=>{const l=Math.random()>.3;setTimeout((()=>{l?n(`✅ Fulfilled ${e} in ${t}ms`):o(`❌ Rejected ${e} in ${t}ms`)}),t)})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelectorAll("input"),o=n[2].value;let l=Number(n[0].value);const u=Number(n[1].value);for(let t=0;t<o;t++)e(t+1,l),l+=u}));
//# sourceMappingURL=03-promises.5d11d613.js.map
