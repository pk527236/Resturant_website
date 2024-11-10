document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all links
  document.querySelectorAll('a').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using window.scrollTo with smooth behavior to add smooth page scroll
        var targetElement = document.querySelector(hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });

          // Update the URL hash after the scroll
          window.history.pushState(null, null, hash);
        }
      }
    });
  });
});







// $(document).ready(function () {
//     // Add smooth scrolling to all links
//     $("a").on("click", function (event) {
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();

//         // Store hash
//         var hash = this.hash;

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $("html, body").animate(
//           {
//             scrollTop: $(hash).offset().top,
//           },
//           800,
//           function () {
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;
//           }
//         );
//       } // End if
//     });
//   });
