(function ($) {
    "use strict";

    var $window = $(window);

    // Function to show notification
    function showNotification() {
        var notification = $('#notification');
        notification.css('display', 'block');
        
        // Hide notification after 3 seconds
        setTimeout(function() {
            notification.css('display', 'none');
        }, 3000); // 3000 milliseconds = 3 seconds
    }
    // Submit form function
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            type: 'POST',
            url: url,
            data: form.serialize(),
            success: function(response) {
                // Show success notification
                showNotification();
                // Optionally, clear the form fields
                form.trigger('reset');
            },
            error: function(err) {
                console.log('Error:', err);
                // Handle errors if any
            }
        });
    });
    // Zoom screenshot
    $('.portfolio-entry').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't forget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    // Submit form function
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            type: 'POST',
            url: url,
            data: form.serialize(),
            success: function(response) {
                // Show success notification
                showNotification();
                // Optionally, clear the form fields
                form.trigger('reset');
            },
            error: function(err) {
                console.log('Error:', err);
                // Handle errors if any
            }
        });
    });

})(jQuery);
