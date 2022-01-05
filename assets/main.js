function readTextFile(file, callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                callback(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}
//usage:
readTextFile("../../database/list-image.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    $('.carousel-inner').empty();
    $('.row').empty();
    for(let i = 0; i < Object.keys(data).length; i++)
    {
        if(i == 0)
        {
            $('.carousel-inner').append(
            '<div class="carousel-item active">' +
                '<img class="d-block w-100 carousel-img" src="' + data[i].URL + '" alt="' + data[i].Title + '">' +
            '</div>'
        );

        }
        $('.carousel-inner').append(
            '<div class="carousel-item">' +
                '<img class="d-block w-100 carousel-img" src="' + data[i].URL + '" alt="' + data[i].Title + '">' +
            '</div>'
        );

        $('.row').append(
            '<div class="col-xl-3 col-md-4 col-sm-12 mt-4">'+
                '<a href="' + data[i].URL + '" target="_blank">' + 
                    '<img class="d-block w-100 img-item" src="' + data[i].URL + '" alt="' + data[i].Title + '">' +
                '</a>' +
            '</div>'
        );
    };
});



$( document ).ready(function() {
    $(".img-item").click(function () { 
        console.log("aaa")
    });
});