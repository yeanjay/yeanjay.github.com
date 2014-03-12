var scrollBackground = function ()
{
    var top;
     
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
    } else if (document.body) {
        t = document.body.scrollTop;
    }
	console.log(t);
	if (top > 300)
		;
    
}

window.onscroll = scrollBackground;