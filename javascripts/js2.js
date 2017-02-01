<<<<<<< HEAD
$(function () {

	var $title = $('#title');
	var $search = $('#search');
	var $myTable = $('#myTable');
	var $division = $('#division');
	var $display = $('#display');
	
	$('#search').on('click', function () {

		$.ajax({
			type:'GET',
			url:'http://www.omdbapi.com/?s=title',
			success:function(data) 
			{
				var flag = 0;
				$myTable.empty();
				var temp = data.Search;
				var th = "<tr><td>Title</td><td>Details</td></tr>";
				$("#myTable").append(th);
				$.each(temp, function( index, value ) {
				(value.Title);

					if(value.Title.toLowerCase().includes($title.val().toLowerCase()))
					{
						
						;
						var td1 = "<tr><td>" + value.Title + "</td>";
						var td2="<td id='trt1'>"+value.imdbID+"</td>";
						var button = "<td><button class='det' id='details'> Click for details</button></td></tr>";

						$("#myTable").append(td1 + td2 +button );
						flag = 1;
					}
					
				});
				if(flag == 0)
				{
					$("#myTable").append("Not found");
				}
				if(flag ==1)
				{
					flag =0;
				}
			}
		})
		
	});
	
	$myTable.delegate('.det','click',function()
	{
		var $local = $(this).closest('td').prev('td');
		var str = $local.text();

		var str1=str.substring(0,str.length-6);
		console.log(str1);
	    $('#division').append(str);

	    $.ajax({
	    	type:'GET',
			url:'http://www.omdbapi.com/?s=title',
			success:function(data) 
			{
				$division.empty();
				var tr="<tr><td><b>Title<b></td><td><b>IDMB</b></td><td><b>YEAR</b></td><td><b>Poster</b></td></tr>";
				$("#division").append(tr); 
				var flag=0;
				var mydata = data.Search;
				$.each(mydata, function( index, value ){
					if(value.imdbID===str)
				{
					
            	    var td1="<tr><td>"+value.Title+"</td>";
             		var td2="<td>"+value.imdbID+"</td>";
             		var td3="<td>"+value.Year+"</td>"
             		var td4="<td><img src='"+value.Poster+"' class='responsive' alt='jkjkj'/></td></tr>"
             		
        	    	
		       		$("#division").append(td1+td2+td3+td4); 


					flag=1;
					
				}
				else
				{

				}

				});
				if(flag==0)
			{
				$division.empty();
				$division.append("sorry not found");
			}
			if(flag==1)
			{
				flag=0;
			}


			}

	    })
	});
=======
$(function () {

	var $movies = $('#movies');
	var $title = $('#title');
	var $search = $('#search');

	$('#search').on('click', function () {

		$.ajax({
			type:'GET',
			url:'http://www.omdbapi.com/?s=title',
			success:function(data) 
			{
				var temp = data.Search;
				$.each(temp, function( index, value ) {
					(value.Title);

					if(value.Title.toLowerCase().includes($title.val().toLowerCase()))
					{
						$movies.empty();
						$movies.append( "<li>Title : " + value.Title + "</li>" );
						$movies.append( "<li>Year : " + value.Year + "</li>");
						$movies.append( "<li>IMDB : " + value.imdbID + "</li>");
						$movies.append( "<li>Type : " + value.Type +  "</li>");
						$movies.append( "<img src= ' " + value.Poster + " ' alt = 'No image'>");
						
					}
					else
					{
						
					}

				});
			}
		});
		
	})
>>>>>>> d17415d1d083bdfcae81984b0dad39e325ffff72
});