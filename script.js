// Elements loading
$(document).ready(function(){
	 $(document).on('click', '.load_more', function(){
		var targetContainer = $('.load_products');
		var page =  $('.load_more').attr('href'); 
		var inc =  $('.load_more').attr('data'); 
		var big_container= $('.big_container');
		var products_showing = $('#products_showing'); 
		var max_count =  $('#showAll').attr('data'); 
		var show_by =  $('#number_message').attr('data'); 
	
		$.ajax({
			type: 'GET',
			url: page,
			dataType: 'html',
			data: {"IS_AJAX": "Y"},
			success: function(data){
				$('.loadload').remove();
				var elements = $(data).find('.resproducts'); 
				var pagination = $(data).find('.loadload'); 
				var el = show_by * inc;
				if(el > max_count){
					products_showing.html(max_count);
				}
				else
				{
					products_showing.html(el);
				}
				targetContainer.append(elements); 
				big_container.append(pagination); 			
			}
		})
		return false;
	 });
});

// Show by
$(document).ready(function(){
	$(document).on('click', '#products-number a', function(){
	   var targetContainer = $('.load_products');
	   var btnContainer = $('#products-number');
	   var count =  $(this).attr('data'); 
	   var products_showing = $('#products_showing'); 
	   var sort_by = $('#sort_by').val();
		   $.ajax({
			   type: 'GET',
			   url: '',
			   dataType: 'html',
			   data: {"IS_AJAX": "Y", "showBy": count, "sort": sort_by},
			   success: function(data){
				$('.loadload').remove();
				var elements = $(data).find('.resproducts'); 
				var number_message = $(data).find('#number_message'); 
				var showby = $(data).find('#products-number a'); 
				var pagination = $(data).find('.loadload'); 
				var productss = $(data).find('#productss'); 
				products_showing.html(count);
				btnContainer.html(number_message);
				btnContainer.append(showby); 
				btnContainer.append(productss); 
				targetContainer.html(elements); 
				$("a.btn.btn-default.btn-sm, span#productss").css("margin", "2px");
				$("#number_message").css("margin-right", "12px");
				targetContainer.append(pagination); 		
			   }
		   })
	   return false;
	});
});

// Sorting
$(document).ready(function(){
	$(document).on('change', '#sort_by', function()
	{
		var value = this.value;
		var targetContainer = $('.load_products');
		var btnContainer = $('#products-number');
		var products_showing = $('#products_showing'); 
		var show_by = $("a.btn.btn-default.btn-sm.btn-primary").attr('data'); 
		$.ajax
			({
				type: 'GET',
				url: '',
				dataType: 'html',
				data: {"IS_AJAX": "Y", "sort": value, "showBy": show_by},
				success: function(data){
					$('.loadload').remove();
					var elements = $(data).find('.resproducts'); 
					var number_message = $(data).find('#number_message'); 
					var showby = $(data).find('#products-number a'); 
					var pagination = $(data).find('.loadload'); 
					var productss = $(data).find('#productss'); 
					products_showing.html(show_by);
					btnContainer.html(number_message);
					btnContainer.append(showby); 
					btnContainer.append(productss); 
					$("a.btn.btn-default.btn-sm, span#productss").css("margin", "2px");
					$("#number_message").css("margin-right", "12px");
					targetContainer.html(elements); 
					targetContainer.append(pagination); 		
				}
			})
	});
});

//Pagination
$(document).ready(function(){
	$(document).on('click', 'ul li a.load_next_page', function(){
		var targetContainer = $('.load_products');
		var page =  $(this).attr('href'); 
		var big_container= $('.big_container');
		var show_by = $("a.btn.btn-default.btn-sm.btn-primary").attr('data');
		var products_showing = $('#products_showing'); 
	$.ajax({
		type: 'GET',
		url: page,
		dataType: 'html',
		data: {"IS_AJAX": "Y"},
		success: function(data){
			$('.loadload').remove();
			var elements = $(data).find('.resproducts'); 
			var pagination = $(data).find('.loadload');
			products_showing.html(show_by);
			targetContainer.html(elements); 
			big_container.append(pagination); 		
		}
	})
	return false;
	});
});



