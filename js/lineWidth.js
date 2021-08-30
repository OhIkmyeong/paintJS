export function set_line_width(ctx,num){
    ctx.lineWidth = num;
}

export function change_line_width(ctx,ipt){
    const val = ipt.value;
    set_line_width(ctx,val);
}