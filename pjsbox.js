/*
	PJSBox Bookmarklet
	idea: @humphd
	author: @sanchothefat
*/
(function() {

// more or less stolen form jquery core and adapted by paul irish
function getScript(url,success){
	var script=document.createElement('script');
	script.src=url;
	var head=document.getElementsByTagName('head')[0],
	done=false;
	// Attach handlers for all browsers
	script.onload=script.onreadystatechange = function(){
	if ( !done && (!this.readyState
		|| this.readyState == 'loaded'
		|| this.readyState == 'complete') ) {
		done=true;
		success();
	}
	};
	head.appendChild(script);
}

// load jQuery + PJS
function init(){
	if(typeof jQuery!='undefined') {
		getProcessing(jQuery);
	} else {
		getJquery();
	}
}
function getJquery() {
	getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js',function() {
		if (typeof jQuery!='undefined') {			
			var $jq = jQuery.noConflict();
			getProcessing($jq);
		}
	});
}
function getProcessing($jq){

		PJSBox($jq);
	
}

function PJSBox($jq) {

	function getSize(script) {
		
			return [450,450];
		
	}

	selected = "<table width='100%'><tr><td><h3>LEV FEELS FINE</h3>This demo is an experiment in mashing up the ideas present in The <a href='en.wikipedia.org/wiki/Kuleshov_Effect'>Kuleshov Effect</a>, the experiment by the 1920s Russian film theorist Lev Kuleshov, with <a href='http://www.wefeelfine.org/'>We Feel Fine</a>, a web app by Jonathan Harris and Sep Kamvar that \"listened\" to the emotions of the world as it used the Internet.</td>";
  selected +='<td><br/><object width="225" height="144"><param name="movie" value="http://www.youtube.com/v/_gGl3LJ7vHc?fs=1&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/_gGl3LJ7vHc?fs=1&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="225" height="144"></embed></object></td></table>';
  selected += "<h3>HOW TO USE IT</h3>To see Levs emotions change, make a tweet using the hashtag &#35;levfeels and include the words happy, sad or angry. Note: duplicate tweets are not considered.<h3>WHAT DOES IT DO</h3>This demo changes Levs emotion based on the most recent tweet from the emotions above, changes the music to reflect his mood, and also inserts a photo from flickr based on his mood into the computer he is watching.<br/> <br/>Created as part of <a href='http://www.webmademovies.org'>Web Made Movies</a> by <a href='http://annasob.wordpress.com/'>@annasob</a>, <a href='http://scottdowne.wordpress.com/'>Scott Downe</a>, and <a href='http://donna-oberes.blogspot.com/'>Donna Oberes</a>.";
	
  var size = getSize();
  var cpos = {};
  
  $jq("body").append('\
<div id="pjsbox-overlay" style="z-index:100000;position:fixed;left:50%;top:50%;height:100%;width:100%;background:#fff;opacity:0.5;display:inline;"></div>\
<div id="pjsbox" style="z-index:100001;position:fixed;left:50%;top:50%;margin:-135px 0 0 -240px;overflow:visible;width:550px;height:400px;padding:10px;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;background:#fff;box-shadow:0 0 20px #353535;-webkit-box-shadow:0 0 20px #353535;-moz-box-shadow:0 0 20px #353535;font-size: 12px;">\
<a id="pjsbox-close" style="display:block;display:inline;position:fixed;text-decoration:none;font-weight:bold;font-family:Helvetica,sans-serif;font-size:16px;left:50%;top:75%;margin:90px 0 0 25px;width:75px;height:20px;line-height:20px;text-align:center;background:#353535;color:#fff;-moz-border-radius:10px;-moz-box-shadow:0 0 10px #353535;-webkit-border-radius:10px;-webkit-box-shadow:0 0 10px #353535;border-radius:10px;box-shadow:0 0 10px #353535;" href="#pjsbox-closer" title="Close">Start</a>\
</div>');

  $jq("#pjsbox").append(selected);
  var canvas = $jq("#pjsbox-canvas canvas")[0];
  $jq("#pjsbox-close").click(function(){
    $jq("#pjsbox").fadeOut("normal",function(){
      $jq("#pjsbox-overlay").fadeOut("slow",function(){
        $jq(this).remove();
        $jq("#pjsbox").remove();
      });
    });
    initLev();
    return false;
  });
}

init();

})();