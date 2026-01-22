import DarkVeil from "./DarkVeil";

export default function DarkVeilBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <DarkVeil
        hueShift={20}
        noiseIntensity={0.10}
        scanlineIntensity={0.06}
        speed={1}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1.2}
      />
    </div>
  );
}
