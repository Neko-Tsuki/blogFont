// === Volantis 暗黑模式切换动画（独立模块） ===
// 上传到 CDN 并在主题 darkmode 模块之后加载

function DarkModeTransition() {
  const $sky = $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>');
  $('body').append($sky);
  setTimeout(() => {
    $sky.fadeOut(1000, function () {
      $(this).remove();
    });
  }, 1500);
}

// Hook 到现有 darkmode 切换逻辑
if (window.volantis && volantis.dark && typeof volantis.dark.push === 'function') {
  volantis.dark.push(DarkModeTransition);
}
