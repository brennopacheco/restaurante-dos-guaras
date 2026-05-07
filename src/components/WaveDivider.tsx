interface WaveDividerProps {
  fill: string;
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ fill, flip = false, className = "" }: WaveDividerProps) => (
  <div
    className={`absolute bottom-0 left-0 w-full leading-none pointer-events-none ${className}`}
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className="w-full h-12 md:h-16"
    >
      <path
        d="M0,35 C320,70 620,0 900,40 C1100,65 1280,10 1440,35 L1440,70 L0,70 Z"
        style={{ fill }}
      />
    </svg>
  </div>
);

export default WaveDivider;
