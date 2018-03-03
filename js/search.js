// NYT Search JS

var q =  $("#searchTerm").val().trim()

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 

url + "?" + $.q({
  'api-key': "67889b89197849c38d3b8ad358a43165",
  
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});





