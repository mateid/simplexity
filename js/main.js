require(["menu"], function(menu) {

    var disclosures = document.querySelectorAll('[data-disclosure]');
    for (var i = 0; i < disclosures.length; i++) {
        new menu(disclosures[i]);
    }

});