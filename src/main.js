const form = document.querySelector(".application-form");
const questionForm = document.querySelector(".question-form");

const userInfo = {
    userName: "", 
    phone: "",
    email: "",
    message: "",
    receive: ""
}

const userQuestion = {
    userName: "", 
    phone: "",
    message: ""
}

form.addEventListener("submit", event => {
    event.preventDefault();
    userInfo.userName = event.currentTarget.user_name.value;
    userInfo.phone = event.currentTarget.user_tel.value;
    userInfo.email = event.currentTarget.user_email.value;
    userInfo.message = event.currentTarget.user_message.value;
    userInfo.receive = event.currentTarget.user_receive.checked;
    console.log(userInfo);
    event.currentTarget.reset();
})


questionForm.addEventListener("submit", event => {
    event.preventDefault();
    userQuestion.userName = event.currentTarget.user_name.value;
    userQuestion.phone = event.currentTarget.user_tel.value;
    userQuestion.message = event.currentTarget.user_message.value;
    console.log(userQuestion);
    event.currentTarget.reset();
})

