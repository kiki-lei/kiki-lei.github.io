

$(document).ready(function () {

  var _height = $(window).height()
  $('#centerbg').css({
    'height': _height
  })

  $(window).resize(function () {
    var _height = $(window).height()
    $('#centerbg').css({
      'height': _height
    })
  })

  var bgindex = Math.floor(Math.random() * bg.length)
  $('.centerbg').css('background-image', 'url("' + bg[bgindex] + '")')

  $('#bg-next').click(function () {
    nextBG()
  })
  $('#bg-pre').click(function () {
    preBG()
  })

  goTop()

  scrollBar()

})


function nextBG () {
  bgindex = bgindex + 1
  console.log(bg[Math.abs(bgindex % bg.length)])
  $('.centerbg').css('background-image', 'url("' + bg[Math.abs(bgindex % bg.length)] + '")')
}

function preBG () {
  bgindex = bgindex - 1
  console.log(bg[Math.abs(bgindex % bg.length)])
  $('.centerbg').css('background-image', 'url("' + bg[Math.abs(bgindex % bg.length)] + '")')
}

function goTop () {
  var offset = 100,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top')
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $back_to_top.addClass('cd-is-visible')
      $('.changeSkin-gear').css('bottom', '0')
      if ($(window).height() > 950) {
        $('.cd-top.cd-is-visible').css('top', '0')
      } else {
        $('.cd-top.cd-is-visible').css('top', ($(window).height() - 950) + 'px')
      }
      $('#header-inner').addClass('show-nav')
    } else {
      $('.changeSkin-gear').css('bottom', '-999px')
      $('.cd-top.cd-is-visible').css('top', '-900px')
      $back_to_top.removeClass('cd-is-visible cd-fade-out')
      $('#header-inner').removeClass('show-nav')
    }
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out')
    }
  })
  $back_to_top.on('click', function (event) {
    event.preventDefault()
    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration)
  })
}

function scrollBar () {
  if (document.body.clientWidth > 860) {
    $(window).scroll(function () {
      var s = $(window).scrollTop()
      var a = $(document).height()
      var b = $(window).height()
      var result = parseInt(s / (a - b) * 100)
      $('#bar').css('width', result + '%')
      if (false) {
        if (result >= 0 && result <= 19) {
          $('#bar').css('background', '#cccccc')
        }
        if (result >= 20 && result <= 39) { $('#bar').css('background', '#50bcb6') }
        if (result >= 40 && result <= 59) {
          $('#bar').css('background', '#85c440')
        }
        if (result >= 60 && result <= 79) {
          $('#bar').css('background', '#f2b63c')
        }
        if (result >= 80 && result <= 99) { $('#bar').css('background', '#FF0000') }
        if (result == 100) {
          $('#bar').css('background', '#5aaadb')
        }
      } else {
        $('#bar').css('background', 'orange')
      }
      $('.toc-container').css('height', $('.site-content').outerHeight())
      $('.skin-menu').removeClass('show')
    })
  }
}