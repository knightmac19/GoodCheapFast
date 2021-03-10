$(document).ready(() => {
    console.log('script ready');

    var good = $('#good');
    var fast = $('#fast');
    var cheap = $('#cheap');

    const runCheck = el => {
        if (el[0].checked) {
            console.log(el[0].id + ' ' + el[0].checked)
        } else {
            console.log(el[0].id + ' ' + el[0].checked)
        }
    }

    good.on('change', function() {
        runCheck(good);
    })

    fast.on('change', function() {
        runCheck(fast);
    })

    cheap.on('change', function() {
        runCheck(cheap);
    })

    

});

