/* 星河背景：canvas 绘制缓慢闪烁的星星 */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, stars;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initStars();
  }

  function initStars() {
    const count = Math.floor((W * H) / 8000);
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        baseAlpha: Math.random() * 0.4 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: pickColor()
      });
    }
  }

  function pickColor() {
    const colors = [
      '201, 168, 118',  // 暖驼
      '107, 140, 174',  // 雾蓝
      '168, 189, 209',  // 浅雾蓝
      '221, 201, 168',  // 浅暖驼
      '255, 255, 255'   // 白
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      const alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.15;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + s.color + ',' + Math.max(0.05, alpha) + ')';
      ctx.fill();
      // 大星星加光晕
      if (s.r > 0.9) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + s.color + ',' + (alpha * 0.08) + ')';
        ctx.fill();
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();
