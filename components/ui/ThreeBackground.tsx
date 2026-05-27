"use client";

import { useEffect, useRef } from "react";

const PALETTES: Record<string, [number[], number[], number[], number[]]> = {
  I:   [[0.982, 0.984, 1.000], [0.310, 0.275, 0.898], [0.659, 0.333, 0.969], [0.576, 0.772, 0.992]],
  II:  [[0.962, 0.953, 1.000], [0.545, 0.361, 0.965], [0.753, 0.518, 0.988], [0.647, 0.706, 0.988]],
  III: [[0.980, 0.961, 1.000], [0.659, 0.333, 0.969], [0.753, 0.518, 0.988], [0.506, 0.549, 0.973]],
  IV:  [[0.929, 0.914, 0.996], [0.486, 0.227, 0.929], [0.388, 0.400, 0.945], [0.655, 0.545, 0.980]],
  V:   [[0.933, 0.949, 1.000], [0.310, 0.275, 0.898], [0.506, 0.549, 0.973], [0.655, 0.545, 0.980]],
  VI:  [[0.961, 0.953, 1.000], [0.545, 0.361, 0.965], [0.659, 0.333, 0.969], [0.576, 0.772, 0.992]],
  VII: [[0.992, 0.988, 1.000], [0.753, 0.518, 0.988], [0.655, 0.545, 0.980], [0.576, 0.772, 0.992]],
};

const VERT = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uMouseEase;
uniform vec2 uMouseVel;
uniform vec2 uResolution;
uniform vec3 uBase;
uniform vec3 uColA;
uniform vec3 uColB;
uniform vec3 uColC;
uniform float uIntensity;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
}
float fbm(vec2 p){
  float v=0.0; float a=0.55;
  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.05+vec2(1.3,1.7); a*=0.55; }
  return v;
}
float warpFbm(vec2 p, float t){
  vec2 q=vec2(fbm(p+vec2(0.0,t*0.05)),fbm(p+vec2(5.2,1.3)+vec2(t*0.04,0.0)));
  vec2 r=vec2(fbm(p+4.0*q+vec2(1.7,9.2)+t*0.07),fbm(p+4.0*q+vec2(8.3,2.8)+t*0.06));
  return fbm(p+4.0*r);
}

void main(){
  vec2 uv=vUv; float aspect=uResolution.x/uResolution.y;
  vec2 p=uv; p.x*=aspect;
  vec2 m=uMouseEase; m.x*=aspect;
  vec2 toMouse=p-m; float d=length(toMouse);
  float swirlAmt=exp(-d*2.6)*0.55;
  float ang=swirlAmt*1.6; float s=sin(ang),c=cos(ang);
  vec2 pp=m+mat2(c,-s,s,c)*(p-m);
  pp+=uMouseVel*exp(-d*4.0)*0.6;
  float t=uTime*0.18;
  float n1=warpFbm(pp*1.6+vec2(t*0.5,-t*0.3),uTime);
  float n2=fbm(pp*2.6-vec2(t*0.2,t*0.4));
  float n3=fbm(pp*0.9+vec2(t*0.1,t*0.15));
  vec3 col=uBase;
  col=mix(col,uColC,smoothstep(0.30,0.85,n3)*uIntensity*0.65);
  col=mix(col,uColA,smoothstep(0.42,0.82,n1)*uIntensity*0.85);
  col=mix(col,uColB,smoothstep(0.55,0.95,n2)*uIntensity*0.70);
  float halo=exp(-d*4.5);
  col=mix(col,vec3(0.85,0.78,1.0),halo*0.18);
  float vig=smoothstep(1.25,0.25,length((uv-0.5)*vec2(1.0,1.4)));
  col=mix(col*0.96,col,vig);
  float g=(hash(gl_FragCoord.xy+uTime*60.0)-0.5)*0.025;
  col+=g;
  gl_FragColor=vec4(col,1.0);
}
`;

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let raf: number;
    let renderer: import("three").WebGLRenderer;

    import("three").then((THREE) => {
      const canvas = canvasRef.current!;
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(window.innerWidth, window.innerHeight, false);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const start = PALETTES.I;
      const uniforms = {
        uTime:       { value: 0 },
        uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
        uMouseEase:  { value: new THREE.Vector2(0.5, 0.5) },
        uMouseVel:   { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uBase:       { value: new THREE.Vector3(...start[0]) },
        uColA:       { value: new THREE.Vector3(...start[1]) },
        uColB:       { value: new THREE.Vector3(...start[2]) },
        uColC:       { value: new THREE.Vector3(...start[3]) },
        uIntensity:  { value: 0.55 },
      };

      const material = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);

      let targetMouse = { x: 0.5, y: 0.5 };
      const cur  = { base: [...start[0]], a: [...start[1]], b: [...start[2]], c: [...start[3]] };
      const tgt  = { base: [...start[0]], a: [...start[1]], b: [...start[2]], c: [...start[3]] };

      const onMove = (e: PointerEvent) => {
        targetMouse.x = e.clientX / window.innerWidth;
        targetMouse.y = 1.0 - e.clientY / window.innerHeight;
      };
      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("resize", onResize);

      (window as unknown as Record<string, unknown>).__paintedBg = {
        setChapter(key: string) {
          const p = PALETTES[key]; if (!p) return;
          tgt.base = [...p[0]]; tgt.a = [...p[1]]; tgt.b = [...p[2]]; tgt.c = [...p[3]];
        },
        setIntensity(v: number) { uniforms.uIntensity.value = v; },
      };

      const clock = new THREE.Clock();
      const me = uniforms.uMouseEase.value;

      function tick() {
        uniforms.uTime.value = clock.getElapsedTime();
        const ease = 0.07;
        const vx = (targetMouse.x - me.x) * ease;
        const vy = (targetMouse.y - me.y) * ease;
        me.x += vx; me.y += vy;
        uniforms.uMouse.value.set(targetMouse.x, targetMouse.y);
        uniforms.uMouseVel.value.set(vx * 2.5, vy * 2.5);
        const pe = 0.04;
        for (let i = 0; i < 3; i++) {
          cur.base[i] += (tgt.base[i] - cur.base[i]) * pe;
          cur.a[i]    += (tgt.a[i]    - cur.a[i])    * pe;
          cur.b[i]    += (tgt.b[i]    - cur.b[i])    * pe;
          cur.c[i]    += (tgt.c[i]    - cur.c[i])    * pe;
        }
        uniforms.uBase.value.set(cur.base[0], cur.base[1], cur.base[2]);
        uniforms.uColA.value.set(cur.a[0], cur.a[1], cur.a[2]);
        uniforms.uColB.value.set(cur.b[0], cur.b[1], cur.b[2]);
        uniforms.uColC.value.set(cur.c[0], cur.c[1], cur.c[2]);
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      }
      tick();

      return () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(raf);
        renderer.dispose();
      };
    });

    return () => { if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      aria-hidden="true"
    />
  );
}
