alert("you need to see this");
console.log("is that necessary?");

//$("p").addClass("paragraph");
//$(document).ready({
//    function() {
//        $("button").click(function () {
//            $("p:first").addClass("intro");
//        }
//    }
//}
//)
$(document).ready(function () {
    $("button").click(function () {
        //$("p:first").removeClass("ducks").addClass("intro");
        //alert($("p").length);
        $(":header").css("background-color", "yellow");
    });
});