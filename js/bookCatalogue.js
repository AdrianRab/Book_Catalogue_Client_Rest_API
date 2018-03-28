$(document).ready(function(){
  var allBooks = $('#allBooks');

  allBooksList();

  function allBooksList() {
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
              var title = $('<div>').text(json[i].id + '. '+ json[i].title);
              title.addClass('list-group-item-action book-title');

              var emptyDiv= $('<div>');
              emptyDiv.addClass('empty-div').hide();
              emptyDiv.attr("hidden");

              var buttons = $('<div>');
              buttons.addClass('book-buttons');

              var bookId = $('<p>').text(json[i].id);
              bookId.addClass("book-id").hide();

              var author = $('<p>').text('Author: ' +json[i].author);
              author.addClass('list-group-item-action  book-author');

              var publisher = $('<p>').text('Publisher: ' + json[i].publisher);
              publisher.addClass('list-group-item-action book-publisher');

              var type = $('<p>').text('Genre: ' +json[i].type);
              type.addClass('list-group-item-action book-type');

              var isbn = $('<p>').text('ISBN number: ' +json[i].isbn);
              isbn.addClass('list-group-item-action book-isbn');

              var space = $('<br>');

              var showDetailsBtn =$('<button>').text("Show details");
              showDetailsBtn.addClass('button is-primary show');

              var deleteBook = $('<button>').text('Delete ' + json[i].title);
              deleteBook.addClass('button is-danger del');

              emptyDiv.append(space, author, publisher, type, isbn, space);
              buttons.append(showDetailsBtn, space, deleteBook)
              title.append(space, emptyDiv, space, buttons, space, space);
              newBook.append(title);
              allBooks.append(newBook);
            }
            showBookDetails();
          })
  				.fail(function(xhr,	status,
  				      errorThrown){
                   console.log(status)
                	})
  				.always(function(xhr,	status	){
            console.log("Title upload - finished")
              });
        }

    function showBookDetails() {
      var showButton = $('.show');
      showButton.on('click', function(){
      $(this).parent().siblings('div').toggle(500);
          });
      };

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
