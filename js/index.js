const renderCheckbox = (number) => `<div>
  <input class="checkbox" type="radio" name="checkbox" id="${number}" />
  <label class="rating_option" for="${number}">${number}</label>
</div>
`;
const ratingContainer = document.querySelector(".rating_options");

console.log(ratingContainer)

if(ratingContainer) {
  for(let i = 1; i <= 5; i++) {
    ratingContainer.insertAdjacentHTML('beforeend', renderCheckbox(i))
  }
}