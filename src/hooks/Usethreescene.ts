import { useEffect, type RefObject } from 'react'
import * as THREE from 'three'
import { TouchTexture } from '../lib/TouchTexture'
import { type Theme } from '../context/ThemeContext'

const THEMES = {
  emerald: {
    COLOR1:         [0.020, 0.420, 0.235] as [number, number, number], // #056038
    COLOR2:         [0.02,  0.02,  0.02 ] as [number, number, number], // black
    COLOR3:         [0.020, 0.420, 0.235] as [number, number, number],
    COLOR4:         [0.02,  0.02,  0.02  ] as [number, number, number],
    COLOR5:         [0.020, 0.420, 0.235] as [number, number, number],
    COLOR6:         [0.02,  0.02,  0.02 ] as [number, number, number],
    DARK_NAVY:      [0.01,  0.06,  0.03 ] as [number, number, number], // shadow base color
    BACKGROUND:     0x020c06, // scene background
    GRADIENT_SIZE:  0.45,
    GRADIENT_COUNT: 12.0,
    SPEED:          1.5,
    COLOR1_WEIGHT:  1.0,
    COLOR2_WEIGHT:  1.8,
  },
  ice: {
    COLOR1:         [0.094, 0.459, 0.718] as [number, number, number], // #1875B7
    COLOR2:         [0.008, 0.027, 0.082] as [number, number, number], // deep ocean
    COLOR3:         [0.094, 0.459, 0.718] as [number, number, number],
    COLOR4:         [0.008, 0.027, 0.082] as [number, number, number],
    COLOR5:         [0.094, 0.459, 0.718] as [number, number, number],
    COLOR6:         [0.008, 0.027, 0.082] as [number, number, number],
    DARK_NAVY:      [0.008, 0.027, 0.082] as [number, number, number], // shadow base color
    BACKGROUND:     0x010810, // scene background
    GRADIENT_SIZE:  0.45,
    GRADIENT_COUNT: 12.0,
    SPEED:          1.5,
    COLOR1_WEIGHT:  0.5,
    COLOR2_WEIGHT:  1.8,
  },
}

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vec3 pos = position.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
  }
`

const FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6;
  uniform float uSpeed, uIntensity;
  uniform sampler2D uTouchTexture;
  uniform float uGrainIntensity, uGradientSize, uGradientCount, uColor1Weight, uColor2Weight;
  uniform vec3 uDarkNavy;
  varying vec2 vUv;

  float grain(vec2 uv, float t) {
    vec2 g = uv * uResolution * 0.5;
    return fract(sin(dot(g + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
  }

  vec3 getGrad(vec2 uv, float t) {
    float gr = uGradientSize;
    vec2 c1  = vec2(0.5 + sin(t*uSpeed*0.40)*0.40, 0.5 + cos(t*uSpeed*0.50)*0.40);
    vec2 c2  = vec2(0.5 + cos(t*uSpeed*0.60)*0.50, 0.5 + sin(t*uSpeed*0.45)*0.50);
    vec2 c3  = vec2(0.5 + sin(t*uSpeed*0.35)*0.45, 0.5 + cos(t*uSpeed*0.55)*0.45);
    vec2 c4  = vec2(0.5 + cos(t*uSpeed*0.50)*0.40, 0.5 + sin(t*uSpeed*0.40)*0.40);
    vec2 c5  = vec2(0.5 + sin(t*uSpeed*0.70)*0.35, 0.5 + cos(t*uSpeed*0.60)*0.35);
    vec2 c6  = vec2(0.5 + cos(t*uSpeed*0.45)*0.50, 0.5 + sin(t*uSpeed*0.65)*0.50);
    vec2 c7  = vec2(0.5 + sin(t*uSpeed*0.55)*0.38, 0.5 + cos(t*uSpeed*0.48)*0.42);
    vec2 c8  = vec2(0.5 + cos(t*uSpeed*0.65)*0.36, 0.5 + sin(t*uSpeed*0.52)*0.44);
    vec2 c9  = vec2(0.5 + sin(t*uSpeed*0.42)*0.41, 0.5 + cos(t*uSpeed*0.58)*0.39);
    vec2 c10 = vec2(0.5 + cos(t*uSpeed*0.48)*0.37, 0.5 + sin(t*uSpeed*0.62)*0.43);

    float i1  = 1.0 - smoothstep(0.0, gr, length(uv - c1));
    float i2  = 1.0 - smoothstep(0.0, gr, length(uv - c2));
    float i3  = 1.0 - smoothstep(0.0, gr, length(uv - c3));
    float i4  = 1.0 - smoothstep(0.0, gr, length(uv - c4));
    float i5  = 1.0 - smoothstep(0.0, gr, length(uv - c5));
    float i6  = 1.0 - smoothstep(0.0, gr, length(uv - c6));
    float i7  = 1.0 - smoothstep(0.0, gr, length(uv - c7));
    float i8  = 1.0 - smoothstep(0.0, gr, length(uv - c8));
    float i9  = 1.0 - smoothstep(0.0, gr, length(uv - c9));
    float i10 = 1.0 - smoothstep(0.0, gr, length(uv - c10));

    vec2 rv1 = uv - 0.5;
    float a1 = t * uSpeed * 0.15;
    rv1 = vec2(rv1.x*cos(a1) - rv1.y*sin(a1), rv1.x*sin(a1) + rv1.y*cos(a1)) + 0.5;
    vec2 rv2 = uv - 0.5;
    float a2 = -t * uSpeed * 0.12;
    rv2 = vec2(rv2.x*cos(a2) - rv2.y*sin(a2), rv2.x*sin(a2) + rv2.y*cos(a2)) + 0.5;
    float ri1 = 1.0 - smoothstep(0.0, 0.8, length(rv1 - 0.5));
    float ri2 = 1.0 - smoothstep(0.0, 0.8, length(rv2 - 0.5));

    vec3 col = vec3(0.0);
    col += uColor1 * i1  * (0.55 + 0.45*sin(t*uSpeed))       * uColor1Weight;
    col += uColor2 * i2  * (0.55 + 0.45*cos(t*uSpeed*1.2))   * uColor2Weight;
    col += uColor3 * i3  * (0.55 + 0.45*sin(t*uSpeed*0.8))   * uColor1Weight;
    col += uColor4 * i4  * (0.55 + 0.45*cos(t*uSpeed*1.3))   * uColor2Weight;
    col += uColor5 * i5  * (0.55 + 0.45*sin(t*uSpeed*1.1))   * uColor1Weight;
    col += uColor6 * i6  * (0.55 + 0.45*cos(t*uSpeed*0.9))   * uColor2Weight;
    if (uGradientCount > 6.0) {
      col += uColor1 * i7  * (0.55 + 0.45*sin(t*uSpeed*1.4)) * uColor1Weight;
      col += uColor2 * i8  * (0.55 + 0.45*cos(t*uSpeed*1.5)) * uColor2Weight;
      col += uColor3 * i9  * (0.55 + 0.45*sin(t*uSpeed*1.6)) * uColor1Weight;
      col += uColor4 * i10 * (0.55 + 0.45*cos(t*uSpeed*1.7)) * uColor2Weight;
    }
    col += mix(uColor1, uColor3, ri1) * 0.45 * uColor1Weight;
    col += mix(uColor2, uColor4, ri2) * 0.40 * uColor2Weight;

    col = clamp(col, vec3(0.0), vec3(1.0)) * uIntensity;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(lum), col, 1.35);
    col = pow(col, vec3(0.92));
    float b1 = length(col);
    col = mix(uDarkNavy, col, max(b1 * 1.2, 0.15));
    float mb = 1.0; float br = length(col);
    if (br > mb) col = col * (mb / br);
    return col;
  }

  void main() {
    vec2 uv = vUv;
    vec4 tt = texture2D(uTouchTexture, uv);
    float vx = -(tt.r * 2.0 - 1.0);
    float vy = -(tt.g * 2.0 - 1.0);
    float intensity = tt.b;
    uv.x += vx * 0.8 * intensity;
    uv.y += vy * 0.8 * intensity;
    float dist   = length(uv - vec2(0.5));
    float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * intensity;
    float wave   = sin(dist * 15.0 - uTime * 2.0) * 0.03 * intensity;
    uv += vec2(ripple + wave);
    vec3 col = getGrad(uv, uTime);
    col += grain(uv, uTime) * uGrainIntensity;
    float ts = uTime * 0.5;
    col.r += sin(ts)        * 0.02;
    col.g += cos(ts * 1.4)  * 0.02;
    col.b += sin(ts * 1.2)  * 0.02;
    float b2 = length(col);
    col = mix(uDarkNavy, col, max(b2 * 1.2, 0.15));
    col = clamp(col, vec3(0.0), vec3(1.0));
    float mb = 1.0; float br = length(col);
    if (br > mb) col = col * (mb / br);
    gl_FragColor = vec4(col, 1.0);
  }
`

function getViewSize(camera: THREE.PerspectiveCamera) {
  const fov = (camera.fov * Math.PI) / 180
  const h = Math.abs(camera.position.z * Math.tan(fov / 2) * 2)
  return { width: h * camera.aspect, height: h }
}

export function useThreeScene(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  theme: Theme
) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
    camera.position.z = 50

    const scene = new THREE.Scene()
    const cfg = THEMES[theme]
    scene.background = new THREE.Color(cfg.BACKGROUND)

    const clock = new THREE.Clock()
    const touchTexture = new TouchTexture()

    const vs = getViewSize(camera)
    const uniforms: Record<string, THREE.IUniform> = {
      uTime:           { value: 0 },
      uResolution:     { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uColor1:         { value: new THREE.Vector3(...cfg.COLOR1) },
      uColor2:         { value: new THREE.Vector3(...cfg.COLOR2) },
      uColor3:         { value: new THREE.Vector3(...cfg.COLOR3) },
      uColor4:         { value: new THREE.Vector3(...cfg.COLOR4) },
      uColor5:         { value: new THREE.Vector3(...cfg.COLOR5) },
      uColor6:         { value: new THREE.Vector3(...cfg.COLOR6) },
      uSpeed:          { value: cfg.SPEED },
      uIntensity:      { value: 1.8 },
      uTouchTexture:   { value: touchTexture.texture },
      uGrainIntensity: { value: 0.06 },
      uDarkNavy:       { value: new THREE.Vector3(...cfg.DARK_NAVY) },
      uGradientSize:   { value: cfg.GRADIENT_SIZE },
      uGradientCount:  { value: cfg.GRADIENT_COUNT },
      uColor1Weight:   { value: cfg.COLOR1_WEIGHT },
      uColor2Weight:   { value: cfg.COLOR2_WEIGHT },
    }

    const geo = new THREE.PlaneGeometry(vs.width, vs.height, 1, 1)
    const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: VERTEX_SHADER, fragmentShader: FRAGMENT_SHADER })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    let rafId: number
    function tick() {
      const delta = Math.min(clock.getDelta(), 0.1)
      uniforms.uTime.value += delta
      touchTexture.update()
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(tick)
    }
    tick()

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
      const vs2 = getViewSize(camera)
      mesh.geometry.dispose()
      mesh.geometry = new THREE.PlaneGeometry(vs2.width, vs2.height, 1, 1)
    }

    function onMouseMove(e: MouseEvent) {
      touchTexture.addTouch({ x: e.clientX / window.innerWidth, y: 1 - e.clientY / window.innerHeight })
    }

    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0]
      touchTexture.addTouch({ x: t.clientX / window.innerWidth, y: 1 - t.clientY / window.innerHeight })
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [canvasRef, theme]) // re-run when theme changes, rebuilding the scene with new colors
}