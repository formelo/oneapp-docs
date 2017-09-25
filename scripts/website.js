$(document).ready(function() {
    var headerEl = document.querySelector('.book-header');
    var summaryEl = document.querySelector('.book.with-summary');
    summaryEl.addEventListener('click', function (e) {
        if (e.srcElement === summaryEl && e.offsetY < headerEl.offsetHeight) {
            document.location = 'https://formelo.com';
        }
    });
});
