import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SolarSystem() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 15, 25);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const sunLight = new THREE.PointLight(0xffaa00, 2, 100);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Sun
    const sunGeom = new THREE.SphereGeometry(3, 64, 64);
    const sunMat = new THREE.MeshStandardMaterial({
      color: 0xffcc33,
      emissive: 0xffaa00,
      emissiveIntensity: 0.5,
    });
    const sun = new THREE.Mesh(sunGeom, sunMat);
    scene.add(sun);

    // Planet
    const planetGeom = new THREE.SphereGeometry(1.2, 64, 64);
    const planetMat = new THREE.MeshPhysicalMaterial({
      color: 0x0077ff,
      roughness: 0.3,
      metalness: 0.2,
      clearcoat: 1.0,
    });
    const planet = new THREE.Mesh(planetGeom, planetMat);
    scene.add(planet);

    // Orbit
    const orbitRadius = 12;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius);
    const points = orbitCurve.getPoints(100);
    const orbitGeom = new THREE.BufferGeometry().setFromPoints(
      points.map((p) => new THREE.Vector3(p.x, 0, p.y))
    );
    const orbitMat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 });
    const orbitLine = new THREE.Line(orbitGeom, orbitMat);
    scene.add(orbitLine);

    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      angle += 0.005;
      planet.position.x = Math.cos(angle) * orbitRadius;
      planet.position.z = Math.sin(angle) * orbitRadius;
      planet.rotation.y += 0.02;
      sun.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}