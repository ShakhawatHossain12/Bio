var $div=$("<div class='sign-in-background'></div>");

var $signInPage="<div class='sign-in-page'><i class='fa fa-times delete-cross' aria-hidden='true'></i>";
$signInPage += "<form method='post' action='edit.php' id='sing-in-form' style='width: 81%;padding-left: 100px;padding-top: 30px;'><div class='form-group'><label for='username'>User Name</label>";
$signInPage += "<input type='text' class='form-control' id='username' placeholder='Username' name='username'></div>";
$signInPage += "<div class='form-group'><label for='password'>Password</label>";
$signInPage += "<input type='password' class='form-control' id='password' placeholder='Password' name='password'></div>";
$signInPage += "<button type='submit' class='btn btn-info submit-btn'>Submit</button></form></div>";
$signInPage=$($signInPage);

$div.append($signInPage);

$(".sign-in").click(function(event) {
	$("body").append($div);
});
//console.log($signInPage);

//var selector=".sign-in-background:not('.sign-in-page')";

$("body").on('click','.delete-cross', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(".sign-in-background").remove();
});




// <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <button type="submit" class="btn btn-default">Submit</button>
// </form>