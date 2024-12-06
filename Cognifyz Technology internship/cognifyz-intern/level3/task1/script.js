const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const enlargedImage = document.createElement("div");
    enlargedImage.classList.add("enlarged");
    const clickedImage = document.createElement("img");
    clickedImage.src = e.target.src;
    clickedImage.alt = e.target.alt;
    enlargedImage.appendChild(clickedImage);
    document.body.appendChild(enlargedImage);
    enlargedImage.addEventListener("click", () => {
      document.body.removeChild(enlargedImage);
    });
  });
});