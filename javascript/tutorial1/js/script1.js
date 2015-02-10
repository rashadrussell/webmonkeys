
// Grab the HTML element whose ID attribute is set to 'clickMe'
var clickMe = document.getElementById("clickMe");

/*
 * Add an Event Listener to the clickMe HTML element.
 * When the element is clicked, execute the popupModal function.
 */ 
clickMe.addEventListener("click", popupModal);

/*
 * Popup Modal function.
 * Parameter: eve  - event paramenter automatically passed into functions that are
 * executed as parameters in the addEventListener method 
 */
function popupModal(eve) {

	// Create a HTML Div element
	var transparentScreen = document.createElement("div"),
		popupModal = document.createElement("div"), // Create a HTML paragraph element
		modalInfo;

	/*
	 * In JavaScript, we are allowed to declare functions inside of other functions. This
	 * is called a closure.
	 * rmScreen function
	 * Removes the transparent screen.
	 */
	function rmScreen(eve) {
		// Grab HTML element whose ID is set to "popup-modal"
		var popupModal = document.getElementById("popup-modal");

		// Remove modal HTML element from the DOM
		popupModal.remove();

		// Remove the element that received the event from the DOM
		eve.target.remove();

	} 

	// Grab the element that contains the information that should appear in the modal
	modalInfo = document.getElementById("modal-info");

	// Grab the HTML that should appear in the modal
	modalInfo = modalInfo.innerHTML;

	// Add an ID attribute on the modal, and set its value to 'popup-modal' (e.g. id="popup-modal" )
	popupModal.setAttribute("id", "popup-modal");

	// Add text to the modal
	popupModal.innerHTML = modalInfo;

	// Add a class attribute to the transparent screent and set its value to 'transScreen'
	transparentScreen.setAttribute("class", "transScreen");

	// When the transparent screen is clicked, execute the rmScreen function on it.
	transparentScreen.addEventListener('click', rmScreen);

	// Append the transparent screen to the DOM
	document.body.appendChild(transparentScreen);

	// Append the Modal to the DOM
	document.body.appendChild(popupModal);

}