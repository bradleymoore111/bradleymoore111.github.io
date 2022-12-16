function updateDialogue() {
	if (inDialogue) {
		// First make sure that there's a banner.
		const banner = document.getElementById('banner');

		if (banner.classList.contains("hidden")) {
			document.getElementById("level-information-div").style.visibility = "hidden";
			document.getElementById("footer").style.visibility = "hidden";

			// Need to render it.
			banner.className = '';
			// banner.innerHTML = '';

			var title = document.getElementById('banner-title');
			title.innerText = currentDialogue.title || "Dialogue";
			// banner.appendChild(title);

			if (currentDialogue.text) {
				var paragraph = document.getElementById('banner-content');
				paragraph.innerHTML = currentDialogue.text;
				// banner.appendChild(paragraph);
			}

			// Based on the available options, decide what to do...
			var clicks = document.getElementById('banner-options');
			clicks.innerHTML = '';
			if (currentDialogue.options && currentDialogue.options.length > 0) {
				for (let option of currentDialogue.options) {
					var click = document.createElement('span');
					click.innerText = option.text;
					click.className = "option";
					click.addEventListener('click', () => {
						banner.className = 'hidden';
						if (option.onClick) {
							// Always takes first priority.
							inDialogue = false;
							option.onClick();
						} else if (!option.next || option.next == "leave") {
							inDialogue = false;
						} else if (option.next) {
							currentDialogue = dialogue[option.next];
						}
					});

					clicks.appendChild(click);
				}
			} else {
				var click = document.createElement('span');
				click.innerText = "Click to continue...";
				click.className = "option";
				click.addEventListener('click', () => {
					banner.className = 'hidden';
					if (currentDialogue.next && currentDialogue.next != "leave") {
						currentDialogue = dialogue[currentDialogue.next];
					} else {
						inDialogue = false;						
					}
				});

				clicks.appendChild(click);
			}

			const leftIcon = document.getElementById("banner-lefticon");
			if (currentDialogue.leftIcon) {
				leftIcon.src = currentDialogue.leftIcon.src;
				leftIcon.style.visibility = '';
			} else {
				leftIcon.style.visibility = 'hidden';
			}

			const rightIcon = document.getElementById("banner-righticon");
			if (currentDialogue.rightIcon) {
				rightIcon.src = currentDialogue.rightIcon.src;
				rightIcon.style.visibility = '';
			} else {
				rightIcon.style.visibility = 'hidden';
			}
		}
	}
}

function hideBanner() {
	var banner = document.getElementById('banner');
	banner.className = 'hidden';
	document.getElementById("level-information-div").style.visibility = "";
	document.getElementById("footer").style.visibility = "";
}

function startDialogue(d, initial) {
	if (!initial) {
		initial = "start";
	}
	inDialogue = true;
	dialogue = d;
	currentDialogue = d[initial];
}

updateDialogue.bannerCreated = false;
updateDialogue.banner = null;