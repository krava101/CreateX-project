const form = document.querySelector(".application-form");

const userInfo = {
    userName: "", 
    phone: "",
    email: "",
    message: "",
    receive: ""
}

function mainForm() {

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
}

mainForm();

export default mainForm;