jQuery.noConflict(); 
jQuery.noConflict(); 
jQuery(document).ready(function($){
		
		/*
		//button hover
		$('#start_chat').hover(
			function(){
				$('img',this).attr('src','/js/jquerychat/btn-try-b.png');
			},
			function(){
				$('img',this).attr('src','/js/jquerychat/btn-try-a.png');
			}	
		);
		
		$('#submit_btn').hover(
			function(){
				$(this).attr('src','/js/jquerychat/btn-buy-b.png');
			},
			function(){
				$(this).attr('src','/js/jquerychat/btn-buy-a.png');
			}	
		);
		
		*/
		
		//DEMO CHAT START
		/*$('#start_chat').click(function(){
			//check if chat's not already popped up
			if($('.chatbox').length == 0){
			
				//open chat window
				$('body').append('<div class="chatbox" id="chat_window" title="Demo Bot">'+
					'<div class="header" title="Demo Bot">'+
						'<p>Demo Bot</p>'+
						'<a href="#" class="close_chatbox" title="close chat window">X</a>'+
						'<a href="#" class="minimize_chatbox" title="minimize chat window">_</a>'+
						'<a href="#" class="maximize_chatbox" title="maximize chat window">&#8254;</a>'+
					'</div>'+
					'<div class="chat_area" title="Demo Bot">'+
					'</div>'+
					'<div class="chat_info"><p></p></div>'+					
					'<div class="chat_message" title="Type your message here">'+
						'<textarea></textarea>'+
					'</div>'+
				'</div>');
			
				//display welcome messages
				setTimeout(function(){
					printChat('<p><b>Demo Bot: </b>Hello!</p>');		
					
					botMsg('I\'m a demo bot and I\'ll repeat what you write! :)');
				}, 600);

				
			
			}	
			
			return false;
		})
		*/
		
		
		//ADD TO CHAT AREA
		function printChat(text){
			//replace smileys
			text = replaceEmoticons(text);
			
			//replace links
			var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
			text = text.replace(exp,"<a href='$1'>$1</a>"); 
						
			var textArea = $('#stream .mCSB_container');
			textArea.append(text);				
			
			scrollToBottom();
		}
		
		function scrollToBottom() {
			var outerDivHgt = $('#mCSB_1').height();
			var scrollDivHgt = $('.mCSB_container').height();
			
			var scrollDivTop = outerDivHgt - scrollDivHgt;
			
			$('.mCSB_container').css('top', scrollDivTop + 'px');
			$('.mCSB_dragger').css('top', $('.mCSB_dragger').height() + 10 + 'px');
		}
		
		function addToChatBox(text) {
			
			text = $('#full').val() + ' ' + text;
			$('#full').val(text);	
		}
		
		function replaceEmoticons(text) {
			text = text.replaceAll(':)','<span class="emoticons _01"></span>');
			text = text.replaceAll(':-)','<span class="emoticons _01"></span>');
			text = text.replaceAll(':()','<span class="emoticons _02"></span>');
			text = text.replaceAll(':D','<span class="emoticons _03"></span>');
			text = text.replaceAll('(idea)','<span class="emoticons _04"></span>');
			text = text.replaceAll(':(','<span class="emoticons _05"></span>');
			text = text.replaceAll(':-(','<span class="emoticons _05"></span>');
			text = text.replaceAll(':p','<span class="emoticons _06"></span>');
			text = text.replaceAll(':P','<span class="emoticons _06"></span>');
			text = text.replaceAll(':o','<span class="emoticons _07"></span>');
			text = text.replaceAll(':O','<span class="emoticons _07"></span>');
			text = text.replaceAll('(gift)','<span class="emoticons _08"></span>');
			
			return text;
		}
		
		/*
		//BOT ANSWER
		function botMsg(text){
			//is typing for 2 sec but wait a sec to react
			
			setTimeout(function(){			
				$('#chat_window .chat_info p').text('Demo Bot is typing...');
				
				//print message
				setTimeout(function(){				
					//remove is typing also
					$('#chat_window .chat_info p').text('');
						
					//print msg
					printChat('<p><b>Demo Bot: </b>'+text+'</p>');				
				}, 2000);
				
			}, 700);			
		}
		*/
		
		$('#emoticons li .toolTipHover').click(function (e) {
			e.preventDefault();
			
			addToChatBox($(this).attr('data-original-title'));
		});
		
		$('#responses li a').bind('click', function(e) {
			e.preventDefault();
			
			addToChatBox($(this).text());
		});

		key('ctrl+M', function(){ 
			// ctrl + M key pressed
			showHideFindBox();
		});
		
		$('#findBox').keydown(function(e) {
			// ctrl key pressed
			if(e.ctrlKey) {
				// M key pressed
				if (e.keyCode == 77) {
					showHideFindBox();
				}
			}
			
			// Enter key pressed
			if (e.keyCode == 13) {
				moveOnSearch(1);
			}			
		});
		
		$('#full').keydown(function(e) {
			// ctrl key pressed
			if(e.ctrlKey) {
				// M key pressed
				if (e.keyCode == 77) {
					showHideFindBox();
				}
			}
			
		});
		
		
		$('#findBox').on('keyup', function (e) {		
			
			// Enter key not pressed
			if (e.keyCode != 13) {
				var textArea = "#stream .col-sm-10";
				unHighlight(textArea);
				
				searchAndHighlight($('#findBox').val(), textArea);
			}

		});
		
		$('.clearfix.operator a').bind('click', function(e) {
			e.preventDefault();
			
			var para = $(this).parent().parent().find('p');
			var editable = para.attr('contenteditable');
			if(editable == "true")
				para.attr('contenteditable', false);
			else {
				para.attr('contenteditable', true);
				$(this).parent().find('.fa-pencil-square-o').css('display', '');
			}
		});
			
		$('.clearfix.operator').mouseenter(function() {
			$(this).find('a').css('display','');
		}).mouseleave(function() {
			$(this).find('a').css('display','none');
		});
			
		$('#prev-search').bind('click', function(e) {
			e.preventDefault();
			
			moveOnSearch(-1)
		});
		
		$('#next-search').bind('click', function(e) {
			e.preventDefault();
			
			moveOnSearch(1)
		});
		
		/*key('ctrl+left', function(){ 
			// ctrl + left arrow key pressed
			moveOnSearch(-1)	
		});
		
		key('ctrl+right', function(){ 
			// ctrl + right arrow key pressed
			moveOnSearch(1)
		});*/
		
		function moveOnSearch(option) {
			var searchSpans = $('.label-warning');
			var prevSearchSpan = null;
			$('.label-warning').each(function() {
				
				if($(this).hasClass('searchText')) {
					$(this).removeClass('searchText');
					prevSearchSpan = $(this);
				} else if(prevSearchSpan != null) {
					
					$(this).addClass('searchText');
					$(this).focus();
					prevSearchSpan = null;
					/*var currentSpan = searchSpans[searchSpans.index(prevSearchSpan) + option]
					if(currentSpan != null) {
						prevSearchSpan = null;
						currentSpan.className += ' searchText';
					}
					*/
				}
				
			});
			
			if($('.searchText').length <= 0) {
				$('.label-warning:first').addClass('searchText');
				$('.label-warning:first').focus();
			} 
		}
		
		function showHideFindBox() {
			if($('#find').css('display') == 'none') {
				$('#find').css('display','');
			}
			else {
				$('#find').css('display','none');
				unHighlight("#stream .col-sm-10");
			}
		}
		
		function unHighlight(selector) {
			$(selector).each(function() {
				var parentElem = $(this);
				$(this).find('.label-warning').each(function() {
					prvSearchTerm = $(this).text();
					parentElem.html(parentElem.html()
					.replace('<span class="label-warning">'+prvSearchTerm+'</span>', prvSearchTerm));
				});
			});
		}
		
		function searchAndHighlight(searchTerm, selector) {
			if(searchTerm) {
				//var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
				//var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
				var selector = selector || "body";                             //default selector is body if none provided
				var searchTermRegEx = new RegExp(searchTerm,"ig");
				var matches = $(selector).text().match(searchTermRegEx);
				if(matches) {
				//	$(selector + ' .label-warning').removeClass('label-warning');     //Remove old search highlights
					//var prvSearchTerm = $(selector + ' .label-warning:first').text();

					$(selector).each(function() {
						/*var parentElem = $(this);
						$(this).find('.label-warning').each(function() {
							prvSearchTerm = $(this).text();
							parentElem.html(parentElem.html()
							.replace('<span class="label-warning">'+prvSearchTerm+'</span>', prvSearchTerm));
						});
						*/
						//$(this).html($(this).html()
						//.replaceAll('<span class="label-warning">'+prvSearchTerm+'</span>', prvSearchTerm, true));
						$(this).children().each(function() {
							$(this).html($(this).html()
							.replaceAll(searchTerm, '<span class="label-warning">'+searchTerm+'</span>', true));
						})
						
					});	
					
					/*if($('.label-warning:first').length) {             //if match found, scroll to where the first one appears
						$(selector).scrollTop($('selector .label.label-warning:first').position().top);
					}*/
					return true;
				}
			}
			return false;
		}
		
		//SEND USER MESSAGE
		$('#full').on('keypress', function (e) {
				if (e.keyCode == 13 && !e.shiftKey) {
					e.preventDefault();				

					var msg = $(this).val();
					//remove HTML
					msg = msg.replace(/<(?:.|\n)*?>/gm, '');
					
					
					//remove text from textarea
					$(this).val('');
					
					//add to chat area
					var operatorText = '<li class="clearfix operator"><div class="col-sm-10"><b>Kenny McKormmic</b>MSG_HERE</div><div class="col-sm-2"><span class="time">1 hour ago</span><i style="display: none;" class="fa fa-pencil-square-o toolTipHover ml10" data-toggle="tooltip" title="" data-placement="left" data-original-title="Message Edited"></i><a style="display: none;" type="button" class="btn btn2 br25 btn-xs edit toolTipHover" data-toggle="tooltip" title="" data-placement="left" data-original-title="Edit your message"><i class="fa fa-pencil "></i></a></div></li>';

					msg = '<p contenteditable="false">' + msg + '</p>';
	
					operatorText = operatorText.replace('MSG_HERE', msg);
					printChat(operatorText);
					
					setEventsOnRow(); 
					
					//bot answers
					//botMsg(msg);
				}
		});
		
		function setEventsOnRow() {
			$('.clearfix.operator:last a').bind('click', function(e) {
				e.preventDefault();
				
				var para = $(this).parent().parent().find('p');
				var editable = para.attr('contenteditable');
				if(editable == "true")
					para.attr('contenteditable', false);
				else {
					para.attr('contenteditable', true);
					$(this).parent().find('.fa-pencil-square-o').css('display', '');
				}
			});
			
			$('.clearfix.operator:last').mouseenter(function() {
				$(this).find('a').css('display','');
			}).mouseleave(function() {
				$(this).find('a').css('display','none');
			});
		}
		
		String.prototype.replaceAll = function(str1, str2, ignore) {
			return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string"	)?str2.replace(/\$/g,"$$$$"):str2);
		}

		/*
		//MINIMIZE WINDOW
		$('.minimize_chatbox').live('click',function(){
			//remove chat,message area			
			$(this).closest('.chatbox').find('.chat_area,.chat_message,.chat_info').css('height','0px');		
			$(this).closest('.chatbox').css('height','25px');
				
			//replace minimize icon
			$(this).css('display','none');
			$(this).closest('.chatbox').find('.maximize_chatbox').css('display','inline');
			
			return false;
		});
		
		
		//MAXIMIZE WINDOW
		$('.maximize_chatbox').live('click',function(){
			//remove chat,message area			
			$(this).closest('.chatbox').find('.chat_area').css('height','180px');		
			$(this).closest('.chatbox').find('.chat_message').css('height','55px');		
			$(this).closest('.chatbox').find('.chat_info').css('height','20px');		
			$(this).closest('.chatbox').css('height','300px');
				
			//replace minimize icon
			$(this).css('display','none');
			$(this).closest('.chatbox').find('.minimize_chatbox').css('display','inline');
			$(this).closest('.chatbox').find('.header .new_message').remove();
			
			return false;
		});
		
		
		//CLOSE WINDOW
		$('.close_chatbox').live('click',function(){
			$(this).closest('.chatbox').remove();						
				
			return false;
		});		
		*/
		
		
});
