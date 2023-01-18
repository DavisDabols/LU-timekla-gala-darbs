$(document).ready(function () {
    let nameError = true;
    let emailError = true;
    let priorityError = true;
    let questionError = true;
    $("#name").keyup(function () {
      validateName();
    });
    $("#email").keyup(function () {
        validateEmail();
    });
    $("#priority").keyup(function () {
        validatePriority();
    });
    $("#question").keyup(function () {
        validateQuestion();
    });
    $(".faq-popup").hide();
    $(".bgblur").hide();
   
    function validateName() {
      let nameValue = $("#name").val();
      if (nameValue.length == "") {
        $("#nameCheck").text("Name must be more than 3 and less than 20 characters");
        $("#nameCheck").css("color", "red");
        $("#name").addClass("input-error");
        nameError = false;
        return false;
      } else if (nameValue.length < 3 || nameValue.length > 20) {
        $("#nameCheck").text("Name must be more than 3 and less than 20 characters");
        $("#nameCheck").css("color", "red");
        $("#name").addClass("input-error");
        nameError = false;
        return false;
      } else if (/[^a-zA-Z ]/g.test(nameValue)) {
        $("#nameCheck").text("Name mustn't include numbers or symbols");
        $("#nameCheck").css("color", "red");
        $("#name").addClass("input-error");
        nameError = false;
        return false;
      } else {
        $("#nameCheck").text("Name must be more than 3 and less than 20 characters");
        $("#nameCheck").css("color", "black");
        $("#name").removeClass("input-error");
        nameError = true;
        return true;
      }
    }
    function validateEmail() {
        const email = document.getElementById("email");
        const emailCheck = document.getElementById("emailCheck");
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            emailError = true;
            emailCheck.style.color = 'black';
            email.classList.remove("input-error");
            return true;
        } else {
            emailError = false;
            emailCheck.style.color = 'red';
            email.classList.add("input-error");
            return false;
        }
    }
    function validatePriority() {
        let priorityValue = $("#priority").val();
        if(priorityValue < 1 || priorityValue > 5) {
            $("#priorityCheck").css("color", "red");
            $("#priority").addClass("input-error");
            priorityError = false;
            return false;
        } else {
            $("#priorityCheck").css("color", "black");
            $("#priority").removeClass("input-error");
            priorityError = true;
            return true;
        }
    }
    function validateQuestion() {
        let questionValue = $("#question").val();
        if(questionValue.length < 10) {
            $("#questionCheck").css("color", "red");
            $("#question").addClass("input-error");
            questionError = false;
            return false;
        } else {
            $("#questionCheck").css("color", "black");
            $("#question").removeClass("input-error");
            questionError = true;
            return true;
        }
    }

    $("#submitbtn").click(function () {
        validateName();
        validateEmail();
        validatePriority();
        validateQuestion();
        if(nameError && emailError && priorityError && questionError) {
            $("#form").submit();
            return true;
        } else {
            return false;
        }
    });

    $("#faqbtn").click(function () {
        $(".bgblur").fadeIn("fast");
        $(".faq-popup").fadeIn("fast");
    });

    $("#popup-close").click(function () {
        $(".bgblur").fadeOut("fast");
        $(".faq-popup").fadeOut("fast");
    });
});