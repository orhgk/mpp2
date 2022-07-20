$(".facemb").click(function () {
	$(this).toggleClass("facemb-active");
});

$(".tog-features").click(function () {
	$(this).toggleClass("tog-featactive");
});


$(".facemb.cagliostro").click(function () {
	$(".area.cagliostro").toggleClass("area-active");
});
$(".facemb.farnessa").click(function () {
	$(".area.farnessa").toggleClass("area-active");
});
$(".facemb.atmahata").click(function () {
	$(".area.atmahata").toggleClass("area-active");
});
$(".facemb.tarpuz").click(function () {
	$(".area.tarpuz").toggleClass("area-active");
});

$(".tog-sanctuaries").click(function () {
	$(".towns").toggleClass("toggle-active");
});

$(".tog-dungeons").click(function () {
	$(".dungeons").toggleClass("toggle-active");
});

$(".tog-landmarks").click(function () {
	$(".landmarks").toggleClass("toggle-active");
});

$(".modalexit").click(function () {
	$(".modalmap").toggleClass("togmodal");
});

$(".capital.almadel").click(function () {
	$(".modalmap.almadel").toggleClass("togmodal");
});