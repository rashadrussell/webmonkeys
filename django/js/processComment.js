$(document).ready(function() {

	$('#comments .comment-form button').on('click', function(eve) {

		var author  = $("#comments input").val(),
			comment = $("#comments textarea").val(),
			data = {author: author, comment: comment},
			commentItem


		$.ajax({
			type: "POST",
			url: "http://localhost:3000/django.py",
			data: JSON.stringify(data),
			dataType: "json",
			success: function(data) {
			}
		});


		var commentItem = $('<li class="comment-item" />');

		commentItem.append('<p class="author">').find('.author').append(author);
		commentItem.append('<p class="comment">').find('.comment').append(comment);
		$('.comment-list').prepend(commentItem);

	});
	
});