function clear_input_val() {
    document.querySelectorAll('.login-box input').forEach(input => input.value = '');
}

function switchID(id) {
    const value = document.getElementById('id').value;
    const block = document.getElementById(id);
    if(value.length==0){
        block.style.display = 'none';
    }
    else if(value.length==1){
        if(value.match(/^[A-Za-z]$/)){
            block.style.display = 'none';
        }
        else{
            block.style.display = '';
        }
    }

    else{
        if(value.match(/^[A-Za-z][12]\d{0,9}$/)){ //本國
            block.style.display = 'none';
        } 
        
        else{
            block.style.display = '';
        }
    }
}


const openEyeSVG = `
<svg viewBox="0 0 24 24" fill="none" class="eye-icon" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C2.73 7.89 7 4 12 4C17 4 21.27 7.89 23 12C21.27 16.11 17 20 12 20C7 20 2.73 16.11 1 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const closedEyeSVG = `
<svg viewBox="0 0 24 24" fill="none" class="eye-icon" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.94 17.94C16.14 19.24 14.14 20 12 20C7 20 2.73 16.11 1 12C1.73 10.06 3.06 8.25 4.88 6.94M9.88 5.3C10.57 5.11 11.27 5 12 5C17 5 21.27 8.89 23 13C22.44 14.39 21.57 15.61 20.47 16.6M1 1L23 23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function togglePassword(button) {
    const input = button.parentElement.querySelector("input");
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    button.innerHTML = isPassword ? openEyeSVG : closedEyeSVG;
}

function openModal() {
    document.getElementById('privacyModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('privacyModal').style.display = 'none';
}

function setAgree(){
    document.getElementById("agreeBox").checked = true;
    closeModal();

    return false;
}


function checkScroll() {
    const box = document.getElementById('scrollBox');
    const agreeBtn = document.getElementById('agreeBtn');
    if (box.scrollTop + box.clientHeight >= box.scrollHeight) {
        agreeBtn.disabled = false;
    }
}


const imageList = [
    'verification_img/129872.jpeg',
    'verification_img/137237.jpeg',
    'verification_img/188324.jpeg',
    'verification_img/336671.jpeg',
    'verification_img/379861.jpeg',
    'verification_img/381263.jpeg',
    'verification_img/428895.jpeg',
    'verification_img/456383.jpeg',
    'verification_img/477935.jpeg',
    'verification_img/585992.jpeg',
    'verification_img/812283.jpeg',
    'verification_img/825524.jpeg',
    'verification_img/917112.jpeg'
];

function changeVerification() {
    const img = document.getElementById('change_img');
    const verification = document.getElementById('verificationCheck');
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const selectedImage = imageList[randomIndex];
    img.src = selectedImage + '?ts=' + Date.now(); // 加 timestamp 防快取
    const fileName = selectedImage.split('/').pop().split('.')[0]; // 只取檔名例如 111111.jpeg
    verification.value = fileName;
}

// 頁面載入時自動更換
window.onload = function () {
    changeVerification();
};

function checkForm(){
    const id = document.getElementById("id");
    const user_id = document.getElementById("user_id");
    const password = document.getElementById("password");
    const verification = document.getElementById("verification");
    const verificationCheck = document.getElementById("verificationCheck");

    if(id.value===''){
        alert("身分證不能為空");
        return false;
    }

    if(user_id.value===''){
        alert("使用者代號不能為空");
        return false;
    }

    if(password.value===''){
        alert("密碼不能為空");
        return false;
    }

    if(verification.value===''){
        alert("驗證碼不能為空");
        return false;
    }

    if(verification.value!==verificationCheck.value){
        alert("驗證碼不正確");
        return false;
    }

    alert("登入成功");

    return true;
}




const backToTopBtn = document.getElementById("backToTopBtn");

// 滾動事件：控制按鈕是否出現
window.onscroll = function () {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.pointerEvents = "auto";
    } 
    else {
        backToTopBtn.style.display = "none";
        backToTopBtn.style.pointerEvents = "none";
    }
};

// 點擊事件：平滑滾回最上方
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});