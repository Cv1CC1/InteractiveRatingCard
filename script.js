let activeNumber;

function handleNumberClick(number) {
  ratingNumbers = document.querySelectorAll('.rating-number-wrapper');
  ratingNumbers.forEach((ratingNumber) => {
    ratingNumber.classList.remove('rating-number-active');
  });
  ratingNumbers[number - 1].classList.add('rating-number-active');
  document.getElementById('rating-number').innerHTML = number;
  activeNumber = number;
}

function handleSubmit() {
  if (activeNumber) {
    document.querySelector('.ratings-1').classList.add('hidden');
    document.querySelector('.ratings-2').classList.remove('hidden');
  } else {
    alert('Please select a number');
  }
}