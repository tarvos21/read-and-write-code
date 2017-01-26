$(function () {
    setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".nav a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
}

// HTML
<header>
    <ul class="nav">
        <li><a href="#home">Home</a>
        </li>
        <li>|</li>
        <li><a href="#tour">Tour</a>
        </li>
        <li>|</li>
        <li><a href="#about">About</a>
        </li>
        <li>|</li>
        <li><a href="#contact">Contact</a>
        </li>
    </ul>
</header>


// This method to activate item in navbar is really working
// even the page is refreshed.
// It follows the URL.
//
// Following is another code piece, but similar

$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
})

// HTML
<div class="navbar">
	<div class="navbar-inner">
		<ul class="nav">
			<li><a href="/">Home</a></li>
			<li><a href="/about.php">About</a></li>
			<li><a href="/contact.php">Contact</a></li>
		</ul>
	</div>
</div>
