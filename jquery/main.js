//$("h1").text("GoodByeWorld") // changing text 

//html Selector and text manipulation

//$(".my-class h1").text("This is not heading") //for class
//$("#hp").text("Okay") //for id
//$("#hp,p").text("Okay") // multiple elements

//$("p").html("<b>Hello</b>"); // for bold text 
//$("p").append("bold"); // for adding text 
//$("p").prepend("bold") //for adding text before 

//how to add text before and after

/*
var myPara=$("<p></p>").text("this is paragraph one");
//$("p").after(myPara) // adding text after
//$("p").before(myPara) // adding text before 
*/


//attribute manipulation 
//$("a").attr("href")
//$("a").removeAttr('href');


//css style manipulating
//$("p").css("color","red") //for color 

//$("p").css({"color":"green","font-size":"100px"}) //jquery in json format 

//Event Listener in JQuery
/*
$("button").click(function() {
    $("h1").text("You have clicked The button")
})
*/

//Login demo project Event Listener
/*
$("#loginButton").click(function() {
    var password1=$("#pass1").val();
    var password2=$("#pass2").val();

    if(password1 !="" && password2!=""){
        if(password1==password2){
            alert("Successfully Login")
        }
        else{
            alert("login Denied")
        }

    }
    else{
        alert("Please Enter Password");
    }


})
*/