const inputForm = document.getElementById("form");
const images = [];

inputForm.addEventListener("submit", (e) => {
  const userInput = document.getElementById("puppy").value;
  fetchRandomPuppyImage(userInput.toLowerCase());
  e.preventDefault();
});

const fetchRandomPuppyImage = async (breedName) => {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    if (response.status === 200) {
      const data = await response.json();
      const imageURL = data.message;
      images[0] = imageURL;

      // remove cannotFoundText if exists
      if (document.querySelector(".cannotFoundText")) {
        const cannotFoundText = document.querySelector(".cannotFoundText");
        cannotFoundText.remove();
      }

      // create puppy image
      if (!document.querySelector(".image")) {
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = images[0];
        document.getElementById("image-box").appendChild(image);

        // override puppy image
      } else {
        const image = document.querySelector(".image");
        image.src = images[0];
      }

      // if no puppy image can be found, inform user
    } else {
      const cannotFoundText = document.createElement("h3");
      cannotFoundText.classList.add("cannotFoundText");
      cannotFoundText.textContent = "Sorry. No breed found. Please try again.";
      document.getElementById("image-box").appendChild(cannotFoundText);
    }
  } catch (err) {
    console.error(err);
  }
};
