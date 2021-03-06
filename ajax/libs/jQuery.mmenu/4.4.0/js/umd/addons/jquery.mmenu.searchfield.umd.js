(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(s){return"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[d].defaults[h],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo),s}function n(e){return e}function t(){c=!0,r=e[d]._c,o=e[d]._d,i=e[d]._e,r.add("search hassearch noresultsmsg noresults nosubresults"),i.add("search reset change"),l=e[d].glbl}function a(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var r,o,i,l,d="mmenu",h="searchfield",c=!1;e[d].prototype["_init_"+h]=function(l){c||t();var d=this.vars[h+"_added"];this.vars[h+"_added"]=!0,d||(this.opts[h]=s(this.opts[h]),this.conf[h]=n(this.conf[h]));var u=this,f=this.opts[h];if(this.conf[h],f.add){switch(f.addTo){case"menu":var p=this.$menu;break;case"panels":var p=l;break;default:var p=e(f.addTo,this.$menu).filter("."+r.panel)}p.length&&p.each(function(){var s=e(this),n=s.is("."+r.list)?"li":"div";if(!s.children(n+"."+r.search).length){if(s.is("."+r.menu))var t=u.$menu,a="prependTo";else var t=s.children().first(),a=t.is("."+r.subtitle)?"insertAfter":"insertBefore";e("<"+n+' class="'+r.search+'" />').append('<input placeholder="'+f.placeholder+'" type="text" autocomplete="off" />')[a](t)}f.noResults&&(s.is("."+r.menu)&&(s=s.children("."+r.panel).first()),n=s.is("."+r.list)?"li":"div",s.children(n+"."+r.noresultsmsg).length||e("<"+n+' class="'+r.noresultsmsg+'" />').html(f.noResults).appendTo(s))})}if(this.$menu.children("div."+r.search).length&&this.$menu.addClass(r.hassearch),f.search){var v=e("."+r.search,this.$menu);v.length&&v.each(function(){var s=e(this);if("menu"==f.addTo)var n=e("."+r.panel,u.$menu),t=u.$menu;else var n=s.closest("."+r.panel),t=n;var l=s.children("input"),d=u.__findAddBack(n,"."+r.list).children("li"),h=d.filter("."+r.label),c=d.not("."+r.subtitle).not("."+r.label).not("."+r.search).not("."+r.noresultsmsg),p="> a";f.showLinksOnly||(p+=", > span"),l.off(i.keyup+" "+i.change).on(i.keyup,function(e){a(e.keyCode)||s.trigger(i.search)}).on(i.change,function(){s.trigger(i.search)}),s.off(i.reset+" "+i.search).on(i.reset+" "+i.search,function(e){e.stopPropagation()}).on(i.reset,function(){s.trigger(i.search,[""])}).on(i.search,function(s,a){"string"==typeof a?l.val(a):a=l.val(),a=a.toLowerCase(),n.scrollTop(0),c.add(h).addClass(r.hidden),c.each(function(){var s=e(this);e(p,s).text().toLowerCase().indexOf(a)>-1&&s.add(s.prevAll("."+r.label).first()).removeClass(r.hidden)}),e(n.get().reverse()).each(function(s){var n=e(this),t=n.data(o.parent);if(t){var a=n.add(n.find("> ."+r.list)).find("> li").not("."+r.subtitle).not("."+r.search).not("."+r.noresultsmsg).not("."+r.label).not("."+r.hidden);a.length?t.removeClass(r.hidden).removeClass(r.nosubresults).prevAll("."+r.label).first().removeClass(r.hidden):"menu"==f.addTo&&(n.hasClass(r.opened)&&setTimeout(function(){t.trigger(i.open)},1.5*(s+1)*u.conf.openingInterval),t.addClass(r.nosubresults))}}),t[c.not("."+r.hidden).length?"removeClass":"addClass"](r.noresults)})})}},e[d].addons.push(h),e[d].defaults[h]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."}}(jQuery);
}));