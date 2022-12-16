let total_skips = 0;

let prevSkipText = "";

const skipLevelSpan = document.getElementById("skip-level");

function updateSkips() {
	let skipText = world[level].skipText || "Skip Level";

	if (world[level].canSkip) {
		skipLevelSpan.style.visibility = "";
	} else {
		skipLevelSpan.style.visibility = "hidden";
	}

	skipText += ' (Current # of skips: ' + total_skips + ')';

	// Special skips.
	// Commented out because noone uses them

	// if (total_skips >= 1) {
	// 	if (world[level].skip1Text) {
	// 		world[level].body += '<br><br>' + world[level].skip1Text;
	// 		world[level].skip1Text = false;
	// 	}
	// }

	if (total_skips >= 2) {
		if (world[level].skip2Text) {
			world[level].body += '<br><br>' + world[level].skip2Text;
			world[level].skip2Text = false;
		}
	}

	// if (total_skips >= 4) {
	// 	if (world[level].skip4Text) {
	// 		world[level].body += '<br><br>' + world[level].skip4Text;
	// 		world[level].skip1Text = false;
	// 	}
	// }	

	if (prevSkipText == skipText) {
		return;
	}

	prevSkipText = skipText;

	skipLevelSpan.innerHTML = skipText;
}