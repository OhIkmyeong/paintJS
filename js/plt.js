let CURR_COLOR;

export function set_color(e,ctx){
    e = e || window.event;
    const target = e.target;
    if(target.tagName !== ("LI")){return;}
    set_plt(target);
    CURR_COLOR = target.style.backgroundColor;
    change_color(ctx,CURR_COLOR)
}//set_color

function set_plt(target){
    const all_children = target.parentElement.children;
    const siblings = Array.prototype.filter.call(all_children, 
        li=>{return li != target;});

    for(let LI of siblings){LI.classList.remove('on');}

    target.classList.add('on');
}/* set_plt */

export function change_color(ctx,curr){
    ctx.strokeStyle = curr; 
}//change_color