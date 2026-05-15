import { motion } from "framer-motion";
import heroVideo from "@/assets/hero.webm";
import logo from "@/assets/Imagem9-edit-removebg-preview.png";
import WaveDivider from "@/components/WaveDivider";

const ShimmerParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full bg-amber-300/50"
    style={{ left: `${x}%`, top: `${y}%`, width: 5, height: 5 }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0.4, 1.8, 0.4],
      y: [0, -45, -90],
    }}
    transition={{
      duration: 7,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: 20 + Math.random() * 55,
  }));

  return (
    <section className="relative h-screen w-full overflow-x-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Warm daylight overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-700/35 via-transparent to-stone-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
      </div>

      {/* Shimmer particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <ShimmerParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src={logo}
            alt="Restaurante dos Guarás"
            className="h-40 md:h-52 lg:h-60 mx-auto mb-8 brightness-0 invert opacity-90"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
          />

          <motion.p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Gastronomia à beira do mar
          </motion.p>

          <motion.div
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          />

          <motion.p
            className="font-body text-cream/70 text-lg md:text-xl font-light max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Sabor, natureza e boas memórias
          </motion.p>

          <motion.p
            className="font-body text-cream/50 text-xs md:text-sm tracking-[0.25em] uppercase mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            Ter – Dom &nbsp;·&nbsp; 08h às 18h
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>

      <WaveDivider fill="hsl(38, 25%, 96%)" className="z-20 !-bottom-6 md:!-bottom-8" />
    </section>
  );
};

export default HeroSection;
