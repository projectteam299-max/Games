const addBtn = document.getElementById('add-btn');
const friendName = document.getElementById('friend-name').innerText;
const friendsList = document.getElementById('friends-list');

addBtn.addEventListener('click', function() {
    // 1. تغيير شكل الزرار وتعطيله عشان ما يضيفش نفس الشخص مرتين
    addBtn.innerText = "تمت الإضافة ✅";
    addBtn.style.backgroundColor = "#ccc";
    addBtn.disabled = true;

    // 2. إنشاء عنصر "ليست" جديد (li)
    const newFriend = document.createElement('li');
    
    // 3. وضع اسم الصديق داخل العنصر الجديد
    newFriend.innerText = friendName;

    // 4. إضافة الصديق للقائمة (الـ ul)
    friendsList.appendChild(newFriend);

    console.log(friendName + " أصبح صديقك الآن!");
});