// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const enterMatrixButton = document.getElementById('enterTheMatrix');
    const sections = document.querySelectorAll('section');

    // Add event listener for mouseenter
    enterMatrixButton.addEventListener('mouseenter', function() {
        // Apply hover styles to Enter the Matrix button
        enterMatrixButton.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
        enterMatrixButton.style.color = 'white';
        enterMatrixButton.style.cursor = 'pointer';
        enterMatrixButton.style.transition = 'width 0.3s ease';
        enterMatrixButton.style.width = '200px';
        enterMatrixButton.style.transform = 'translateX(100px)';

        // Hide all other sections on hover
        sections.forEach(section => {
            if (section.id !== 'enterTheMatrixSection') { // Replace with your section ID
                section.style.display = 'none';
            }
        });

        // Optionally, change background color of body or other elements
        document.body.style.backgroundColor = 'black'; // Change body background color
    });

    // Add event listener for mouseleave
    enterMatrixButton.addEventListener('mouseleave', function() {
        // Remove hover styles from Enter the Matrix button
        enterMatrixButton.style.backgroundColor = '';
        enterMatrixButton.style.color = '';
        enterMatrixButton.style.cursor = '';
        enterMatrixButton.style.transition = 'width 0.3s ease';
        enterMatrixButton.style.width = '';
        enterMatrixButton.style.transform = '';

        // Show all sections on mouse leave
        sections.forEach(section => {
            section.style.display = ''; // Restore default display property
        });

        // Optionally, reset background color of body or other elements
        document.body.style.backgroundColor = ''; // Reset body background color
    });

    // Add click event listener to navigate to Page2/index.html
    enterMatrixButton.addEventListener('click', function() {
        window.location.href = 'index2.html';
    });
});
