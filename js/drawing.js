import {SIZE_CV} from "./setting.js"

let painting = false;
let filling = false;

export function on_move(e,ctx){
    const posX = e.offsetX;
    const posY = e.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(posX,posY);
    }else{
        ctx.lineTo(posX,posY);
        ctx.stroke();
    }
}//on_move

export function start_painting(){
    painting = true;
}//start_painting


export function stop_painting(ctx){
    painting = false;
    ctx.closePath();
}//on_up

export function fill_canvas(ctx,plt){
    if(!filling){return;}
    const color = plt.getElementsByClassName('on')[0].style.backgroundColor;
    ctx.fillStyle = color;
    ctx.fillRect(0,0,SIZE_CV.wid,SIZE_CV.hei);
}//fill_canvas

export function toggle_mode(btn){
    const curr_mode = btn.dataset.mode;
    switch(curr_mode){
        case "fill":
            btn.dataset.mode = "brush";
            filling = false;
            break;
        default :
            btn.dataset.mode = "fill";
            filling = true;
            break;
    }
    btn.innerText = btn.dataset.mode;
}//toggle_mode
