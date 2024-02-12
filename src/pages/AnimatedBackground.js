import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';

const AnimationBackground = () => {
    const containerRef = useRef();
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const windowHalfX = useRef(window.innerWidth / 2);
    const windowHalfY = useRef(window.innerHeight / 2);
    const camera = useRef();
    const scene = useRef();
    const renderer = useRef();
    const stats = useRef();
    const stars = useRef();
    const showStats = false; // Set this to true if you want to show stats

    useEffect(() => {
        init();
        animate();

        function init() {
            const container = containerRef.current;
            container.id = 'animation-background';
            document.body.appendChild(container);
            document.body.style.overflow = 'hidden';

            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;
            const aspectRatio = WIDTH / HEIGHT;
            const fieldOfView = 75;
            const nearPlane = 1;
            const farPlane = 1000;

            camera.current = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
            camera.current.position.z = farPlane / 2;

            scene.current = new THREE.Scene();
            scene.current.fog = new THREE.FogExp2(0x000000, 0.0003);

            starForge();

            renderer.current = webGLSupport()
                ? new THREE.WebGLRenderer({ alpha: true })
                : new THREE.WebGLRenderer();

            renderer.current.setClearColor(0x000011, 1);
            renderer.current.setPixelRatio(window.devicePixelRatio);
            renderer.current.setSize(WIDTH, HEIGHT);
            container.appendChild(renderer.current.domElement);

            if (showStats) {
                stats.current = new Stats();
                stats.current.domElement.style.position = 'absolute';
                stats.current.domElement.style.top = '0px';
                stats.current.domElement.style.right = '0px';
                container.appendChild(stats.current.domElement);
            }

            window.addEventListener('resize', onWindowResize);
            document.addEventListener('mousemove', onMouseMove);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
            if (showStats) stats.current.update();
        }

        function render() {
            camera.current.position.x += (mouseX.current - camera.current.position.x) * 0.005;
            camera.current.position.y += (mouseY.current - camera.current.position.y) * 0.005;
            camera.current.lookAt(scene.current.position);
            renderer.current.render(scene.current, camera.current);
        }

        function webGLSupport() {
            try {
                const canvas = document.createElement('canvas');
                return !!(window.WebGLRenderingContext && (
                    canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
                ));
            } catch (e) {
                return false;
            }
        }

        function onWindowResize() {
            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;
            camera.current.aspect = WIDTH / HEIGHT;
            camera.current.updateProjectionMatrix();
            renderer.current.setSize(WIDTH, HEIGHT);
            windowHalfX.current = WIDTH / 2;
            windowHalfY.current = HEIGHT / 2;
        }

        function starForge() {
            const starQty = 45000;
            const geometry = new THREE.BufferGeometry();
            const vertices = [];

            for (let i = 0; i < starQty; i++) {
                const x = Math.random() * 2000 - 1000;
                const y = Math.random() * 2000 - 1000;
                const z = Math.random() * 2000 - 1000;
                vertices.push(x, y, z);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            const materialOptions = {
                size: 1.0,
                transparent: true,
                opacity: 0.7
            };
            const starStuff = new THREE.PointsMaterial(materialOptions);

            stars.current = new THREE.Points(geometry, starStuff);
            scene.current.add(stars.current);
        }

        function onMouseMove(e) {
            mouseX.current = e.clientX - windowHalfX.current;
            mouseY.current = e.clientY - windowHalfY.current;
        }

        return () => {
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onMouseMove);
            const container = containerRef.current;
            if (container && container.firstChild === renderer.current.domElement) {
                container.removeChild(renderer.current.domElement);
            }
            if (showStats && stats.current) {
                if (container && container.firstChild === stats.current.domElement) {
                    container.removeChild(stats.current.domElement);
                }
            }
        };
    }, []);

    return <div ref={containerRef} />;
};

export default AnimationBackground;
