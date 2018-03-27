$(document).ready(function(){
  $.ajax({
				url:	"http://date.jsontest.com",
				data:	{},
				type:	"GET",
				dataType	:	"json",
				success:	function(	json	)	{
          console.log(json);
        },
				error:	function(	xhr,	status,
				      errorThrown	)	{ console.log(status);},
				complete:	function(	xhr,	status	){ console.log("Done");}
  });
  $.ajax({
      url:	"https://swapi.co/api/people/4/",
      data:	{},
      type:	"GET",
      dataType	:	"json",
      success:	function(	json	)	{
        console.log(json);
      },
      error:	function(	xhr,	status,
            errorThrown	)	{ console.log(status);},
      complete:	function(	xhr,	status	){ console.log("Done");}
    });

});
