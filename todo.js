$("ul").on("click","li",function(){
$(this).toggleClass("done");
});

$("ul").on("click","span",function(event){
$(this).parent().fadeOut("0.2",function(){
$(this).remove();
});
event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
    if(event.which === 13)
    {
        var tolist = $(this).val();
       $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + tolist + "</li>"  ); 
       $(this).val("");
    }
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});