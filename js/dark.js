// === Volantis v5 暗黑模式切换动画 (FontAwesome版) ===
// 依赖 FontAwesome 图标库

function DarkModeTransition() {
  const isDark = document.documentElement.classList.contains('DarkMode');
  const iconClass = isDark ? 'fa-sun sun' : 'fa-moon moon';

  const $sky = $(`
    <div class="Cuteen_DarkSky">
      <i class="fa-solid ${iconClass} Cuteen_DarkIcon"></i>
    </div>
  `);

  $('body').append($sky);

  // 触发进入动画
  setTimeout(() => $sky.addClass('show'), 50);

  // 动画完成后移除
  setTimeout(() => {
    $sky.fadeOut(800, function () {
      $(this).remove();
    });
  }, 1500);
}

// 将动画注册到 Volantis 的 darkmode 切换钩子
if (window.volantis && volantis.dark && typeof volantis.dark.push === 'function') {
  volantis.dark.push(DarkModeTransition);
}
