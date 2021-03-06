!function() {
    "use strict";
    function a() {
        var a = "js-html-inspector"
          , b = "js-btn-inspector"
          , c = $("#dialog-html-inspector")
          , d = $('<button class="btn btn-default btn-xs ' + b + '"><span class="glyphicon glyphicon-search"></span></button>');
        d.click(function() {
            var d = $(this).closest("." + a).clone()
              , e = d.data("replace-target");
            e && d.find(e).each(function() {
                $(this).replaceWith($(this).html())
            });
            var f = d.data("remove-target") || [];
            f instanceof Array || (f = [f]),
            f.push("." + b),
            $.each(f, function(a, b) {
                d.find(b).remove()
            });
            var g = d.data("remove-class-target") || [];
            g instanceof Array || (g = [g]),
            $.each(g, function(a, b) {
                d.find(b).removeClass(b.split(".")[1])
            });
            var h = d.html().split("\n");
            if (h.length > 0) {
                for (; 0 === h[0].trim().length; )
                    h.shift();
                var i = h[0].length - h[0].trim().length
                  , j = new RegExp(" {" + i + "}")
                  , k = [];
                $.each(h, function(a, b) {
                    b.trim().length > 0 && b.match(j) ? k.push(b.substring(i)) : 0 === b.length && k.push("")
                }),
                c.find(".modal-body code").text(k.join("\n")).end().modal()
            }
        }),
        $("." + a).hover(function() {
            $(this).append(d)
        })
    }
    $(function() {
        $('[data-toggle="tooltip"]').tooltip(),
        $('[data-toggle="popover"]').popover(),
        $('a[href="#"]:not([data-toggle], [rel="async"])').click(function() {
            return !1
        }),
        $("form:not([action])").submit(function() {
            return !1
        }),
        a()
    })
}(window);
