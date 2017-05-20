module.exports = function noBlurScreen(dispatch) {
    dispatch.hook('sAbnormalityBegin', 2, (event) => {
    //console.log('Abnormality:'+event.id+' Duration:'+event.duration+' Stacks:'+event.stacks)
    if(event.id == "70237" || event.id == "905434")
        {return false;}
      });
}