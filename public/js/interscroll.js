/* == configs == */
		
var labelText = "articolul continuă dupa reclamă"; //set custom "advertisment" awareness text label
var imagePath = "img/banner-art.jpg" //set path to your image
var clickMacro = "http://google.ro" //set clickURL destination
var linkTarget = "_blank" //set link target attribute, by default "blank"

/* == generator code == */

var container = document.getElementById("inscroll-banner");
container.setAttribute("style","height: 100vh; position: relative; margin: 40px 0;");
var cm = document.createElement("a");
cm.setAttribute("style","display:block; position:absolute; top:0; left:0; width:100%; height:100%;"); 
cm.setAttribute("href", clickMacro);
cm.setAttribute("target",linkTarget); 
var adlabel = document.createElement("div");
var lt = document.createTextNode(labelText)
adlabel.appendChild(lt);
adlabel.setAttribute("style","position:absolute; z-index:9; margin-top:-26px; color:#fff; background-color:#222; text-align:center; width:100%; left:0;font-size:14px; padding:3px 0; height:26px");
var inner = document.createElement("div");
inner.setAttribute("id","banner-core");
inner.setAttribute("style","width: 100%; top: 0; left: 0; clip: rect(0,100vw,100vh,0); overflow-x: hidden; overflow-y: auto; position: fixed; -webkit-transform: translateZ(0); -moz-transform: translateZ(0); transform: translateZ(0);");
var art = document.createElement("img");
art.setAttribute("src",imagePath);
art.setAttribute("style","max-width:100%");

inner.appendChild(art);
inner.appendChild(cm);
container.appendChild(adlabel);
container.appendChild(inner);

window.onscroll = function(){
  var pos = container.getBoundingClientRect();
  inner.style.clip = "rect("+pos.top+"px,100vw,"+pos.bottom+"px,0)";
}
window.onscroll();