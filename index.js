const BLOCKED = [70237,905434,47660800,48733,48734,48735,48736,48737,48738,48739,70234,70235,70236,70238];

module.exports = function noDrunkScreen(dispatch) {

    dispatch.hook('S_ABNORMALITY_BEGIN', 2, _ => {
		if(BLOCKED.includes(_.id))return false	
     });
}