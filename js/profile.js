// let profilepic = document.getElementById("profile-pic")
// let inputfile = document.getElementById("input-file")

// inputfile.onchange = function(){
//     profilepic.src = URL.createObjectURL(inputfile.files[0])


//     reader.onload = function(){
//         localStorage.setItem("profileImage", reader.result);
//         profilepic.src = reader.result;
//     }

//     reader.readAsDataURL(file);
// }

// let savedImage = localStorage.getItem("profileImage");
// if (savedImage){
//     profilepic.src = savedImage;
// }
let profilepic = document.getElementById("profile-pic");
let inputfile = document.getElementById("input-file");

// تحميل الصورة من localStorage
let savedImage = localStorage.getItem("profileImage");
if (savedImage) {
    profilepic.src = savedImage;
}

// لما المستخدم يختار صورة
inputfile.onchange = function () {
    let file = inputfile.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function () {
            let base64 = reader.result;

            localStorage.setItem("profileImage", base64);

            // عرض الصورة
            profilepic.src = base64;
        };

        reader.readAsDataURL(file);
    }
};