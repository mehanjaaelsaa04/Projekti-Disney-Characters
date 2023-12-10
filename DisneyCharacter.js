function scrollToLetter(letter) {
    var element = document.getElementById(letter);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

