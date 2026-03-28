type WaveDividerProps = {
  topColor: string;
  bottomColor: string;
  variant?: "gentle" | "steep";
  flip?: boolean;
};

export default function WaveDivider({
  topColor,
  bottomColor,
  variant = "gentle",
  flip = false,
}: WaveDividerProps) {
  const gentlePath =
    "M0,64 C320,120 640,0 960,64 C1280,128 1600,20 1920,64 L1920,200 L0,200Z";
  const steepPath =
    "M0,96 C240,160 480,0 720,80 C960,160 1200,20 1440,96 C1680,172 1920,60 1920,96 L1920,200 L0,200Z";

  const path = variant === "steep" ? steepPath : gentlePath;

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0]${flip ? " rotate-180" : ""}`}
      style={{ backgroundColor: topColor }}
    >
      <svg
        viewBox="0 0 1920 200"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={bottomColor} />
      </svg>
    </div>
  );
}
