$( "button" ).click(function() {
    total = null;
    $('.row .check input:checkbox:checked').each(function() {
        input = `${this.name}-input`;
        total += isNaN(document.getElementById(input).value) ? 0 : Number($(this).val() * document.getElementById(input).value);
    })

    document.querySelector('output').innerText = (Math.round(total * 100) / 100).toFixed(2);

    if (total <= 0) {
        document.getElementById('error').currentTime = 0;
        document.getElementById('error').play();
    } else {
        document.getElementById('success').currentTime = 0;
        document.getElementById('success').play();
    }
});



$( "input" ).keypress(function() {
    document.getElementById('click').currentTime = 0;
    document.getElementById('click').play();
});
