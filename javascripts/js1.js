<<<<<<< HEAD
$(function(){
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');

	var orderTemplate = ""+
	"<li>"+
	"<p><strong>name:</strong> {{name}}</p>"+
	"<p><strong> drink :</strong> {{drink}}</p>"+
	"<button data-id='{{id}}' class='remove'>X</button>"+
	"<li>";
	function addOrder(order)
	{
		$orders.append(Mustache.render(orderTemplate,order));
	}
	$.ajax({
		type: 'GET',
		url: '../api/orders.txt',
		success: function(orders){
			$.each(orders,function(i,order){
			addOrder(order);
			});
			
		},
		error: function()
		{
			alert("error loading data");
		}
	});

	$('#add-order').on('click',function() {
			var order={
				name: $name.val(),
				drink: $drink.val(),
			};
			$ajax({
				type: 'GET',
				url: '../api/orders.txt',
				data: order,
				success: function(orders){
					addOrder(order);
				},
				error: function()
				{
					alert("error loading data");
				}
				
			});
	});

	$orders.delegate('.remove','click',function() {
		var $li = $(this).cloasest('li');
			$.ajax{
				type:'DELETE',
				url: 'dfdfv'+$(this).attr('data-id'),
				success: function()
				{
				$li.fadeOut(300,function() {
					$(this).remove();
				}
			}
	});
=======
$(function(){
	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');

	var orderTemplate = ""+
	"<li>"+
	"<p><strong>name:</strong> {{name}}</p>"+
	"<p><strong> drink :</strong> {{drink}}</p>"+
	"<button data-id='{{id}}' class='remove'>X</button>"+
	"<li>";
	function addOrder(order)
	{
		$orders.append(Mustache.render(orderTemplate,order));
	}
	$.ajax({
		type: 'GET',
		url: '../api/orders.txt',
		success: function(orders){
			$.each(orders,function(i,order){
			addOrder(order);
			});
			
		},
		error: function()
		{
			alert("error loading data");
		}
	});

	$('#add-order').on('click',function() {
			var order={
				name: $name.val(),
				drink: $drink.val(),
			};
			$ajax({
				type: 'GET',
				url: '../api/orders.txt',
				data: order,
				success: function(orders){
					addOrder(order);
				},
				error: function()
				{
					alert("error loading data");
				}
				
			});
	});

	$orders.delegate('.remove','click',function() {
		var $li = $(this).cloasest('li');
			$.ajax{
				type:'DELETE',
				url: 'dfdfv'+$(this).attr('data-id'),
				success: function()
				{
				$li.fadeOut(300,function() {
					$(this).remove();
				}
			}
	});
>>>>>>> d17415d1d083bdfcae81984b0dad39e325ffff72
});