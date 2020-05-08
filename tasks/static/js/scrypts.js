$(document).ready(function(){
    
    var deletebtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');

    $(deletebtn).on('click', function(e){
        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Deletar esse Serviço ?');

        if(result) {
            window.location.href = delLink;
        }
    });

    console.log ('Funcionou');
    $(searchBtn).on('click', function(){
        searchForm.submit();
    });
});

