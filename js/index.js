let checked;
const ratingContainer = document.querySelector(".rating_options");
const submitButton = document.querySelector(".rating_submit");
const feedbackModal = document.querySelector(".rating_feedback");
const renderCheckbox = (number) => `<div>
  <input 
    class="checkbox" 
    type="checkbox" 
    id="${number}" 
    value="${number}"
    onclick="handleCheckboxClick(this)"
  />
  <label class="rating_option" for="${number}">${number}</label>
</div>
`;

if(ratingContainer) {
  for(let i = 1; i <= 5; i++) {
    ratingContainer.insertAdjacentHTML('beforeend', renderCheckbox(i))
  }
}

const handleCheckboxClick = (el) => {
  const allCheckboxes = document.querySelectorAll(".checkbox");
  allCheckboxes.forEach((item) => item.checked = false);
  el.checked = true;
  checked = el.getAttribute("id");
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  setTimeout(() => {
    feedbackModal.classList.add("active")
  }, 5000)
})