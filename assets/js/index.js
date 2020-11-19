//const {}  = require("../../server/controller/controller");

$('#add_user').submit(function(){
    alert('data insert successfully')
})

$('#update_user').submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={};

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']

    })     
        var request={
            'url':`http://localhost:8080/api/users/${data.id}`,
            'method':'PUT',
            'data':data

        }

        $.ajax(request).done(function(response){

            alert('data updated successfully')
       
        })

    })


if(window.location.pathname == '/')
{

    $ondelete=$('.table tbody td a.delete')
    $ondelete.click(function(){

        var id=$(this).attr('data-id')

        console.log(id)

        var request={
            'url':`http://localhost:8080/api/users/${id}`,
            'method':'DELETE'

        }
        if(confirm('do you really want to delete this record?')){

            $.ajax(request).done(function (response) {


                alert('data deleted successfully');
                location.reload
                
            })
        }
    })
}