const buttons = document.querySelectorAll(".btn");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isFollowing = button.classList.contains("following");

    if (isFollowing) {
      button.textContent = "Follow";
      button.classList.remove("following");
      button.classList.add("follow");
    } else {
      button.textContent = "Following";
      button.classList.remove("follow");
      button.classList.add("following");
    }
  });
});
const change = (src) => {
        document.getElementById("main").src = src;
      };
