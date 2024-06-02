const onDomLoaded = () => {
    // Set the date we're counting down to
    const countDownDate = new Date("2024-10-04T16:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="countdown"
        const div = document.createElement('div');
        const container = document.getElementById("countdown");
        const texts = [months, days, hours, minutes, seconds, "hónap", "nap", "óra", "perc", "másodperc"];

        div.classList.add('textGrid');
        texts.forEach((text) => div.appendChild(createDiv(text, 'item')));

        container.innerHTML = '';
        container.appendChild(div);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
};

const createDiv = (text, cssClass) => {
    const div = document.createElement('div');

    div.innerHTML = text;

    if (cssClass) {
        div.classList.add(cssClass);
    }

    return div;
}

document.addEventListener('DOMContentLoaded', onDomLoaded);