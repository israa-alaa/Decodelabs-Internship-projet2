const accountForm = document.getElementById('accountForm');
const inputFields = document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="password"]');

// 2. (Submit) to prevent the form from submitting if any field is empty
accountForm.addEventListener('submit', (e) => {
    let hasEmptyField = false;

    inputFields.forEach(input => {
        if (input.value.trim() === "") {
            hasEmptyField = true; 
        }
    });

    if (hasEmptyField) {
        e.preventDefault(); // Prevent form submission
        
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "One of the fields is empty. Please check your details!",
            confirmButtonColor: "#ffc107" 
        });
    }
});