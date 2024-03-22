let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };

const skateboard = document.querySelector(".skateboard");

skateboard.addEventListener("mousedown", (event) => {
  isDragging = true;
  previousMousePosition = { x: event.clientX, y: event.clientY };

  skateboard.classList.remove("skateboard-flip");
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;
    currentRotation.x += deltaY;
    currentRotation.y += deltaX;
    skateboard.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
    previousMousePosition = { x: event.clientX, y: event.clientY };
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

function toggleFlip() {
  skateboard.classList.remove("skateboard-flip");

  void skateboard.offsetWidth;

  skateboard.classList.toggle("skateboard-flip");
}
