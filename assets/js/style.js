$(()=>{
    $(".md a:not(.post-link)").attr("target","_blank");
    $(".md th:contains(\":hidden\")").hide();

    var rateLabel = ["Varying", "Beginner", "dunno", "dunno", "dunno", "Experienced"];
    $(".rating").each(function (r) {
        var val = $(this).attr("value");
        $(this).attr("title", rateLabel[val]);
        for (var i = 0; i < 5; i++) {
            $(this).append(val == 0 ? ("<i class=\"fa fa-minus rating-" + i + "\"></i>") : (i < val ?
                "<i class=\"fa fa-circle rating-" + i + "\"></i>"
                : "<i class=\"fa fa-circle-thin rating-" + i + "\"></i>"));
        }
    })
})