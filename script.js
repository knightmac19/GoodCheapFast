$(document).ready(() => {

    const inputs = $('.toggle-input');
    const good = $('#good')[0];
    const fast = $('#fast')[0];
    const cheap = $('#cheap')[0];

    $(inputs).on('change', e => {
        runCheck(e.target);
    });
    
    function runCheck(clicked) {
        if(good.checked && fast.checked && cheap.checked) {
            if(good === clicked) {
                fast.checked = false;
            }
            
            if(cheap === clicked) {
                good.checked = false;
            }
            
            if(fast === clicked) {
                cheap.checked = false;
            }
        }
    }
});

