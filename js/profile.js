
let profilepic = document.getElementById("profile-pic");
let inputfile = document.getElementById("input-file");

let savedImage = localStorage.getItem("profileImage");
if (savedImage) {
    profilepic.src = savedImage;
}

inputfile.onchange = function () {
    let file = inputfile.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function () {
            let base64 = reader.result;

            localStorage.setItem("profileImage", base64);

            profilepic.src = base64;
        };

        reader.readAsDataURL(file);
    }
};