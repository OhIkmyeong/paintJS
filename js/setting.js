export const SIZE_CV = {
    wid:700,
    hei:700
};

export function set_canvas(cv){
    cv.width = SIZE_CV.wid; 
    cv.height = SIZE_CV.hei;
}//set_canvas

export function reset_canvas(ctx){
    const{wid, hei} = SIZE_CV;
    ctx.clearRect(0,0,wid,hei);
}//reset_canvas

export function save_canvas(cv){
    const link = document.createElement('A');
    link.href = cv.toDataURL("image/png");
    link.download = 'paintJS'
    link.click();
}