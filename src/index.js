function getRamen() {
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((ramenData) => ramenData.filter((element) => renderRamen(element)));
}

getRamen();

function renderRamen(soup) {
  const holder = document.querySelector("#ramen-menu");
  const ramen = document.createElement("img");
  const button = document.querySelector("#new-ramen");
  ramen.src = soup.image;

  holder.append(ramen);

  ramen.addEventListener("click", () => {
    let ramenPic = document.querySelector(".detail-image");
    let ramenName = document.querySelector(".name");
    let ramenRest = document.querySelector(".restaurant");
    let ramenRating = document.querySelector("#rating-display");
    let ramenComment = document.querySelector("#comment-display");
    ramenName.textContent = soup.name;
    ramenRest.textContent = soup.restaurant;
    ramenPic.src = soup.image;
    ramenRating.textContent = soup.rating;
    ramenComment.textContent = soup.comment;
  });
}

function addNewRamen() {
  const button = document.querySelector("#new-ramen");
  button.addEventListener("submit", (e) => {
    e.preventDefault();
    let newName = document.querySelector("#new-name");
    let newRest = document.querySelector("#new-restaurant");
    let newImage = document.querySelector("#new-image");
    let newRating = document.querySelector("#new-rating");
    let newComment = document.querySelector("#new-comment");

    let newRamen = {
      name: newName.value,
      restaurant: newRest.value,
      image: newImage.value,
      rating: newRating.value,
      comment: newComment.value,
    };
    button.reset();
    renderRamen(newRamen);
  });
}

addNewRamen();
