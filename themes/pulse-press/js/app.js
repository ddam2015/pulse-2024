  function g365_select_nav(e) {
    g365_news_nav_a.attr("aria-selected", "false").blur().parent().removeClass("is-active"), e.attr("aria-selected", "true").parent().addClass("is-active")
  }! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function(e) {
    "use strict";
    var i = window.Slick || {};
    (i = function() {
      var i = 0;
      return function(t, o) {
        var s, n = this;
        n.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(t),
          appendDots: e(t),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(i, t) {
            return e('<button type="button" />').text(t + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = e(t).data("slick") || {}, n.options = e.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
      }
    }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, i.prototype.addSlide = i.prototype.slickAdd = function(i, t, o) {
      var s = this;
      if ("boolean" == typeof t) o = t, t = null;
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? e(i).appendTo(s.$slideTrack) : o ? e(i).insertBefore(s.$slides.eq(t)) : e(i).insertAfter(s.$slides.eq(t)) : !0 === o ? e(i).prependTo(s.$slideTrack) : e(i).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(i, t) {
        e(t).attr("data-slick-index", i)
      }), s.$slidesCache = s.$slides, s.reinit()
    }, i.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
          height: i
        }, e.options.speed)
      }
    }, i.prototype.animateSlide = function(i, t) {
      var o = {},
        s = this;
      s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (i = -i), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
        left: i
      }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
        top: i
      }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), e({
        animStart: s.currentLeft
      }).animate({
        animStart: i
      }, {
        duration: s.options.speed,
        easing: s.options.easing,
        step: function(e) {
          e = Math.ceil(e), !1 === s.options.vertical ? (o[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(o))
        },
        complete: function() {
          t && t.call()
        }
      })) : (s.applyTransition(), i = Math.ceil(i), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + i + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + i + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
        s.disableTransition(), t.call()
      }, s.options.speed))
    }, i.prototype.getNavTarget = function() {
      var i = this,
        t = i.options.asNavFor;
      return t && null !== t && (t = e(t).not(i.$slider)), t
    }, i.prototype.asNavFor = function(i) {
      var t = this.getNavTarget();
      null !== t && "object" == typeof t && t.each(function() {
        var t = e(this).slick("getSlick");
        t.unslicked || t.slideHandler(i, !0)
      })
    }, i.prototype.applyTransition = function(e) {
      var i = this,
        t = {};
      !1 === i.options.fade ? t[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : t[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
    }, i.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, i.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, i.prototype.autoPlayIterator = function() {
      var e = this,
        i = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(i))
    }, i.prototype.buildArrows = function() {
      var i = this;
      !0 === i.options.arrows && (i.$prevArrow = e(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = e(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, i.prototype.buildDots = function() {
      var i, t, o = this;
      if (!0 === o.options.dots) {
        for (o.$slider.addClass("slick-dotted"), t = e("<ul />").addClass(o.options.dotsClass), i = 0; i <= o.getDotCount(); i += 1) t.append(e("<li />").append(o.options.customPaging.call(this, o, i)));
        o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
      }
    }, i.prototype.buildOut = function() {
      var i = this;
      i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, t) {
        e(t).attr("data-slick-index", i).data("originalStyling", e(t).attr("style") || "")
      }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? e('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), e("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
    }, i.prototype.buildRows = function() {
      var e, i, t, o, s, n, r, l = this;
      if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
        for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), e = 0; e < s; e++) {
          var a = document.createElement("div");
          for (i = 0; i < l.options.rows; i++) {
            var d = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = e * r + (i * l.options.slidesPerRow + t);
              n.get(c) && d.appendChild(n.get(c))
            }
            a.appendChild(d)
          }
          o.appendChild(a)
        }
        l.$slider.empty().append(o), l.$slider.children().children().children().css({
          width: 100 / l.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, i.prototype.checkResponsive = function(i, t) {
      var o, s, n, r = this,
        l = !1,
        a = r.$slider.width(),
        d = window.innerWidth || e(window).width();
      if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = a : "min" === r.respondTo && (n = Math.min(d, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
        s = null;
        for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i), l = s), i || !1 === l || r.$slider.trigger("breakpoint", [r, l])
      }
    }, i.prototype.changeSlide = function(i, t) {
      var o, s, n, r = this,
        l = e(i.currentTarget);
      switch (l.is("a") && i.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, i.data.message) {
        case "previous":
          s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var a = 0 === i.data.index ? 0 : i.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(a), !1, t), l.children().trigger("focus");
          break;
        default:
          return
      }
    }, i.prototype.checkNavigable = function(e) {
      var i, t;
      if (i = this.getNavigableIndexes(), t = 0, e > i[i.length - 1]) e = i[i.length - 1];
      else
        for (var o in i) {
          if (e < i[o]) {
            e = t;
            break
          }
          t = i[o]
        }
      return e
    }, i.prototype.cleanUpEvents = function() {
      var i = this;
      i.options.dots && null !== i.$dots && (e("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", e.proxy(i.interrupt, i, !0)).off("mouseleave.slick", e.proxy(i.interrupt, i, !1)), !0 === i.options.accessibility && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), e(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().off("click.slick", i.selectHandler), e(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), e(window).off("resize.slick.slick-" + i.instanceUid, i.resize), e("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), e(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
    }, i.prototype.cleanUpSlideEvents = function() {
      var i = this;
      i.$list.off("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", e.proxy(i.interrupt, i, !1))
    }, i.prototype.cleanUpRows = function() {
      var e, i = this;
      i.options.rows > 1 && ((e = i.$slides.children().children()).removeAttr("style"), i.$slider.empty().append(e))
    }, i.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, i.prototype.destroy = function(i) {
      var t = this;
      t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        e(this).attr("style", e(this).data("originalStyling"))
      }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, i || t.$slider.trigger("destroy", [t])
    }, i.prototype.disableTransition = function(e) {
      var i = this,
        t = {};
      t[i.transitionType] = "", !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
    }, i.prototype.fadeSlide = function(e, i) {
      var t = this;
      !1 === t.cssTransitions ? (t.$slides.eq(e).css({
        zIndex: t.options.zIndex
      }), t.$slides.eq(e).animate({
        opacity: 1
      }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({
        opacity: 1,
        zIndex: t.options.zIndex
      }), i && setTimeout(function() {
        t.disableTransition(e), i.call()
      }, t.options.speed))
    }, i.prototype.fadeSlideOut = function(e) {
      var i = this;
      !1 === i.cssTransitions ? i.$slides.eq(e).animate({
        opacity: 0,
        zIndex: i.options.zIndex - 2
      }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
        opacity: 0,
        zIndex: i.options.zIndex - 2
      }))
    }, i.prototype.filterSlides = i.prototype.slickFilter = function(e) {
      var i = this;
      null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
    }, i.prototype.focusHandler = function() {
      var i = this;
      i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
        t.stopImmediatePropagation();
        var o = e(this);
        setTimeout(function() {
          i.options.pauseOnFocus && (i.focussed = o.is(":focus"), i.autoPlay())
        }, 0)
      })
    }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
      return this.currentSlide
    }, i.prototype.getDotCount = function() {
      var e = this,
        i = 0,
        t = 0,
        o = 0;
      if (!0 === e.options.infinite)
        if (e.slideCount <= e.options.slidesToShow) ++o;
        else
          for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode) o = e.slideCount;
      else if (e.options.asNavFor)
        for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return o - 1
    }, i.prototype.getLeft = function(e) {
      var i, t, o, s, n = this,
        r = 0;
      return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (e - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (e + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), i = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), i = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), i = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, i += (n.$list.width() - o.outerWidth()) / 2)), i
    }, i.prototype.getOption = i.prototype.slickGetOption = function(e) {
      return this.options[e]
    }, i.prototype.getNavigableIndexes = function() {
      var e, i = this,
        t = 0,
        o = 0,
        s = [];
      for (!1 === i.options.infinite ? e = i.slideCount : (t = -1 * i.options.slidesToScroll, o = -1 * i.options.slidesToScroll, e = 2 * i.slideCount); t < e;) s.push(t), t = o + i.options.slidesToScroll, o += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      return s
    }, i.prototype.getSlick = function() {
      return this
    }, i.prototype.getSlideCount = function() {
      var i, t, o = this;
      return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
        if (n.offsetLeft - t + e(n).outerWidth() / 2 > -1 * o.swipeLeft) return i = n, !1
      }), Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, i.prototype.goTo = i.prototype.slickGoTo = function(e, i) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(e)
        }
      }, i)
    }, i.prototype.init = function(i) {
      var t = this;
      e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), i && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, i.prototype.initADA = function() {
      var i = this,
        t = Math.ceil(i.slideCount / i.options.slidesToShow),
        o = i.getNavigableIndexes().filter(function(e) {
          return e >= 0 && e < i.slideCount
        });
      i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) {
        var s = o.indexOf(t);
        e(this).attr({
          role: "tabpanel",
          id: "slick-slide" + i.instanceUid + t,
          tabindex: -1
        }), -1 !== s && e(this).attr({
          "aria-describedby": "slick-slide-control" + i.instanceUid + s
        })
      }), i.$dots.attr("role", "tablist").find("li").each(function(s) {
        var n = o[s];
        e(this).attr({
          role: "presentation"
        }), e(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + i.instanceUid + s,
          "aria-controls": "slick-slide" + i.instanceUid + n,
          "aria-label": s + 1 + " of " + t,
          "aria-selected": null,
          tabindex: "-1"
        })
      }).eq(i.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end());
      for (var s = i.currentSlide, n = s + i.options.slidesToShow; s < n; s++) i.$slides.eq(s).attr("tabindex", 0);
      i.activateADA()
    }, i.prototype.initArrowEvents = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, i.prototype.initDotEvents = function() {
      var i = this;
      !0 === i.options.dots && (e("li", i.$dots).on("click.slick", {
        message: "index"
      }, i.changeSlide), !0 === i.options.accessibility && i.$dots.on("keydown.slick", i.keyHandler)), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && e("li", i.$dots).on("mouseenter.slick", e.proxy(i.interrupt, i, !0)).on("mouseleave.slick", e.proxy(i.interrupt, i, !1))
    }, i.prototype.initSlideEvents = function() {
      var i = this;
      i.options.pauseOnHover && (i.$list.on("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", e.proxy(i.interrupt, i, !1)))
    }, i.prototype.initializeEvents = function() {
      var i = this;
      i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), e(document).on(i.visibilityChange, e.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().on("click.slick", i.selectHandler), e(window).on("orientationchange.slick.slick-" + i.instanceUid, e.proxy(i.orientationChange, i)), e(window).on("resize.slick.slick-" + i.instanceUid, e.proxy(i.resize, i)), e("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), e(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), e(i.setPosition)
    }, i.prototype.initUI = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, i.prototype.keyHandler = function(e) {
      var i = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === i.options.accessibility ? i.changeSlide({
        data: {
          message: !0 === i.options.rtl ? "next" : "previous"
        }
      }) : 39 === e.keyCode && !0 === i.options.accessibility && i.changeSlide({
        data: {
          message: !0 === i.options.rtl ? "previous" : "next"
        }
      }))
    }, i.prototype.lazyLoad = function() {
      function i(i) {
        e("img[data-lazy]", i).each(function() {
          var i = e(this),
            t = e(this).attr("data-lazy"),
            o = e(this).attr("data-srcset"),
            s = e(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          r.onload = function() {
            i.animate({
              opacity: 0
            }, 100, function() {
              o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", t).animate({
                opacity: 1
              }, 200, function() {
                i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
              }), n.$slider.trigger("lazyLoaded", [n, i, t])
            })
          }, r.onerror = function() {
            i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, t])
          }, r.src = t
        })
      }
      var t, o, s, n = this;
      if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
        for (var r = o - 1, l = s, a = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(a.eq(r))).add(a.eq(l)), r--, l++;
      i(t), n.slideCount <= n.options.slidesToShow ? i(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, i.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(), e.$slideTrack.css({
        opacity: 1
      }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, i.prototype.next = i.prototype.slickNext = function() {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, i.prototype.orientationChange = function() {
      var e = this;
      e.checkResponsive(), e.setPosition()
    }, i.prototype.pause = i.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(), e.paused = !0
    }, i.prototype.play = i.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, i.prototype.postSlide = function(i) {
      var t = this;
      t.unslicked || (t.$slider.trigger("afterChange", [t, i]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && e(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, i.prototype.prev = i.prototype.slickPrev = function() {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, i.prototype.preventDefault = function(e) {
      e.preventDefault()
    }, i.prototype.progressiveLazyLoad = function(i) {
      i = i || 1;
      var t, o, s, n, r, l = this,
        a = e("img[data-lazy]", l.$slider);
      a.length ? (t = a.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
        s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
      }, r.onerror = function() {
        i < 3 ? setTimeout(function() {
          l.progressiveLazyLoad(i + 1)
        }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
      }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, i.prototype.refresh = function(i) {
      var t, o, s = this;
      o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {
        currentSlide: t
      }), s.init(), i || s.changeSlide({
        data: {
          message: "index",
          index: t
        }
      }, !1)
    }, i.prototype.registerBreakpoints = function() {
      var i, t, o, s = this,
        n = s.options.responsive || null;
      if ("array" === e.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (i in n)
          if (o = s.breakpoints.length - 1, n.hasOwnProperty(i)) {
            for (t = n[i].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
            s.breakpoints.push(t), s.breakpointSettings[t] = n[i].settings
          }
        s.breakpoints.sort(function(e, i) {
          return s.options.mobileFirst ? e - i : i - e
        })
      }
    }, i.prototype.reinit = function() {
      var i = this;
      i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, i.prototype.resize = function() {
      var i = this;
      e(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
        i.windowWidth = e(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
      }, 50))
    }, i.prototype.removeSlide = i.prototype.slickRemove = function(e, i, t) {
      var o = this;
      return e = "boolean" == typeof e ? !0 === (i = e) ? 0 : o.slideCount - 1 : !0 === i ? --e : e, !(o.slideCount < 1 || e < 0 || e > o.slideCount - 1) && (o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit(), void 0)
    }, i.prototype.setCSS = function(e) {
      var i, t, o = this,
        s = {};
      !0 === o.options.rtl && (e = -e), i = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + i + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + i + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, i.prototype.setDimensions = function() {
      var e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
      })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
    }, i.prototype.setFade = function() {
      var i, t = this;
      t.$slides.each(function(o, s) {
        i = t.slideWidth * o * -1, !0 === t.options.rtl ? e(s).css({
          position: "relative",
          right: i,
          top: 0,
          zIndex: t.options.zIndex - 2,
          opacity: 0
        }) : e(s).css({
          position: "relative",
          left: i,
          top: 0,
          zIndex: t.options.zIndex - 2,
          opacity: 0
        })
      }), t.$slides.eq(t.currentSlide).css({
        zIndex: t.options.zIndex - 1,
        opacity: 1
      })
    }, i.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", i)
      }
    }, i.prototype.setOption = i.prototype.slickSetOption = function() {
      var i, t, o, s, n, r = this,
        l = !1;
      if ("object" === e.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
      else if ("multiple" === n) e.each(o, function(e, i) {
        r.options[e] = i
      });
      else if ("responsive" === n)
        for (t in s)
          if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[t]];
          else {
            for (i = r.options.responsive.length - 1; i >= 0;) r.options.responsive[i].breakpoint === s[t].breakpoint && r.options.responsive.splice(i, 1), i--;
            r.options.responsive.push(s[t])
          }
      l && (r.unload(), r.reinit())
    }, i.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, i.prototype.setProps = function() {
      var e = this,
        i = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === i.WebkitTransition && void 0 === i.MozTransition && void 0 === i.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, i.prototype.setSlideClasses = function(e) {
      var i, t, o, s, n = this;
      if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        i = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (e >= i && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i + r, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, t.slice(o - i + 1 + r, o + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")
      } else e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
      "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, i.prototype.setupInfinite = function() {
      var i, t, o, s = this;
      if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
        for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, i = s.slideCount; i > s.slideCount - o; i -= 1) t = i - 1, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
        for (i = 0; i < o + s.slideCount; i += 1) t = i, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
        s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          e(this).attr("id", "")
        })
      }
    }, i.prototype.interrupt = function(e) {
      var i = this;
      e || i.autoPlay(), i.interrupted = e
    }, i.prototype.selectHandler = function(i) {
      var t = this,
        o = e(i.target).is(".slick-slide") ? e(i.target) : e(i.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, i.prototype.slideHandler = function(e, i, t) {
      var o, s, n, r, l, a = null,
        d = this;
      if (i = i || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
        if (!1 === i && d.asNavFor(e), o = e, a = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== t ? d.animateSlide(r, function() {
          d.postSlide(o)
        }) : d.postSlide(o));
        else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== t ? d.animateSlide(r, function() {
        d.postSlide(o)
      }) : d.postSlide(o));
      else {
        if (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== t ? (d.fadeSlideOut(n), d.fadeSlide(s, function() {
          d.postSlide(s)
        })) : d.postSlide(s), void d.animateHeight();
        !0 !== t ? d.animateSlide(a, function() {
          d.postSlide(s)
        }) : d.postSlide(s)
      }
    }, i.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, i.prototype.swipeDirection = function() {
      var e, i, t, o, s = this;
      return e = s.touchObject.startX - s.touchObject.curX, i = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(i, e), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, i.prototype.swipeEnd = function(e) {
      var i, t, o = this;
      if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
      if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
      if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
        switch (t = o.swipeDirection()) {
          case "left":
          case "down":
            i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
            break;
          case "right":
          case "up":
            i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
        }
        "vertical" != t && (o.slideHandler(i), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
      } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, i.prototype.swipeHandler = function(e) {
      var i = this;
      if (!(!1 === i.options.swipe || "ontouchend" in document && !1 === i.options.swipe || !1 === i.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, !0 === i.options.verticalSwiping && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
        case "start":
          i.swipeStart(e);
          break;
        case "move":
          i.swipeMove(e);
          break;
        case "end":
          i.swipeEnd(e)
      }
    }, i.prototype.swipeMove = function(e) {
      var i, t, o, s, n, r, l = this;
      return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (i = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== e.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, e.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = i + o * s : l.swipeLeft = i + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = i + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, i.prototype.swipeStart = function(e) {
      var i, t = this;
      return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, t.dragging = !0, void 0)
    }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, i.prototype.unload = function() {
      var i = this;
      e(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, i.prototype.unslick = function(e) {
      var i = this;
      i.$slider.trigger("unslick", [i, e]), i.destroy()
    }, i.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, i.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, i.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
      var e, t, o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (e = 0; e < r; e++)
        if ("object" == typeof s || void 0 === s ? o[e].slick = new i(o[e], s) : t = o[e].slick[s].apply(o[e].slick, n), void 0 !== t) return t;
      return o
    }
  }), $(document).foundation();
  var g365_profile_event_imgs = $("#event-imgs");
  g365_profile_event_imgs.length > 0 && g365_profile_event_imgs.on("change.zf.tabs", function(e, i) {
    $("#event-stats .tabs-panel").attr("aria-hidden", !0).removeClass("is-active"), $(i.children("a").attr("href") + "-data").attr("aria-hidden", !1).addClass("is-active")
  });
  var pulse_reveal_closer_today_button = $("#reveal_close_today");
  pulse_reveal_closer_today_button.length > 0 && pulse_reveal_closer_today_button.on("click", function() {
    localStorage.setItem("pulse_close_today", "true"), localStorage.setItem("pulse_close_today_date", new Date)
  });
  var g365_news_rotator = $("#news_rotator");
  if (g365_news_rotator.length > 0) {
    g365_news_rotator.slick({
      autoplay: !0,
      autoplaySpeed: 2e3,
      arrows: !1,
      dots: !1
    });
    var g365_news_nav = $("#news_nav"),
      g365_news_nav_div = $("div", g365_news_nav),
      g365_news_nav_a = $("a", g365_news_nav);
    g365_news_rotator.on("beforeChange", function(e, i, t, o) {
      g365_select_nav($("a", g365_news_nav_div[o]))
    }), $("#slider-wrapper").on("mouseenter", function() {
      g365_news_rotator.slick("slickPause")
    }), $("#slider-wrapper").on("mouseleave", function() {
      g365_news_rotator.slick("slickPlay")
    }), g365_news_nav_a.on("click", function(e) {
      e.preventDefault();
      var i = $(this);
      $("#news_rotator").slick("slickGoTo", i.parent().index()), g365_select_nav(i)
    }), g365_select_nav($(g365_news_nav_a[0]))
  }
  var g365_table_hover_link = $("table.hover");
  g365_table_hover_link.length > 0 && g365_table_hover_link.on("click", "tr.event-line", function() {
    if ("undefined" != typeof $(this).attr("data-event_link")) {
      window.open($(this).attr("data-event_link"), "_blank")
    }
  });
  var g365_display_rotator = $("#event_display_rotator");
  g365_display_rotator.length > 0 && g365_display_rotator.slick({
    autoplay: !0,
    autoplaySpeed: 4e3,
    arrows: !1,
    dots: !1
  });
  var event_menu_buttons = $(".event-menu-button", "#main-nav");
  event_menu_buttons.length > 0 && ($("a", event_menu_buttons).on("click", function(e) {
    e.stopPropagation();
    var i = $(this).parent();
    event_menu_buttons.removeClass("selected-tab"), i.addClass("selected-tab"), event_menu_buttons.each(function() {
      $("." + $(this).attr("data-ev-target")).addClass("hide")
    }), $("." + i.attr("data-ev-target")).removeClass("hide")
  }), $(".event-menu-button.event-menu-start a", "#main-nav").click());
  var revealers = $(".revealer-column", "#event-menu-region");
  revealers.length > 0 && ($(".revealer-main #g365-all-regions-button", "#event-menu-region").click(function(e) {
    e.stopPropagation(), $(this).slideUp(), $(".helper-title", "#event-menu-region").slideDown(), revealers.removeClass("revealed-column hidden-column")
  }), $(".revealer-column .nav-title", "#event-menu-region").click(function(e) {
    e.stopPropagation(), $(".revealer-main #g365-all-regions-button", "#event-menu-region").slideDown({
      start: function() {
        jQuery(this).css("display", "inline-block")
      }
    }), $(".helper-title", "#event-menu-region").slideUp(), revealers.removeClass("revealed-column").addClass("hidden-column"), $(this).closest(".revealer-column").addClass("revealed-column").removeClass("hidden-column")
  }), $(".revealer-column.revealer-start .nav-title").click());
  var resizers = $(".resizer-column", "#event-menu-season");
  resizers.length > 0 && ($(".resizer-main #g365-all-events-button", "#event-menu-season").click(function(e) {
    e.stopPropagation(), $(this).slideUp(), resizers.removeClass("expanded-column collapse-column"), resizers.prev().removeClass("expanded-label-column collapse-label-column")
  }), $(".resizer-column .nav-title", "#event-menu-season").click(function(e) {
    e.stopPropagation(), $(".resizer-main #g365-all-events-button", "#event-menu-season").slideDown(), resizers.removeClass("expanded-column").addClass("collapse-column"), resizers.prev().removeClass("expanded-label-column").addClass("collapse-label-column"), $(this).closest(".resizer-column").addClass("expanded-column").removeClass("collapse-column").prev().addClass("expanded-label-column").removeClass("collapse-label-column")
  }), $(".resizer-column.resizer-start .nav-title").click()), $(".toggle-next").click(function() {
    $(this).next().toggleClass("hide")
  }), $(".staff .blocks-gallery-item").on("click", function() {
    var e = $(this);
    e.siblings().removeClass("expanded"), e.addClass("expanded")
  }), $(".staff .blocks-gallery-item .staff-remove-button").on("click", function(e) {
    e.stopPropagation(), $(this).parent().parent().removeClass("expanded")
  }), $("[data-curtain-menu-button]").click(function() {
    $("body").toggleClass("curtain-menu-open")
  }), $("[data-side-slide-menu-button]").click(function() {
    $("body").toggleClass("side-slide-menu-open")
  }), $(".main-navigation.side-slide-menu-wrapper").click(function(e) {
    e.target === this && $(this).prev().click()
  }), $("#series_selector").change(function() {
    window.location.href = $("option:selected", this).val()
  }), $(".variations select").change(function() {
    var e = $(this),
      i = e.closest(".product"),
      t = $(".main-price", i);
    if ("undefined" == typeof t.data("var_prices_html")) {
      var o = [];
      "" === $(":first-child", e).val() && (o[0] = t.html());
      var s = JSON.parse($(".variations_form", i).attr("data-product_variations"));
      $.each(s, function(e, i) {
        o[e + 1] = i.price_html.replace(".00", "")
      }), t.data("var_prices_html", o)
    }
    var n = t.data("var_prices_html");
    t.html(n[$("option:selected", e).index()])
  }).change(), "undefined" != typeof g365_func_wrapper && g365_func_wrapper.found.length > 0 && g365_func_wrapper.found.forEach(function(e) {
    e.name.apply(null, e.args)
  }), $(".variations select").change(function() {
    var e = $(this),
      i = e.closest(".product"),
      t = $(".main-price", i);
    if ("undefined" == typeof t.data("var_prices_html")) {
      var o = [];
      "" === $(":first-child", e).val() && (o[0] = t.html());
      var s = JSON.parse($(".variations_form", i).attr("data-product_variations"));
      $.each(s, function(e, i) {
        o[e + 1] = i.price_html.replace(".00", "")
      }), t.data("var_prices_html", o)
    }
    var n = t.data("var_prices_html");
    t.html(n[$("option:selected", e).index()])
  }).change(), $(function() {
//     if (void 0, document.querySelector(".hbspt-form")) {
//       void 0;
//       var e = $("#order_review_heading"),
//         i = $("#order_review");
//       window.addEventListener("message", function(t) {
//         "hsFormCallback" === t.data.type && "onFormSubmitted" === t.data.eventName && (e.slideDown(300), i.slideDown(300))
//       })
//     }
  });

$(document).ready(function($) {
    $('body .menu-item a').on('click', function() {
        $('body').removeClass('nav-drawer');
    })
});


var newsLeft = $('#newsLeft');
var newsRight = $('#newsRight');

newsRight.click(function(e) {
  $('.hero-tiles div').scrollLeft(10000);
  newsRight.attr("disabled", true);
  newsLeft.attr('disabled',false);
})


newsLeft.click(function(e) {
  $('.hero-tiles div').scrollLeft(0);
  newsLeft.attr("disabled", true);
  newsRight.attr('disabled',false);
})


// new checkout without reload
(function ($) {

    $(document).on('click', '.single_add_to_cart_button', function (e) {
        e.preventDefault();

      var upsell = [];
        var $thisbutton = $(this),
                $form = $thisbutton.closest('form.cart'),
                id = $thisbutton.val(),
                product_qty = $form.find('input[name=quantity]').val() || 1,
                product_id = $form.find('input[name=product_id]').val() || id,
                variation_id = $form.find('input[name=variation_id]').val() || 0,
                allupsell = $form.find('input:checked[name=additional_add_to_cart]').each(function(){
                    upsell.push($(this).val());
                }) || 0;
                
      
                
                

        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: product_qty,
            variation_id: variation_id,
            upsell: upsell,
        };

        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

        $.ajax({
            type: 'post',
            url: wc_add_to_cart_params.ajax_url,
            data: data,
            beforeSend: function (response) {
                $thisbutton.removeClass('added').addClass('loading');
            },
            complete: function (response) {
                $thisbutton.addClass('added').removeClass('loading');
            },
            success: function (response) {

                if (response.error && response.product_url) {
                    window.location = response.product_url;
                    return;
                } else {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                }
            },
        });

        return false;
    });
})(jQuery);

// //checkout now if cart empty
// (function ($) {

//     $(document).on('click', '.single_add_to_cart_button_checkout_button', function (e) {
//         e.preventDefault();

//       var upsell = [];
//         var $thisbutton_checkout = $(this),
//                 $form = $thisbutton_checkout.closest('form.cart'),
//                 id = $thisbutton_checkout.val(),
//                 product_qty = $form.find('input[name=quantity]').val() || 1,
//                 product_id = $form.find('input[name=product_id]').val() || id,
//                 variation_id = $form.find('input[name=variation_id]').val() || 0,
//                 allupsell = $form.find('input:checked[name=additional_add_to_cart]').each(function(){
//                     upsell.push($(this).val());
//                 }) || 0;
                
      
                
                

//         var data_checkout = {
//             action: 'woocommerce_ajax_add_to_cart',
//             product_id: product_id,
//             product_sku: '',
//             quantity: product_qty,
//             variation_id: variation_id,
//             upsell: upsell,
//         };
        
// //         $(document.body).trigger('adding_to_cart', [$thisbutton_checkout, data_checkout]);

//         $.ajax({
//             type: 'post',
//             url: wc_add_to_cart_params.ajax_url,
//             data: data_checkout,
//             beforeSend: function (response) {
//                 $thisbutton_checkout.removeClass('added').addClass('loading');
//             },
//             complete: function (response) {
//                 $thisbutton_checkout.addClass('added').removeClass('loading');
//             },
//             success: function (response) {

//                 if (response.error && response.product_url) {
//                     window.location = response.product_url;
//                     return;
//                 } else {
//                     $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton_checkout]);
//                 }
// //               window.open('https://dev.opengympremier.com/cart/', '_self');  //testing
              
//             },
//         });

//         return false;
//     });
// })(jQuery);