// https://observablehq.com/@mootari/dashboard-with-inputs@587
import define1 from "./8d271c22db968ab0@160.js";

function _1(md){return(
md`# Dashboard with Inputs

*Context / discussion: [Redefine a value for viewof ?](https://talk.observablehq.com/t/redefine-a-value-for-viewof/3175/8)*

---
`
)}

function _display(dashboard,html){return(
dashboard(html`<div class=demo-display>
<div class=sidebar>
  <div class=controls data-region=controls></div>
  <div class=controls data-region=optional></div>
</div>
<div class=output data-region=output></div>
<style>
.demo-display { min-height: 3em; display: flex; font: 14px var(--sans-serif); max-width: 100% }
.demo-display [data-region] { margin: .5em; background: #eee; padding: 1em }
`)
)}

function _3(display){return(
display
)}

function _options(form,html,display,invalidation,Generators)
{
  const view = form(html`<form>
<label>Size: <input name=width type=number min=200 step=50 value=400 max=1000 style=width:auto> x <input name=height type=number min=200 step=50 value=300 max=1000 style=width:auto></label><hr style=margin:0>
<label style=display:flex>Pad: <input name=pad type=range min=0 max=200 value=50 step=1 style=width:100%></label><hr style=margin:0>
<label style=display:flex><input name=colorize type=checkbox> Single color</label>
`);
  display('controls', view, invalidation);
  return Generators.input(view);
}


function _color(options,html,display,invalidation,Generators)
{
  if(!options.colorize) return null;
  const input = html`<input type=color value=#ffffff>`;
  display('optional', input, invalidation);
  return Generators.input(input);
}


function* _canvas(options,DOM,display,invalidation,color)
{
  const {width: w, height: h, pad: p} = options,
        wp = w - 2 * p,
        hp = h - 2 * p,
        ctx = DOM.context2d(w, h, 1),
        num = 5;
  
  ctx.canvas.maxWidth = '100%';
  ctx.fillStyle = 'hsl(0, 0%, 0%)';
  ctx.lineWidth = 4;
  ctx.fillRect(0, 0, w, h);
  
  display('output', ctx.canvas, invalidation);
  
  while(true) {
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = .03;
    ctx.fillRect(0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'screen';
    for(let i = 0; i < num; i++) {
      ctx.beginPath();
      const t = Math.cos((Date.now() / 6000 + i/num) * Math.PI * 2) + 1;
      t < 1 ? ctx.moveTo(p + wp * t, p) : ctx.moveTo(p + wp, p + hp * (t-1));
      t < 1 ? ctx.lineTo(p, p + hp * t) : ctx.lineTo(p + wp * (t-1), p + hp);
      ctx.strokeStyle = color || `hsl(${i/num*360},100%,50%)`;
      ctx.stroke();
    }
    yield;
  }
}


function _8(md){return(
md`---
The function below receives an HTML element and returns it as a view to which other elements can be added from outside the cell.
`
)}

function _dashboard(html){return(
function dashboard(view) {
  const regions = new Map(Array.from(view.querySelectorAll('[data-region]'), n => [n.dataset.region, {
    node: n,
    template: n.dataset.template || '<div>',
  }]));
  view.oninput = view.onchange = view.onclick = e => e.stopImmediatePropagation();
  view.value = function(region, content, invalidate) {
    const {node, template} = regions.get(region);
    const item = html`${template}${content}`;
    node.appendChild(item);
    
    const remove = () => { if(item.parentNode === node) node.removeChild(item) };
    if(invalidate) invalidate.then(remove);
    return remove;
  };
  return view;
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof display")).define("viewof display", ["dashboard","html"], _display);
  main.variable(observer("display")).define("display", ["Generators", "viewof display"], (G, _) => G.input(_));
  main.variable(observer()).define(["display"], _3);
  const child1 = runtime.module(define1);
  main.import("form", child1);
  main.variable(observer("options")).define("options", ["form","html","display","invalidation","Generators"], _options);
  main.variable(observer("color")).define("color", ["options","html","display","invalidation","Generators"], _color);
  main.variable(observer("canvas")).define("canvas", ["options","DOM","display","invalidation","color"], _canvas);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("dashboard")).define("dashboard", ["html"], _dashboard);
  return main;
}
