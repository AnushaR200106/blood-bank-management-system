document.getElementById("donorForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let blood = document.getElementById("bloodGroup").value;

    if (gender === "" || blood === "") {
        alert("Please select Gender and Blood Group");
        return;
    }

    document.getElementById("msg").innerHTML =
        "Registered: " + name + ", " + age + " years, " + gender + ", " + blood;
});
