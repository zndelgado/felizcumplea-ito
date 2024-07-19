$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(function() {
            envelope.addClass("large");
        }, 3000); // Retraso adicional de 1 segundo antes de agregar la clase 'large'
    }

    function close() {
        envelope.addClass("close").removeClass("open large");
    }
});
