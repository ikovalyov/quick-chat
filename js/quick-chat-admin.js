// Quick Chat 4.13 - admin
function quick_chat_clean_private(){jQuery.post(quick_chat_admin.ajaxurl,{action:"quick-chat-ajax-clean-private"},function(a){alert(quick_chat_admin.i18n.clean_private_done)})}
jQuery(window).load(function(){jQuery("a#quick_chat_clean_private").on("click",function(a){a.preventDefault();confirm(quick_chat_admin.i18n.clean_private_confirm)&&quick_chat_clean_private()});jQuery("a.quick_chat_show_hide").on("click",function(a){a.preventDefault();"Show"==jQuery(this).text()?jQuery(this).text("Hide").siblings("textarea").slideDown("slow"):jQuery(this).text("Show").siblings("textarea").slideUp("slow")})});