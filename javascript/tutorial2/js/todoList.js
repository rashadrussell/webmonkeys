5/*
 * JQuery Reference: http://api.jquery.com/
 */
/*
 * Make sure the DOM is loaded before executing JavaScript.
 * This is also a way to make sure variables and functions that are declared
 * in this file do not overwrite other JavaScript code that was included
 * in the HTML before this file. This is achieved via scoping. Items 
 * declared inside a function are only accessible in that function.
*/ 
$(document).ready(function() {

	// Although not necessary, it's good practice to declare variables at the top.
	var input,
		inputBox,
		inputText,
		item;

	// Grab input box
	input = $("#todoList #todoList-input");

	// Use the on() method to set a "focusin" event listener on the input node.
	// Notice the blue border around the input box when you click on it. That
	// means that the input box is in focus.
	input.on("focusin", function(e) {

		inputBox = $(e.target);

		// When the input box is infocus, set a "keypress" event listener on the inputBox
		// The "keypress" event listener is triggered when you are typing
 		inputBox.on("keypress", function(e) {
			
			// The keyCode property of an event is a number that represents the key being pressed.
			// 13 is the "enter" key.
			// If the user pressed enter and the input box is not empty, then add a todo item to the list
			if( (e.keyCode === 13) && (inputBox.val() !== "") ) {

				// Grab the html inside the todo item template at the bottom of the HTML file. This is a String.
				item = $("#todoList-item-template").html();

				// Convert the HTML String into a JQuery Object, so that I can call JQuery methods with it.
				item = $(item);

				// Grab the text that is in the input box, which we will use to make a todo item
				inputText = inputBox.val();

				// Find a HTML element in the list item that has a class attribute set to "content",
				// and add the text in the input box into it.
				// In this case, we have a span tag with the class attribute set to content. 
				item.find(".content").text(inputText);

				// Add the todo item to the todo list
				$("#list").append(item);

				// In the todo item, find the first HTML element whose has a class attribute set to "close".
				// Then add a "click" event listener to it.
				item.find(".close").first().on("click", function(e) {

					// When you click on the HTML element with the class attribute set to "close",
					// grab its closest ansector, which is it's parent container, and remove it from,
					// the DOM. The parent is the "li" element whose class attribute is set to "item" 
					$(e.target).closest("li.item").remove();

				});

				// Empty the input box, by setting its text to the empty string.
				inputBox.val("");

			}

		});


	});

});