// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// Function to animate the box
function animateBox() {
    const box = document.getElementById('animatedBox');
    box.style.transform = 'scale(1.2)';
    // Reset scale after animation
    setTimeout(() => {
        box.style.transform = 'scale(1)';
    }, 500);
}
// Function to open the modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}
// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}
// Event Listeners
document.getElementById('animateButton').addEventListener('click', animateBox);
document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
