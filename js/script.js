!function(n){n.fn.menumaker=function(s){var e=n(this),i=n.extend({format:"dropdown",sticky:!1},s);return this.each(function(){return e.prepend('<div id="menu-button" class="menu_border"></div>'),n(this).find("#menu-button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.hide().removeClass("open"):(s.show().addClass("open"),"dropdown"===i.format&&s.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").hide():n(this).siblings("ul").addClass("open").show()})},"multitoggle"===i.format?multiTg():e.addClass("dropdown"),i.sticky===!0&&e.css("position","fixed"),resizeFix=function(){n(window).width()>991&&e.find("ul").show(),n(window).width()<=991&&e.find("ul").hide().removeClass("open")},resizeFix(),n(window).on("resize",resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery);

//year sccript

var currentYear = (new Date).getFullYear();
$(document).ready(function() {
$("#copyright-year").text( (new Date).getFullYear() );
});