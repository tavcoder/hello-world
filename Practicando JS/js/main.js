$(document).ready(function () {
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        pager: false, // quitar 3 puntos bajo el slider
        slideWidth: 1200
    });

    //Post
    var posts = [
        {
            title: 'Prueba de título 1',
            date: new Date(),
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
        },
        {
            title: 'Prueba de título 2',
            date: new Date(),
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
        },
        {
            title: 'Prueba de título 3',
            date: new Date(),
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
        },
        {
            title: 'Prueba de título 4',
            date: new Date(),
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
        },
        {
            title: 'Prueba de título 5',
            date: new Date(),
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
        },
    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span>${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
    </article>`;
        $("#posts").append(post);
    });

    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();// para que el link no haga su función de llevarnos a algún sitio
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});