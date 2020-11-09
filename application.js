let button = document.getElementById('loadButton');
let content = document.getElementById('content');

button.addEventListener('click', loadPosts);

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
    $(document).ready(() => {
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });

          $("#loadButton").hover(function(){
            $(this).css("background-color", "red");
            }, function(){
            $(this).css("background-color", "green");
          });
    })
}

function loadPosts() {
    $(document).ready(() => {
        $(".items").animate({height: "200px"});
        
        $.ajax('https://www.reddit.com/r/deadbydaylight/top.json?limit=12').then(result => {
            console.log('RESULT', result);
            for (let i = 0; i < 12; i++) {
                console.log(result.data.children[i].data.title);
                console.log(result.data.children[i].data.url)
                document.getElementById('title' + i).innerText = 'Title: ' + result.data.children[i].data.title;
                document.getElementById('url' + i).innerText = 'URL: ' + result.data.children[i].data.url;
                document.getElementById('link' + i).href = result.data.children[i].data.url;
            }
        })
    })
}
