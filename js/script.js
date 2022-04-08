const ratingBtns = Array.from(document.querySelectorAll(".rating-btn"));
const submitBtn = document.getElementById("submit-btn");
const ratingState = document.getElementById("rating-state");
const thanksState = document.getElementById("thanks-state");
const ratingSelected = document.querySelector(".rating-selected");

let selectRating;

function selectBtn(event) {
	const btnTarget = event.target;
	let numberSelected = btnTarget.innerText;

	ratingBtns.forEach((btn) => {
		if (btn !== btnTarget) {
			btn.classList.remove("selected");
		} else {
			if (btnTarget.classList.contains("selected")) {
				btnTarget.classList.remove("selected");
				numberSelected = 0;
			} else {
				btnTarget.classList.add("selected");
			}
		}
	});

	selectRating = numberSelected;
}

function submitRating() {
	console.log(selectRating);
	if (selectRating) {
		ratingState.hidden = true;
		thanksState.hidden = false;
		ratingSelected.innerText = selectRating;
	}
}

ratingBtns.forEach((btn) => {
	btn.addEventListener("click", selectBtn);
});

submitBtn.addEventListener("click", submitRating);
