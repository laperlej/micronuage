import define1 from "./3799afbb78a8700c@587.js";
import define2 from "./79750b3b8e929d9d@226.js";

function _1(md){return(
md`# Micro-NuAge Explorer`
)}

function _logo_nuage(FileAttachment){return(
FileAttachment("logo_nuage.svg").image({width: 200})
)}

function _3(html,pred_warning){return(
html`${pred_warning}`
)}

function _display(dashboard,html){return(
dashboard(html`
  <div style="display:flex">
  <div data-region="left" style="padding-right:20px"></div>
  <div data-region="right"></div>
`)
)}

function _5(button,data){return(
button(data)
)}

function _6(md){return(
md`
## Methodology

**ETHIC APPROVAL?** 

This notebook allows exploring the predicted effects of micro-nutrient intake on parameters of aging in the elderly. Emphasis is on the effects of three-way interactions between micronutrients. You can select three different micronutrients and visualize their predicted effects on one of several outcomes. These could be micronutrients you have an a priori hypotheses about, or have come across in your research/reading and are just curious to look at. Accompanying this website is an academic publication where you can read more about the underlying approach and data (Senior et al., 2022).

### Surfaces

Results are visualized as response surfaces that allow the user to look at three-dimensional effects. This approach has been commonly used in the "framework of nutritional geometry" ([Simpson and Raubenheimer, 2012](https://www.jstor.org/stable/j.ctt7tb3x) and [Raubenheimer and Simpson, 2018](https://doi.org/10.1016/j.cois.2018.02.002)). On these surfaces, the x and y-axes represent intakes of two nutrients, while a third nutrient is held constant at a value selected by the user. The colour of the surface indicates the magnitude of the response for intakes specified. The extent of the surface covered is based on observed distributions of micronutrient intake.

### Outcomes

The outcomes visualized are composite health measures based on common biomarkers. To aid in interpretation, the outcomes have been subjected to a (one standard-deviation) z-transformation. This means that 0 (green) equates to the population average, positive values (warm colours) are above average and negative (cool colours) below average. In all cases, lower values are indicative of better health.

The outcomes that can be explored ([Levine, 2013](https://doi.org/10.1093/gerona/gls233), [Levine et al., 2018](https://doi.org/10.18632/aging.101414), and [Liu et al., 2019](https://doi.org/10.1371/journal.pmed.1002718)) are

- Global physiological dysregulation,
- Oxygen transport (or blood system) dysregulation,
- Liver/kidney function dysregulation,
- Leukopoiesis (immune system) dysregulation,
- Micronutrient dysregulation,
- Lipid Dysregulation,
- Phenotypic Age, and
- Klemera-Doubal biological age.

### Nutrients

It is possible to explore the effects of 19 different micronutrient variables, as given below. To aid in interpretation, intakes have been subjected to a (one standard-deviation) z-transformation. This means that 0 equates to the population average, positive values are above average intake and negative below average. For a number of nutrients with highly correlated intakes, we have reduced these to a single composite cluster value, where higher values indicate high levels of intake. Those clusters are

- Cluster 1 - Phosphorous and Calcium,
- Cluster 2 - Thiamine and Iron,
- Cluster 3 - Vitamin B6, Potassium and Niacin Equivalents,
- Cluster 4 - Vitamin B12 and Vitamin A,
- Cluster 5 - Vitamin K and Lutein Zeaxanthin,
- Cluster 6 - Pantothenic Acid and Riboflavin, and
- Cluster 7 - Monounsaturated Fatty Acids and Saturated Fatty Acids.

### Underlying Data and Models

The surfaces are generated using a generalized additive model, or GAM, implemented with the *mgcv* package ([Wood, 2017](https://doi.org/10.1201%2F9781315370279)). The models were generated based on data from the NuAge cohort; a group of relatively healthy community dwelling Canadians aged 67+ who contributed data about their lifestyle, health and diet to an ongoing study ([Gaudreau et al.,  2007](https://doi.org/10.1089/rej.2007.0596)).

One of three different types of surfaces can be selected.

- Type 1 contains no statistical correction for potential confounding effects.
- Type 2 contains a correction for height, weight, age, sex and physical activity level.
- Type 3 contains a correction for height, weight, age, sex, physical activity level and comorbidities.

`
)}

function _7(md){return(
md`The application was designed by [Serge-Étienne Parent](https://observablehq.com/@essicolo), 2022.`
)}

function _8(md){return(
md`## Appendix`
)}

function _9(md){return(
md`### Dashboard`
)}

function _10(display,Plot,target_name,predz_name,predz_roundedvalue,target_range,predx_name,predx_range,predy_name,predy_range,data,invalidation){return(
display(
  'right',
  Plot.plot({
    height: 540, width: 540,
    color: {
      scheme: "burd",
      legend: true,
      label: target_name + " at " + predz_name + " = " + predz_roundedvalue[0].toFixed(2),
      domain: target_range,
      reverse: true
    },
    x : {label: predx_name, domain: [predx_range[0] + 0.4 * predx_range[0], predx_range[1]]},
    y : {label: predy_name, domain: [predy_range[0] + 0.05 * predy_range[0], predy_range[1]]},
    marks: [
      Plot.ruleX([0]),
      Plot.ruleY([0]),
      Plot.rect(data.filter(d => d['z'] == predz_roundedvalue), Plot.bin({}, {x: "x", y: "y", fill: "fit", inset: 1.5}))
    ]
  }),
  invalidation
)
)}

function _predz_value(Inputs,predz_range,predz_name,display,invalidation,Generators)
{
  const input = Inputs.range(predz_range, {step: 0.01, label: predz_name + " value"});
  display('left', input, invalidation);
  return Generators.input(input);
}


function _predz_name(Inputs,predictor_names,display,invalidation,Generators)
{
  const input = Inputs.select(predictor_names.map(d => d["hname"]).sort(), {label: "Micronutrient 3 (z)", value: "Cluster 3, PC1"});
  display('left', input, invalidation);
  return Generators.input(input);
}


function _predy_name(Inputs,predictor_names,display,invalidation,Generators)
{
  const input = Inputs.select(predictor_names.map(d => d["hname"]).sort(), {label: "Micronutrient 2 (y)", value: "Cluster 2, PC1"});
  display('left', input, invalidation);
  return Generators.input(input);
}


function _predx_name(Inputs,predictor_names,display,invalidation,Generators)
{
  const input = Inputs.select(predictor_names.map(d => d["hname"]).sort(), {label: "Micronutrient 1 (x)", value: "Cluster 1, PC1"});
  display('left', input, invalidation);
  return Generators.input(input);
}


function _target_name(Inputs,target_names,display,invalidation,Generators)
{
  const input = Inputs.select(target_names.map(d => d["hname"]), {label: "Target"});
  display('left', input, invalidation);
  return Generators.input(input);
}


function _model_name(Inputs,display,invalidation,Generators)
{
  const input = Inputs.select([1, 2, 3], {label: "Model type"});
  display('left', input, invalidation);
  return Generators.input(input);
}


function _17(md){return(
md`### Variables`
)}

function _selected_file(filename,model_name,target_name,predx_name,predy_name,predz_name,target_names,predictor_names){return(
filename(
  model_name, target_name, predx_name, predy_name, predz_name, target_names,  predictor_names)
)}

function _pred_warning(preddup)
{
  if (preddup) 
    var message = '<div style = "padding: 5px; background-color: #f6f6f6; border: 1px solid #000;">⚠️ Error: select three different predictors</div>';
  else
    var message = ""
  return message
}


function _target_range(findrange,data){return(
findrange(data, 'fit')
)}

function _predx_range(findrange,data){return(
findrange(data, 'x')
)}

function _predy_range(findrange,data){return(
findrange(data, 'y')
)}

function _predz_range(findrange,data){return(
findrange(data, 'z')
)}

function _predz_roundedvalue(data,predz_value)
{
  // The value set in the slider is practically continuous (step = 0.01)
  // however the value of z in the downloaded data is discrete
  // The code finds the closest z value to the position of the slider 
  // a filter is applied in the plot to retain only the array equal to the z value
  const z_vals = data.map(d => d['z']);
  const z_unique = [...new Set(z_vals)];
  const z_dist = z_unique.map(d => Math.abs(d - predz_value));
  const z_isnearest = z_dist.map(d => d == Math.min.apply(Math, z_dist));
  const z_nearest = z_unique.filter((d, i) => z_isnearest[i]) 
  return z_nearest
}


function _predictor_names(){return(
[
  // order of weights in Python 
  // tags = np.array(["Cluster_1_PC1", "Cluster_2_PC1", "Magnesium", "Cluster_3_PC1", "Sodium", "Zinc", "Selenium", "Cluster_4_PC1", "A_Tocopherol", "Cluster_5_PC1", "Vitamin_D", "Vitamin_C", "Cluster_6_PC1", "Folic_Acid_Equiv.", "Cholesterol", "Trans._F._Acids", "Cluster_7_PC1", "Poly._F._Acids"])
  {"cname" : "Cluster_1_PC1", "hname" : "Cluster 1, PC1", "weight" : 1},
  {"cname" : "Cluster_2_PC1", "hname" : "Cluster 2, PC1", "weight" : 2},
  {"cname" : "Magnesium", "hname" : "Magnesium", "weight" : 3},
  {"cname" : "Cluster_3_PC1", "hname" : "Cluster 3, PC1", "weight" : 4},
  {"cname" : "Sodium", "hname" : "Sodium", "weight" : 5},
  {"cname" : "Zinc", "hname" : "Zinc", "weight" : 6},
  {"cname" : "Selenium", "hname" : "Selenium", "weight" : 7},
  {"cname" : "Cluster_4_PC1", "hname" : "Cluster 4, PC1", "weight" : 8},
  {"cname" : "A_Tocopherol", "hname" : "α-Tocopherol", "weight" : 9},
  {"cname" : "Cluster_5_PC1", "hname" : "Cluster 5, PC1", "weight" : 10},
  {"cname" : "Vitamin_D", "hname" : "Vitamin D", "weight" : 11},
  {"cname" : "Vitamin_C", "hname" : "Vitamin C", "weight" : 12},
  {"cname" : "Cluster_6_PC1", "hname" : "Cluster 6, PC1", "weight" : 13},
  {"cname" : "Folic_Acid_Equiv.", "hname" : "Folic Acid, eq.", "weight" : 14},
  {"cname" : "Cholesterol", "hname" : "Cholesterol", "weight" : 15},
  {"cname" : "Trans._F._Acids", "hname" : "Trans Fatty Acids", "weight" : 16},
  {"cname" : "Cluster_7_PC1", "hname" : "Cluster 7, PC1", "weight" : 17},
  {"cname" : "Poly._F._Acids", "hname" : "Polyunsaturated Fatty Acids", "weight" : 18},
]
)}

function _target_names(){return(
[
  {"cname" : "1", "hname" : "Oxygen transport (or blood system) dysregulation"},
  {"cname" : "2", "hname" : "Leukopoiesis (immune system) dysregulation"},
  {"cname" : "3", "hname" : "Liver/kidney function dysregulation"},
  {"cname" : "4", "hname" : "Lipid Dysregulation"},
  {"cname" : "5", "hname" : "Micronutrient dysregulation"},
  {"cname" : "6", "hname" : "Global physiological dysregulation"},
  {"cname" : "7", "hname" : "Phenotypic Age"},
  {"cname" : "8", "hname" : "Klemera-Doubal biological age"}
]
)}

function _findrange(){return(
function findrange(data, column) {
  const x_vals = data.map(d => d[column]);
  const x_unique = [...new Set(x_vals)]; // max and min could be done on z_vals, but maybe (maybe) it's faster this way
  const x_min = Math.min.apply(Math, x_unique);
  const x_max = Math.max.apply(Math, x_unique);
  return [x_min, x_max];
}
)}

function _filename(aq){return(
function filename(model, target, pred1, pred2, pred3, target_names, predictor_names) {

  // mode string
  const model_s = model // 
  
  // target string
  const targetname_s = target_names.find(d => d["hname"] == target)['cname']

  // predictors
  const weights = [
    predictor_names.find(d => d["hname"] === pred1)["weight"],
    predictor_names.find(d => d["hname"] === pred2)["weight"],
    predictor_names.find(d => d["hname"] === pred3)["weight"]
  ];
  
  const prednames = [
    predictor_names.find(d => d["hname"] === pred1)["cname"],
    predictor_names.find(d => d["hname"] === pred2)["cname"],
    predictor_names.find(d => d["hname"] === pred3)["cname"]
  ];
  
  // order names by weights
  // Note: order is wrong 
  const predtable_u = aq.table({n: prednames, w: weights});
  const predtable_o = predtable_u.orderby('w');
  const prednames_o = predtable_o.array('n')

  // string of ordered predictors
  const prednames_s = prednames_o.join('_');
  
  return model_s + '_' + targetname_s + '_' + prednames_s + '.zip'
}
)}

function _preddup(predx_name,predy_name,predz_name)
{
  const preds = [predx_name, predy_name, predz_name];
  const isDuplicate = preds.some((item, index) => index !== preds.indexOf(item));
  return isDuplicate;
}


function _url(){return(
"https://raw.githubusercontent.com/essicolo/nutriapp-test/master/1_1_A_Tocopherol_Cluster_1_PC1_Cholesterol.zip"
)}

function _31(md){return(
md`### Downloaded data`
)}

async function _data(url,jszip,d3)
{
  const data = await fetch(url)
  .then(x => x.arrayBuffer())
  .then(x => jszip.loadAsync(x))
  .then(x => {
    const file = Object.keys(x.files)[0];
    return x.file(file).async("string").then(x => d3.csvParse(x, d3.autoType));
  })
  console.log(data)
  return data
}


function _33(md){return(
md`### Helpers

I need a dashboard function, a download button, an unzip utility and tools for tidy data manipulations.`
)}

function _button(d3,DOM){return(
(data, filename = 'data.csv') => {
  if (!data) throw new Error('Array of data required as first argument');

  let downloadData;
  if (filename.includes('.csv')) {
    downloadData = new Blob([d3.csvFormat(data)], { type: "text/csv" });
  } else {
    downloadData = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
  }

  const size = (downloadData.size / 1024).toFixed(0);
  const button = DOM.download(
    downloadData,
    filename,
    `Download ${filename} (~${size} KB)`
  );
  return button;
}
)}

function _jszip(require){return(
require("jszip@3/dist/jszip.min.js")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["logo_nuage.svg", {url: new URL("./files/3cf92498184248d47c5f9b645a675d47a61d4630af717a3cbb6534d21fd2eca4b5aa130f01efd33d5d3853486c2d727f5a8b3cc162068fdd6689187a1d3cb15b.svg", import.meta.url), mimeType: "image/svg+xml", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("logo_nuage")).define("logo_nuage", ["FileAttachment"], _logo_nuage);
  main.variable(observer()).define(["html","pred_warning"], _3);
  main.variable(observer("viewof display")).define("viewof display", ["dashboard","html"], _display);
  main.variable(observer("display")).define("display", ["Generators", "viewof display"], (G, _) => G.input(_));
  main.variable(observer()).define(["button","data"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["display","Plot","target_name","predz_name","predz_roundedvalue","target_range","predx_name","predx_range","predy_name","predy_range","data","invalidation"], _10);
  main.variable(observer("predz_value")).define("predz_value", ["Inputs","predz_range","predz_name","display","invalidation","Generators"], _predz_value);
  main.variable(observer("predz_name")).define("predz_name", ["Inputs","predictor_names","display","invalidation","Generators"], _predz_name);
  main.variable(observer("predy_name")).define("predy_name", ["Inputs","predictor_names","display","invalidation","Generators"], _predy_name);
  main.variable(observer("predx_name")).define("predx_name", ["Inputs","predictor_names","display","invalidation","Generators"], _predx_name);
  main.variable(observer("target_name")).define("target_name", ["Inputs","target_names","display","invalidation","Generators"], _target_name);
  main.variable(observer("model_name")).define("model_name", ["Inputs","display","invalidation","Generators"], _model_name);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer("selected_file")).define("selected_file", ["filename","model_name","target_name","predx_name","predy_name","predz_name","target_names","predictor_names"], _selected_file);
  main.variable(observer("pred_warning")).define("pred_warning", ["preddup"], _pred_warning);
  main.variable(observer("target_range")).define("target_range", ["findrange","data"], _target_range);
  main.variable(observer("predx_range")).define("predx_range", ["findrange","data"], _predx_range);
  main.variable(observer("predy_range")).define("predy_range", ["findrange","data"], _predy_range);
  main.variable(observer("predz_range")).define("predz_range", ["findrange","data"], _predz_range);
  main.variable(observer("predz_roundedvalue")).define("predz_roundedvalue", ["data","predz_value"], _predz_roundedvalue);
  main.variable(observer("predictor_names")).define("predictor_names", _predictor_names);
  main.variable(observer("target_names")).define("target_names", _target_names);
  main.variable(observer("findrange")).define("findrange", _findrange);
  main.variable(observer("filename")).define("filename", ["aq"], _filename);
  main.variable(observer("preddup")).define("preddup", ["predx_name","predy_name","predz_name"], _preddup);
  main.variable(observer("url")).define("url", _url);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer("data")).define("data", ["url","jszip","d3"], _data);
  main.variable(observer()).define(["md"], _33);
  const child1 = runtime.module(define1);
  main.import("dashboard", child1);
  main.variable(observer("button")).define("button", ["d3","DOM"], _button);
  main.variable(observer("jszip")).define("jszip", ["require"], _jszip);
  const child2 = runtime.module(define2);
  main.import("aq", child2);
  main.import("op", child2);
  return main;
}
