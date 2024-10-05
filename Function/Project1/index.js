const buttons = document.querySelectorAll(".image-button    "); 
const body = document.querySelector("body");

buttons.forEach((button1) => {
  button1.addEventListener('click', function(e) {
    if (e.target.src.includes('35A08D20-D69D-4775-8DA8-DA9D2D81BDB0_1_102_a.jpeg')) {
      body.style.backgroundImage = "url('35A08D20-D69D-4775-8DA8-DA9D2D81BDB0_1_102_a.jpeg')";
    }

    if (e.target.src.includes('B8020F32-620D-40E3-A12D-DF073FA62FA0_1_102_a.jpeg')) {
        body.style.backgroundImage = "url('B8020F32-620D-40E3-A12D-DF073FA62FA0_1_102_a.jpeg')";
    
      }

      if (e.target.src.includes('CC07F6E5-6EEE-4438-BA2F-285C5C6EAAD9_1_102_a.jpeg')) {
        body.style.backgroundImage = "url('CC07F6E5-6EEE-4438-BA2F-285C5C6EAAD9_1_102_a.jpeg')";
      }
  });
});
