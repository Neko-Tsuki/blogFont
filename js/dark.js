function BackTOP() {
  $("#btn").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $("#btn").fadeIn(200);
      } else {
        $("#btn").fadeOut(200);
      }
    });
    $("#btn").click(function () {
      $('body,html').animate({ scrollTop: 0 }, 500);
      return false;
    });
    $("#say").click(function () {
      $('body,html').animate({ scrollTop: $('html, body').get(0).scrollHeight }, 500);
      return false;
    });
  });
}

$('#readmode').click(function () {
  $('body').toggleClass('read-mode');
});

function SiderMenu() {
  $('#main-container').toggleClass('open');
  $('.iconflat').css({ width: '50px', height: '50px' });
  $('.openNav').css('height', '50px');
  $('#main-container,#mo-nav,.openNav').toggleClass('open');
}

/* === Cuteen 夜间动画切换 === */
function switchNightMode() {
  if ($('.Cuteen_DarkSky').length) return; // 防止多次触发重叠动画

  const sky = $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>');
  $('body').append(sky);

  setTimeout(() => {
    if (volantis.dark.mode === 'dark') {
      $('html').addClass('DarkMode');
      setModeIcon('#icon-sun');
    } else {
      $('html').removeClass('DarkMode');
      setModeIcon('#icon-_moon');
    }

    // 2秒后淡出
    setTimeout(() => {
      $('.Cuteen_DarkSky').fadeOut(1000, function () {
        $(this).remove();
      });
    }, 1500);
  }, 100);
}

/* === 图标兼容设置 === */
function setModeIcon(iconRef) {
  const icon = document.getElementById('modeicon');
  if (icon) icon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconRef);
}

/* === 夜间状态检查 === */
function checkNightMode() {
  const html = $('html');
  if (html.hasClass('n-f')) {
    html.removeClass('day').addClass('DarkMode');
    setModeIcon('#icon-sun');
    return;
  }
  if (html.hasClass('d-f')) {
    html.removeClass('DarkMode').addClass('day');
    setModeIcon('#icon-_moon');
    return;
  }
  if (volantis.dark.mode === 'dark') {
    html.addClass('DarkMode');
    setModeIcon('#icon-sun');
  } else {
    html.removeClass('DarkMode');
    setModeIcon('#icon-_moon');
  }
}

BackTOP();
volantis.dark.push(switchNightMode);
