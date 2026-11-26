export default function HeroVideo() {
  return (
    <div className="hero-film relative mx-auto h-full w-fit">
      <div aria-hidden="true" className="hero-film__pool" />

      <img
        src="/assets/Confident Portrait in Black and White.png"
        alt="Duit Gite"
        className="hero-film__media block h-full w-auto max-w-none select-none object-contain"
        draggable={false}
      />
    </div>
  );
}