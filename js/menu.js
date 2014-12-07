define(function(require) {

    return function (el, options) {
        var self = this;
        this.el = el;
        this.isActive = false;

        this.toggle = function (e) {
            e.stopPropagation();
            self.isActive = !self.isActive;
            if (self.isActive) {
                self.el.classList.add('is-active');
            } else {
                self.el.classList.remove('is-active');
            }
        }

        this.el.addEventListener('click', function (e) {
            self.toggle(e);
        });
    }

});