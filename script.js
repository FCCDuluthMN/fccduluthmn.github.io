var hid = true;

//functions for the menu bar disappearing trick
function toggle(element, myClass) {
    if (hid) {
        removeClass(element, myClass);
    }
    else {
        addClass(element, myClass);
    }
    hid = !hid;
}

function addClass(element, myClass) {
    element.className += ' ' + myClass; 
}

function removeClass(element, myClass) {
    var reg = new RegExp('(^| )'+myClass+'($| )','g');
    element.className = element.className.replace(reg,' ');
}