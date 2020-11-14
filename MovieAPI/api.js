var key = "236d17fe"

$(document).ready(function(){
    $("#movieForm").submit(function(event){
        event.preventDefault()

        var movie =$("#movie").val()

        var url="http://www.omdbapi.com/?i=tt3896198&apikey="+key;

        var result =""

        //var posterURL="http://img.omdbapi.com/?i=tt3896198&apikey="+key

        $.ajax({
            method:'GET',
            url:url+"&t="+movie,
            success:function(data){
                console.log(data)

                result= `
                <img style="float:left" class="img-thumbnail" width="200" height="200" src="${data.Poster}"/>
                <h2>${data.Title}</h2>
                <h2>${data.Released}</h2>
                <h2>${data.Runtime}</h2>
                `;

                $("#result").html(result)
            }
        });


    });
});