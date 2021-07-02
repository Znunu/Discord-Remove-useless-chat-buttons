function removeAnnoyingButtons(){ // Remove Gif, Sticker and Gift Nitro buttons in one simple script
	// Hide Gif Button
	const hideGifs = document.querySelectorAll('[aria-label="Open GIF picker"]'); // Find the "Gif" button
	hideGifs.forEach(gifButton => {
		if(gifButton.style.display !== "none") gifButton.style.display = "none"; // Hide the message if it's not already hidden.
	});

	// Hide Sticker Button
	const hideStickers = document.querySelectorAll('[aria-label="Open sticker picker"]'); // Find the "Sticker" button
	hideStickers.forEach(gifButton => {
		if(gifButton.style.display !== "none") gifButton.style.display = "none"; // Hide the message if it's not already hidden.
	});

// Hide gift nitro button
	const hideNitro = document.querySelectorAll('[aria-label="Send a gift"]'); // Find the "Gift Nitro" button
	hideNitro.forEach(nitroButton => {
		if(nitroButton.style.display !== "none") nitroButton.style.display = "none"; // Hide the message if it's not already hidden.
	});
}
setInterval(removeAnnoyingButtons, 2000) // Repeat every 2 seconds. Recommended to keep at 2000, but raise/ lower if you wish.
