$(document).ready(function(){
		console.log( "lightbox initialized..." );

		$("#lightBoxTrigger").click( function(){
			$("#lightbox").fadeIn( 500 );

		});

		$("#closeBtn").click( function(){
			$("#lightbox").fadeOut( 500 );
		})
});