import { useEffect, useRef } from "react";

export default function DarkVeil({
  hueShift = 183,
  noiseIntensity = 0.12,
  scanlineIntensity = 0.08,
  speed = 1,
  scanlineFrequency = 0, // 0 = auto
  warpAmount = 0,        // mantenho compatível, mas bem leve
  resolutionScale = 1.2, // não precisa alto
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    // Noise em baixa resolução (não full screen)
    const noiseCanvas = document.createElement("canvas");
    const nctx = noiseCanvas.getContext("2d", { alpha: true });
    if (!nctx) return;

    // Ajuste do noise: quanto maior, mais pesado. 220~320 é ótimo.
    const NOISE_SIZE = 260;
    noiseCanvas.width = NOISE_SIZE;
    noiseCanvas.height = NOISE_SIZE;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr * resolutionScale);
      canvas.height = Math.floor(h * dpr * resolutionScale);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.imageSmoothingEnabled = false;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let frame = 0;

    const renderNoiseTile = () => {
      // Gera um tile de noise pequeno
      const img = nctx.createImageData(NOISE_SIZE, NOISE_SIZE);
      const data = img.data;
      const a = Math.floor(255 * noiseIntensity);

      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = a;
      }
      nctx.putImageData(img, 0, 0);
    };

    const draw = () => {
  t += 0.016 * speed;
  frame++;

  const w = canvas.width;
  const h = canvas.height;

  // Atualiza noise a cada 2 frames (reduz custo)
  if (frame % 2 === 0) renderNoiseTile();

  ctx.clearRect(0, 0, w, h);

  // 1) BASE PRETA
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, w, h);

  // 2) GLOW LARANJA (2 pontos para dar profundidade)
  ctx.globalCompositeOperation = "screen";
  const g1 = ctx.createRadialGradient(w * 0.25, h * 0.20, 0, w * 0.25, h * 0.20, Math.max(w, h) * 0.75);
  g1.addColorStop(0, "rgba(255, 90, 31, 0.22)");
  g1.addColorStop(0.45, "rgba(255, 90, 31, 0.10)");
  g1.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, w, h);

  const g2 = ctx.createRadialGradient(w * 0.85, h * 0.15, 0, w * 0.85, h * 0.15, Math.max(w, h) * 0.65);
  g2.addColorStop(0, "rgba(255, 90, 31, 0.16)");
  g2.addColorStop(0.50, "rgba(255, 90, 31, 0.07)");
  g2.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, w, h);

  // 3) NOISE (laranja levemente “quente”)
  ctx.globalCompositeOperation = "overlay";
  const pattern = ctx.createPattern(noiseCanvas, "repeat");
  if (pattern) {
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, w, h);
  }

  // 4) TINT LARANJA BEM LEVE (amarra o visual)
  ctx.globalCompositeOperation = "soft-light";
  ctx.fillStyle = "rgba(255, 90, 31, 0.08)";
  ctx.fillRect(0, 0, w, h);

  // 5) SCANLINES (discretas)
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = `rgba(255,255,255,${scanlineIntensity})`;

  const gap =
    scanlineFrequency && scanlineFrequency > 0
      ? Math.floor(scanlineFrequency * dpr)
      : Math.max(7, Math.floor(11 * dpr)); // auto

  for (let y = 0; y < h; y += gap) {
    ctx.fillRect(0, y, w, 1);
  }

  // 6) warp opcional (deixe 0 para limpo)
  if (warpAmount > 0) {
    const dx = Math.sin(t * 0.8) * warpAmount * dpr;
    const dy = Math.cos(t * 0.6) * warpAmount * dpr;
    const snap = ctx.getImageData(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    ctx.putImageData(snap, dx, dy);
  }

  rafRef.current = requestAnimationFrame(draw);
};

  }, [
    hueShift,
    noiseIntensity,
    scanlineIntensity,
    speed,
    scanlineFrequency,
    warpAmount,
    resolutionScale,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
