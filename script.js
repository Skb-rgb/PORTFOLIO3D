const stage=document.querySelector('.stage');
const viewer=document.querySelector('#character');
const sketch=document.querySelector('#sketch');
const sections=[...document.querySelectorAll('.screen')];
const dots=[...document.querySelectorAll('.steps a')];
const images=['./assets/01-inicio.png','./assets/02-detalle.png','./assets/03-proyectos.png'];
// Ajusta estos valores después de cargar el GLB: órbita horizontal, vertical,
// distancia; camera-target centra la cabeza, torso o piernas según tu modelo.
let cameras=[
  {orbit:'0deg 75deg 0.55m',target:'0m 0.2m 0m'},
  {orbit:'-18deg 68deg 1.9m',target:'0m 0.55m 0m'},
  {orbit:'20deg 80deg 2.1m',target:'0m -0.65m 0m'}
];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let active=-1;
function update(){
  const middle=innerHeight/2;
  let index=0,shortest=Infinity;
  sections.forEach((section,i)=>{const rect=section.getBoundingClientRect();const distance=Math.abs(rect.top+rect.height/2-middle);if(distance<shortest){shortest=distance;index=i}});
  if(index!==active){active=index;sketch.src=images[index];dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));}
  if(!stage.classList.contains('has-model')||reduced)return;
  const next=Math.min(index+1,cameras.length-1);
  const rect=sections[index].getBoundingClientRect();
  const t=Math.max(0,Math.min(1,-rect.top/rect.height));
  const blend=(a,b)=>a+(b-a)*t;
  const parse=(value)=>value.split(' ').map(Number.parseFloat);
  const a=parse(cameras[index].orbit),b=parse(cameras[next].orbit);
  const c=parse(cameras[index].target),d=parse(cameras[next].target);
  viewer.cameraOrbit=`${blend(a[0],b[0])}deg ${blend(a[1],b[1])}deg ${blend(a[2],b[2])}m`;
  viewer.cameraTarget=`${blend(c[0],d[0])}m ${blend(c[1],d[1])}m ${blend(c[2],d[2])}m`;
}
let ticking=false;
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{update();ticking=false});ticking=true}},{passive:true});
addEventListener('resize',update);
document.querySelector('#year').textContent=new Date().getFullYear();
fetch('./assets/personaje.glb',{method:'HEAD'}).then(response=>{if(!response.ok)return;viewer.addEventListener('load',()=>{
  // Encuadres ajustados a personaje.glb. Los controles y accesorios del rig
  // ensanchan la caja general, por lo que aquí se usa la altura del cuerpo.
  cameras=[
    {orbit:'0deg 75deg 2.4m',target:'0m 0.82m 0m'},
    {orbit:'-12deg 77deg 0.95m',target:'0m 1.36m 0m'},
    {orbit:'15deg 78deg 1.05m',target:'0m 0.38m 0m'}
  ];
  stage.classList.add('has-model');
  if(reduced){viewer.cameraOrbit=cameras[0].orbit;viewer.cameraTarget=cameras[0].target;}
  update();
},{once:true});viewer.src='./assets/personaje.glb'}).catch(()=>{});
update();
