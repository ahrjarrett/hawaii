$(function() {

  //var tempDiv = document.getElementById('temperature')

	$('.mobile-menu').click(function(){
		if ($('#nav-mobile').hasClass('collapse-it')) {
			$('#nav-mobile').removeClass('collapse-it')
		} else {
			$('#nav-mobile').addClass('collapse-it')
		}
	})

	$('#quote0').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Bob and Diane made the pool installation an awesome experience.”</p>')
		$('#theheads').replaceWith('<p id="theheads">Daryl & Gretta, Rowlett</p>')
	})

	$('#quote1').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“We refer absolutely no one else for new pools and for pool owners with repairs.”</p>')
		$('#theheads').replaceWith('<p id="theheads">David & Kelly, McKinney</p>')
	})

	$('#quote2').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Bob and Diane did an amazing job and from day one to the end of the pool, they were always available when I needed them.”</p>')
		$('#theheads').replaceWith('<p id="theheads">Dave & Sharon, Terrell</p>')
	})

	$('#quote3').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Working with Bob and Diane has been a complete joy! We are completely thrilled with the outcome of our pool!”</p>')
		$('#theheads').replaceWith('<p id="theheads">David & Erin, Talty</p>')
	})

	$('#quote4').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Bob and Diane are great to work with. Their attention to detail is flawless.”</p>')
		$('#theheads').replaceWith('<p id="theheads">Delores D., Rowlett</h6>')
	})

	$('a.head').on('click', function(){
		$('.head.active').removeClass('active')
		$(this).addClass('active')
	})

	$('.showcase-item').on('click', function(){
		$('.active-card').removeClass('active-card')
		$(this).addClass('active-card')
	})

} )
