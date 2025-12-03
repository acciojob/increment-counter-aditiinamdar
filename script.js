//your JS code here. If required.
 const counterElement = document.getElementById('counter');
        const incrementButton = document.getElementById('incrementBtn');
        let counter = 0;

        incrementButton.addEventListener('click', function() {
            alert(`Current value: ${counter}`);
            counter++;
            counterElement.textContent = counter;
        });