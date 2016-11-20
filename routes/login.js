/**
 * http://usejsdoc.org/
 */
exports.auth = function(req, res){
	var html = '<h2>Login Successful!<h2><h3>Hello'+'Welcome to GoBitWheel<h2><br>' +
    '<a href="/">Try again.</a>';
    res.send(html);
};