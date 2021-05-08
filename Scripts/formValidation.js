(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get form groups requring validation
      var forms = document.getElementsByClassName('needs-validation');
      // Prevent submission if form group not completed
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();