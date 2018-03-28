$(document).ready(function(){
  var allBooks = $('#allBooks');

  $.ajax({
  				url:	'http://localhost:8282/books',
          data: {},
          type:"GET",
          dataType: "json",
        })
  				.done(function(json){
            var	newBook	=	$('<li>');
            newBook.addClass('list-group-item'); //stylowanie boostrapem
            for (var i = 0; i < json.length; i++) {
              var title = $('<div>').text(json[i].title);
              title.addClass('list-group-item-action');
              var titleDiv= $('<div>');
              titleDiv.addClass('hidden');
              newBook.append(title, titleDiv);
              allBooks.append(newBook);
              console.log(json);
            }
            newBook.on('click',function () {
              $.ajax({
                      url:	'http://localhost:8282/books/',
                      data: {id: $(this).id},
                      type:"GET",
                      dataType: "json",
                    })
                      .done(function(json1){
                          var author = $('<p>').text(json1.author);
                          author.addClass('list-group-item-action');
                          var publisher = $('<p>').text(json1.publisher);
                          publisher.addClass('list-group-item-action');
                          var type = $('<p>').text(json1.type);
                          type.addClass('list-group-item-action');
                          var isbn = $('<p>').text(json1.isbn);
                          isbn.addClass('list-group-item-action');
                          titleDiv.toggleClass('hidden');
                          titleDiv.append(author, publisher, type, isbn);
                          console.log($(this).author);
                      })
                      .fail(function(xhr,	status,
                            errorThrown){
                               console.log(status)
                              })
                      .always(function(xhr,	status	){
                        console.log("Book details - finished")
                });
            });
          })
  				.fail(function(xhr,	status,
  				      errorThrown){
                   console.log(status)
                	})
  				.always(function(xhr,	status	){
            console.log("Title upload - finished")
    });

});
