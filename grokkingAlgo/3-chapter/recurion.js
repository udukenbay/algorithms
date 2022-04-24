/**

*/
//simple
let look_for_key = function(main_box) {
    let pile = main_box.make_a_pile_to_look_through();
    while(pile != null) {
        let box = pile.grab_a_box();
        box.map((item) => {
            if(item.is_a_box())
                return pile.push(item)
            else if(item.is_a_key())
                return "found the key!";
        });
    }
}

//recursion
let look_for_key_r = function(box) {
    box.map((item) => {
        if(item.is_a_box())
            look_for_key_r(item);
        else if(item.is_a_key())
            return "found the key!";
    });
}

function countdown(i) {
    console.log(i);
    if(i <= 1)//базовый случай
        return 1;
    else//рекурсивный случай
        countdown(i-1);
}