const textConfig = {
  text1: "Helo mỹ nữ!",
  text2: "Ngày xuân long phụng sum vầy, có anh vẫn đứng chờ nàng du xuân!",
  text3: "Lại một năm sắp trôi qua, em có thể dành thời gian cùng anh nhìn lại bốn mùa được khong?",
  text4: " ",
  text5: "Em bận mất roii :( ",
  text6: "Okilaa :3",
  text7: "Muốn cùng em đi ăn tối, ngắm hoa. Cho anh xin một ngày trống lịch của em nhée <3",
  text8: "Gửi cho anhh!",
  text9: " ",
  text10: " Ví anh như một hình tròn, vì không thể thiếu Tâmmmm",
  text11: "Hẹn em một ngày gặp nhau thật gần nha!!! Còn giờ thì chờ gì nữa mà ko inbox cho anh nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  // function textGenerate() {
  //   var n = "";
  //   var text = " " + textConfig.text9;
  //   var a = Array.from(text);
  //   var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
  //   var count = textVal.length;
  //   if (count > 0) {
  //     for (let i = 1; i <= count; i++) {
  //       n = n + a[i];
  //       if (i == text.length + 1) {
  //         $("#txtReason").val("");
  //         n = "";
  //         break;
  //       }
  //     }
  //   }
  //   $("#txtReason").val(n);
  // }

  function textGenerate() {
  var textVal = $("#txtReason").val(); // Get the current value of the input field
  console.log(textVal); // Optional: Log the current input for debugging purposes
}
  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='dd/mm/yyy'>",
      // html: true,
      width: 900,
      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
            var reason = $("#txtReason").val(); // Get the value from the input field
            // Send the data to Google Form using AJAX
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScx78bMlagQb0OZJrEcctnjyo5bLw46Zkewemcm5CsBNGCXIQ/formResponse",  // Replace with your Google Form action URL
                data: {
                    "entry.1920032461": reason  // Replace with your field's entry ID
                },
                type: "POST",
                dataType: "xml",
                success: function (response) {
                    console.log("Data successfully sent to Google Form");
                },
                error: function (error) {
                    console.log("Error sending data", error);
                }
            });
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/ThanhY06/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
