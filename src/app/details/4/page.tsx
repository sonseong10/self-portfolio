"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      80,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 10, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1, 0);
    controls.update();

    const clock = new THREE.Clock();
    const models: THREE.Object3D[] = [];

    type Vec3 = [number, number, number];

    // 모델 위치, 크기, 회전 각도
    const modelConfigs: { position: Vec3; scale: number; rotation: Vec3 }[] = [
      { position: [-2, -2, -1], scale: 1.3, rotation: [0.3, 0.5, 0.3] },
      { position: [1.5, 0.8, -1.8], scale: 1, rotation: [0.25, -3, 0.3] },
      { position: [0, 1.1, -3.5], scale: 0.7, rotation: [-0.12, 0.5, 1] },
    ];

    const loader = new GLTFLoader();
    loader.load(
      "/images/models/carrot.glb",
      (gltf) => {
        modelConfigs.forEach((config) => {
          const model = gltf.scene.clone();

          model.position.set(...config.position);
          model.scale.setScalar(config.scale);
          model.rotation.set(...config.rotation);

          models.push(model);
          scene.add(model);
        });
      },
      undefined,
      (error) => {
        console.error("GLB 로딩 실패:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      models.forEach((model, i) => {
        model.position.y =
          modelConfigs[i].position[1] + 0.1 * Math.sin(elapsed + i);
      });

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "24px",
        overflow: "hidden",
        background: "linear-gradient(to top, #80d0f0, #e0f7ff)",
        position: "relative",
      }}
    />
  );
}
