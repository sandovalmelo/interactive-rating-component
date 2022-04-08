const ratingBtns = Array.from(document.querySelectorAll(".rating-btn"));

let selectRating;

function selectBtn(event) {
	const btnTarget = event.target;

	ratingBtns.forEach((btn) => {
		if (btn !== btnTarget) {
			btn.classList.remove("selected");
		} else {
			btnTarget.classList.toggle("selected");
		}
	});

	console.dir(btnTarget.innerText);
}

ratingBtns.forEach((btn) => {
	btn.addEventListener("click", selectBtn);
});
