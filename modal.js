import CONFIG from '/assets/js/config.js';

const modal = document.getElementById("dcmaModal");
const closeBtn = document.querySelector(".close");
const dcmaMessage = document.getElementById("dcmaMessage");
const dcmaEmail = document.getElementById("dcmaEmail");

document.addEventListener("DOMContentLoaded", () => {

    dcmaMessage.innerHTML  = CONFIG.dcma.message.replace('{siteName}', CONFIG.siteName).replace('{email}', CONFIG.dcma.email);
    dcmaEmail.href = `mailto:${CONFIG.dcma.email}?subject=${encodeURIComponent(CONFIG.dcma.subject)}&body=${encodeURIComponent(CONFIG.dcma.message.replace('{siteName}', CONFIG.siteName).replace('{email}', CONFIG.dcma.email))}`;

    // When user clicks on the span (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    const openModalBtn = document.getElementById("openModalBtn");
    if (openModalBtn) {
        openModalBtn.addEventListener('click', openDCMAModal);
    }
});

// Function to open the modal
function openDCMAModal() {
    modal.style.display = "block";
}

// This will make the function globally accessible
window.openDCMAModal = openDCMAModal;


export default openDCMAModal;