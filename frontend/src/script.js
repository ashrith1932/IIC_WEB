// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// ================= SUN =================
const sunGeometry = new THREE.SphereGeometry(1.5, 64, 64);
const sunMaterial = new THREE.MeshBasicMaterial({
  color: 0xffcc55
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Glow (fake gradient feel)
const glowGeometry = new THREE.SphereGeometry(2.2, 64, 64);
const glowMaterial = new THREE.MeshBasicMaterial({
  color: 0xffaa33,
  transparent: true,
  opacity: 0.25
});
const glow = new THREE.Mesh(glowGeometry, glowMaterial);
scene.add(glow);

// ================= PLANET =================
const planetGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const planetMaterial = new THREE.MeshStandardMaterial({
  color: 0x55aaff
});
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Light
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 0, 0);
scene.add(light);

// ================= ORBIT =================
const orbitRadius = 4;
let orbitAngle = 0;

// Cursor control
window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth; // 0 → 1

  gsap.to(
    { angle: orbitAngle },
    {
      angle: x * Math.PI * 2,
      duration: 0.5,
      ease: "power3.out",
      onUpdate() {
        orbitAngle = this.targets()[0].angle;
      }
    }
  );
});

// ================= ANIMATION =================
function animate() {
  requestAnimationFrame(animate);

  // Planet orbit
  planet.position.x = Math.cos(orbitAngle) * orbitRadius;
  planet.position.z = Math.sin(orbitAngle) * orbitRadius;

  // Planet self rotation
  planet.rotation.y += 0.02;

  // Sun slow rotation
  sun.rotation.y += 0.003;
  glow.rotation.y -= 0.002;

  renderer.render(scene, camera);
}

animate();

// ================= RESIZE =================
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
