"use client";


import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";
import {
  contents,
  displayText,
  downloadBtn,
  layout,
  linkGroup,
  navigationLink,
  threeDContainer,
} from "../1/work.css";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import Link from "next/link";

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 10, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1, 0);
    controls.update();

    // Clock & Animation targets
    const clock = new THREE.Clock();
    const models: THREE.Object3D[] = [];

    type Vec3 = [number, number, number];
    const modelConfigs: { position: Vec3; scale: number; rotation: Vec3 }[] = [
      { position: [-2, -2, -1], scale: 1.3, rotation: [0.3, 0.5, 0.3] },
      { position: [1.5, 0.8, -1.8], scale: 1, rotation: [0.25, -3, 0.3] },
      { position: [0, 1.1, -3.5], scale: 0.7, rotation: [-0.12, 0.5, 1] },
    ];

    // Load GLTF
    const loader = new GLTFLoader();
    loader.load(
      "/images/models/carrot.glb",
      (gltf) => {
        modelConfigs.forEach((config) => {
          const model = clone(gltf.scene); // deep clone
          model.position.set(...config.position);
          model.scale.setScalar(config.scale);
          model.rotation.set(...config.rotation);
          models.push(model);
          scene.add(model);
        });
        setIsLoaded(true);
      },
      undefined,
      (error) => {
        console.error("GLB 로딩 실패:", error);
      }
    );

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      models.forEach((model, i) => {
        model.position.y =
          modelConfigs[i].position[1] + 0.1 * Math.sin(elapsed + i);
      });
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className={`${layout} col`}>
      <div ref={mountRef} className={threeDContainer}>
        {!isLoaded && <div className={displayText}>로딩 중</div>}
        <span className={displayText}>이런거 만들어요.</span>
      </div>

      <div className={contents}>
        <h2>Three.js 학습</h2>
        <p>
          최근 웹에서는 정보를 전달하는 데 그치지 않고, 시각적 흥미를 유도하는
          3D 요소의 활용이 늘어나고 있습니다. 이에 따라 Blender를 활용한 3D
          모델링을 취미로 익히고 있으며, 직접 제작한 모델을 Three.js로
          렌더링하는 작업도 병행하고 있습니다.
        </p>
        <p>
          3D 모델은 사용자 경험을 높일 수 있는 도구지만, 성능에 민감한
          요소이기도 합니다. GLTF 경량화, 애니메이션 최적화 등 렌더링 성능
          개선에 대한 고민도 함께하고 있습니다.
        </p>
        <p>해당 3D 모델은 아래에서 다운로드하실 수 있습니다.</p>
        <a
          href="/images/models/carrot.glb"
          download="carrot.glb"
          className={downloadBtn}
        >
          3D 모델 다운로드
        </a>
      </div>
      <footer>
        <div className={linkGroup}>
          <Link href={"/details/3"} className={navigationLink}>
            이전글
          </Link>
          <Link href={"/details/5"} className={navigationLink}>
            다음글
          </Link>
        </div>
      </footer>
    </div>
  );
}
