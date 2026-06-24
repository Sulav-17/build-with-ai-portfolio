export function HeroBackground() {
  return (
    <div className="hero-constellation" aria-hidden="true">
      <div className="hero-constellation__glow hero-constellation__glow--cyan" />
      <div className="hero-constellation__glow hero-constellation__glow--violet" />
      <svg
        className="hero-constellation__map"
        viewBox="0 0 1200 720"
        preserveAspectRatio="none"
      >
        <path
          className="constellation-path constellation-path--one"
          d="M82 460 C220 302 308 384 436 246 C582 88 710 174 846 128 C1000 76 1090 150 1160 96"
        />
        <path
          className="constellation-path constellation-path--two"
          d="M42 210 C182 144 312 206 450 188 C626 166 706 328 856 300 C1012 270 1102 366 1188 336"
        />
        <path
          className="constellation-path constellation-path--three"
          d="M118 628 C286 530 402 604 540 492 C696 366 826 500 1010 430"
        />
        {[
          [82, 460],
          [308, 384],
          [436, 246],
          [710, 174],
          [846, 128],
          [182, 144],
          [626, 166],
          [856, 300],
          [1010, 430],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            className="constellation-node"
            cx={cx}
            cy={cy}
            r="4"
          />
        ))}
      </svg>
      <div className="hero-constellation__grain" />
    </div>
  );
}
