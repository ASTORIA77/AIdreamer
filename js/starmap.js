/* 星图交互：鼠标悬停显示信息卡 */
(function () {
  const tooltip = document.getElementById('star-tooltip');
  if (!tooltip) return;

  const nameEl = tooltip.querySelector('.tooltip-name');
  const descEl = tooltip.querySelector('.tooltip-desc');
  const countEl = tooltip.querySelector('.tooltip-count');

  document.querySelectorAll('.star-node').forEach(node => {
    node.addEventListener('mouseenter', (e) => {
      nameEl.textContent = node.dataset.name || '';
      descEl.textContent = node.dataset.desc || '';
      countEl.textContent = node.dataset.count || '';
      tooltip.classList.add('show');
    });

    node.addEventListener('mousemove', (e) => {
      const x = e.clientX + 16;
      const y = e.clientY + 16;
      // 防止超出右边/下边
      const maxX = window.innerWidth - 300;
      const maxY = window.innerHeight - 120;
      tooltip.style.left = Math.min(x, maxX) + 'px';
      tooltip.style.top = Math.min(y, maxY) + 'px';
    });

    node.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });
  });
})();
