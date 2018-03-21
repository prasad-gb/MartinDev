/* jshint -W098 */ /* jshint undef: false, unused: false */
var Menu = {
        settings: {
            menuBtn: $(".js-menuBtn"),
            menu: $(".js-menu"),
            closeBtn: $(".js-menuCloseBtn"),
            bg: $(".js-menuBg"),
            container: $(".js-menuContainer"),
            isOpen: !1,
            isAnimating: !1
        },
        init: function() {
            this.bindUIActions()
        },
        bindUIActions: function() {
            var e = this.settings;
            e.menuBtn.click(function() {
                Menu.toggle()
            });
            e.bg.click(function() {
                Menu.close()
            });
            e.container.click(function() {
                Menu.close()
            });
            e.closeBtn.click(function() {
                Menu.close()
            });
            $(window).keydown(function(e) {
                e.which === 27 && Menu.close()
            })
        },
        toggle: function() {
            var e = this.settings;
            e.isOpen ? Menu.close() : Menu.open()
        },
        open: function() {
            function t() {
                e.menu.addClass("is-active");
                e.isAnimating = !1
            }
            var e = this.settings;
            if (e.isAnimating === !1) {
                e.isOpen = !0;
                e.isAnimating = !0;
                e.menu.css("display", "block");
                setTimeout(t, 100)
            }
        },
        close: function() {
            function t() {
                e.menu.css("display", "none");
                e.isAnimating = !1
            }
            var e = this.settings;
            if (e.isAnimating === !1) {
                e.isOpen = !1;
                e.isAnimating = !0;
                e.menu.removeClass("is-active");
                setTimeout(t, 1200)
            }
        }
    },
    About = {
        settings: {
            aboutBtn: $(".js-btn_about"),
            about: $(".js-about"),
            closeBtn: $(".js-aboutCloseBtn"),
            aboutBg: $(".js-aboutBg"),
            container: $(".js-aboutContainer"),
            isOpen: !1,
            isAnimating: !1
        },
        init: function() {
            this.bindUIActions()
        },
        bindUIActions: function() {
            var e = this.settings;
            e.aboutBtn.click(function() {
                About.toggle()
            });
            e.aboutBg.click(function() {
                About.close()
            });
            e.container.click(function() {
                About.close()
            });
            e.closeBtn.click(function() {
                About.close()
            });
            $(window).keydown(function(e) {
                e.which === 27 && About.close()
            })
        },
        toggle: function() {
            var e = this.settings;
            e.isOpen ? About.close() : About.open()
        },
        open: function() {
            function t() {
                e.about.addClass("is-active");
                e.isAnimating = !1
            }
            var e = this.settings;
            if (e.isAnimating === !1) {
                e.isOpen = !0;
                e.about.css("display", "block");
                setTimeout(t, 100)
            }
        },
        close: function() {
            function t() {
                e.about.css("display", "none");
                e.isAnimating = !1
            }
            var e = this.settings;
            if (e.isAnimating === !1) {
                e.isOpen = !1;
                e.isAnimating = !0;
                e.about.removeClass("is-active");
                setTimeout(t, 1200)
            }
        }
    };
$(document).ready(function() {
    function e() {
        $(".js-pageLoader").addClass("is-visible")
    }

    function t() {
        $(".js-lazyload").each(function() {
            var e = $(this);
            e.attr("src", e.attr("data-src"));
            e.removeAttr("data-src");
            e.load(function() {
                $(this).addClass("is-loaded")
            });
            $(this).removeClass("js-lazyload")
        })
    }
    $(".js-activeTagHeading").length === 0 && $(".js-photos").length >= 1 && $("body").addClass("is-homepage");
    $(".js-photos article").length > 1 && $("body").addClass("is-multipleArticles");
    $(document).mousemove(function(e) {
        var t = 150;
        e.clientY < t ? $("body").addClass("is-mouseTop") : $("body").removeClass("is-mouseTop")
    });
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("body").addClass("is-mobile");
    setTimeout(e, 500);
    if ($(".js-activeTagHeading").length) {
        $("body").addClass("is-tagPage");
        $(".js-tag").each(function() {
            if ($(this).text() === $(".js-activeTagHeading").text()) {
                $(this).addClass("is-active");
                $(".js-tagDefault").removeClass("is-active")
            }
        })
    }
    $(document).scroll(function(e) {
        var t = $(this).scrollTop();
        t > 355 ? $("body").addClass("is-scrolledToHeader") : $("body").removeClass("is-scrolledToHeader");
        t > 450 ? $("body").addClass("is-scrolledPastPhoto") : $("body").removeClass("is-scrolledPastPhoto")
    });
    $(".js-photos").infinitescroll({
        navSelector: ".js-pagination:last",
        nextSelector: ".js-btn_next:last",
        itemSelector: ".js-photos article",
        debug: !1,
        loading: {
            finishedMsg: "<em class='txt_end'><span class='txt'>End</span></em>",
            msgText: "<em class='txt_loading'><span class='txt'>Loading</span></em>",
            img: "data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        animate: !1,
        extraScrollPx: 71,
        bufferPx: 71
    }, function(e) {
        t();
        $(e).find(".js-openPhotoInfo").click(function(e) {
            e.preventDefault();
            var t = $(this).closest(".js-photoContainer");
            $("article .js-photoContainer").removeClass("is-showingInfo");
            $(t).find(".photo_info").css("display", "block");
            $(t).css("background-color", "black");
            $(t).addClass("is-showingInfo")
        });
        $(e).find(".js-closePhotoInfo").click(function(e) {
            e.preventDefault();
            $(this).closest("article").trigger("mouseover");
            var t = $(this).closest(".js-photoContainer");
            $(t).find(".photo_info").css("display", "none");
            t.removeClass("is-showingInfo")
        })
    });
    $(".js-openPhotoInfo").click(function(e) {
        e.preventDefault();
        var t = $(this).closest(".js-photoContainer");
        $("article .js-photoContainer").removeClass("is-showingInfo");
        $(t).find(".photo_info").css("display", "block");
        $(t).css("background-color", "black");
        $(t).addClass("is-showingInfo")
    });
    $(".js-closePhotoInfo").click(function(e) {
        e.preventDefault();
        $(this).closest("article").trigger("mouseover");
        var t = $(this).closest(".js-photoContainer");
        $(t).find(".photo_info").css("display", "none");
        t.removeClass("is-showingInfo")
    });
    Menu.init();
    About.init()
});
$(window).load(function() {
    function e() {
        $(".js-lazyload").each(function() {
            var e = $(this);
            e.attr("src", e.attr("data-src"));
            e.removeAttr("data-src");
            e.load(function() {
                $(this).addClass("is-loaded")
            });
            $(this).removeClass("js-lazyload")
        })
    }
    $("body").addClass("is-loaded");
    e()
});