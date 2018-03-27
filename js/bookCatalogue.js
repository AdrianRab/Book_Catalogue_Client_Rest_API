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

              var author = $('<p>').text(json[i].author);
              author.addClass('list-group-item-action');
              var publisher = $('<p>').text(json[i].publisher);
              publisher.addClass('list-group-item-action');
              var type = $('<p>').text(json[i].type);
              type.addClass('list-group-item-action');
              var isbn = $('<p>').text(json[i].isbn);
              isbn.addClass('list-group-item-action');
              titleDiv.addClass('hidden');
              titleDiv.attr("hidden");
              titleDiv.append(author, publisher, type, isbn);
              newBook.append(title);
              title.append(titleDiv);
              allBooks.append(newBook);

              console.log(json);
              console.log(json[i].author);
              console.log(json[i].title);
            }
            title.on('click', function(){
              titleDiv.toggle('hidden');
              if (titleDiv.attr('hidden')) {
                  titleDiv.removeAttr('hidden');
              }else {
                titleDiv.attr('hidden');
              }
            });
          })
  				.fail(function(xhr,	status,
  				      errorThrown){
                   console.log(status)
                	})
  				.always(function(xhr,	status	){
            console.log("Title upload - finished")
              });

          // var newBooksLi = $('#allBooks li .hidden')
          // newBooksLi.on('click',function () {
          // $.ajax({
          //   url:	'http://localhost:8282/books',
          //       data: {id: $(this).id},
          //       type:"GET",
          //       dataType: "json",
          //       })
          //   .done(function(json1){
          //       var author = $('<p>').text(json1.author);
          //       author.addClass('list-group-item-action');
          //       var publisher = $('<p>').text(json1.publisher);
          //       publisher.addClass('list-group-item-action');
          //       var type = $('<p>').text(json1.type);
          //       type.addClass('list-group-item-action');
          //       var isbn = $('<p>').text(json1.isbn);
          //       isbn.addClass('list-group-item-action');
          //       titleDiv.toggle('hidden');
          //       titleDiv.append(author, publisher, type, isbn);
          //       console.log($(this).author);
          //   })
          //   .fail(function(xhr,	status,
          //       errorThrown){
          //         console.log(status)
          //       })
          //     .always(function(xhr,	status	){
          //         console.log("Book details - finished")
          //         });
          //   });
    // $.ajax({
    // url: 'http://localhost:8282/books/'
    // ,
    // headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json'
    // },
    // type: 'POST'
    // ,
    // data: JSON.stringify(book)
    // ,
    // dataType: "application/json",
    //
    // success: console.log('PUT completed')
    // });

});
