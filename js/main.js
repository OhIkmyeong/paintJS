import {set_canvas,reset_canvas, save_canvas} from "./setting.js"
import {set_color, change_color} from "./plt.js";
import {on_move, start_painting, stop_painting, fill_canvas, toggle_mode} from "./drawing.js"
import { set_line_width, change_line_width } from "./lineWidth.js";

const canvas = document.getElementById('cv');
const ctx = canvas.getContext('2d');
const ipt_stroke = document.getElementById('ipt_stroke'); 
const ul_plt = document.getElementById('ul_plt');
const btn_mode = document.getElementById('btn_mode');
const btn_save = document.getElementById('btn_save');
const btn_reset = document.getElementById('btn_reset');


/* ✨ 실행 */
/* 초기 세팅 */
/* CSS에서 설정하는것과 별개로 manipulating해줘야 정상적으로 나옴 */
/* canvas needs PIXEL MODIFIER */
set_canvas(canvas);
change_color(ctx,'#2c2c2c')
set_line_width(ctx,ipt_stroke.value);

/* 그리기 */
canvas.addEventListener('mousemove', e=>on_move(e,ctx));
canvas.addEventListener('mousedown', start_painting);
canvas.addEventListener('mouseleave', ()=>stop_painting(ctx));
canvas.addEventListener('mouseup', ()=>stop_painting(ctx));
canvas.addEventListener('click', ()=>fill_canvas(ctx,ul_plt));

/* 팔레트 색 지정 */
ul_plt.addEventListener('click',(e)=>{set_color(e,ctx)});

/* 선 굵기 지정 */
ipt_stroke.addEventListener('change', ()=>{change_line_width(ctx,ipt_stroke)});

/* 캔버스 FILL */
btn_mode.addEventListener('click',()=>{toggle_mode(btn_mode)});

/* 캔버스 저장 */
btn_save.addEventListener('click',()=>save_canvas(canvas));

/* 캔버스 리셋 */
btn_reset.addEventListener('click',()=>{reset_canvas(ctx)});