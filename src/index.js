import THREE from "./js/three"
let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
//camera.position.x = 0.1;




let renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF, 1.0);

document.body.appendChild(renderer.domElement);
let geometry2 = new THREE.CubeGeometry(2,1,5);
let material2 = new THREE.MeshBasicMaterial({color: 0xeee200});
let cube = new THREE.Mesh(geometry2, material2);
scene.add(cube);
var geometry = new THREE.Geometry();
var material = new THREE.LineBasicMaterial( { vertexColors: true } );
var color1 = new THREE.Color( 0xeee200 )
console.log(color1)

// 线的材质可以由2点的颜色决定
var p1 = new THREE.Vector3( -100, 0, 100 );
var p2 = new THREE.Vector3(  100, 2, -100 );
geometry.vertices.push(p1);
geometry.vertices.push(p2);
geometry.colors.push( color1, color1 );

var line = new THREE.Line( geometry, material, THREE.LineSegments );
scene.add(line);
camera.position.z = 5;
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    //cube.rotation.y += 0.042;
    // line.rotation.y+=0.1;
    scene.rotation.x=0.1
    renderer.render(scene, camera);
}
render();
console.log(1)