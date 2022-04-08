const ratingBtns = Array.from(document.querySelectorAll(".rating-btn"));

function selectBtn(event) {
	const btnTarget = event.target;
	ratingBtns.forEach((btn) => btn.classList.remove("selected"));

	console.log(btnTarget.classList.contains("selected"));

	if (btnTarget.classList.contains("selected")) {
		btnTarget.classList.remove("selected");
	} else {
		btnTarget.classList.add("selected");
	}
}

ratingBtns.forEach((btn) => {
	btn.addEventListener("click", selectBtn);
});
