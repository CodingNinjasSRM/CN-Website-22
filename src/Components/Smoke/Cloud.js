import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import cloudImg from "./assets/smoke.png";
const SmokeBackground = () => {
    const containerRef = useRef();

    useEffect(() => {
        let scene, camera, renderer;
        const container = containerRef.current;

        // Set up the Three.js scene
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Create a custom 3D smoke geometry
        const smokeTexture = new THREE.TextureLoader().load(cloudImg);
        const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x622E0C, map: smokeTexture, transparent: true });
        const smokeGeo = new THREE.PlaneBufferGeometry(10, 10);

        // Create multiple smoke particles
        const numParticles = 5;
        for (let i = 0; i < numParticles; i++) {
            const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            particle.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5);
            scene.add(particle);
        }

        // Set up the lighting
        const ambientLight = new THREE.AmbientLight(0x622E0C);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x622E0C);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);

        // Function to animate the smoke particles
        const animate = () => {
            requestAnimationFrame(animate);
            scene.children.forEach((particle) => {
                // Rotate the particle around its own axis
                // particle.rotation.y += 0.005;

                particle.position.y += Math.random() * 0.01;

                // Reset the particle's position when it goes too far away from the camera
                if (particle.position.y > 5) {
                    particle.position.y = -Math.random() * 2;
                }
            });
            renderer.render(scene, camera);
        };

        animate();

        // Clean up on unmount
        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default SmokeBackground;
