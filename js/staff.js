jQuery(document).ready( function() { 
  // Fix menu list items that don't contain a submenu yet are classed as "collapsed" 
  jQuery(".menu li:not(:has(ul))").removeClass("collapsed").addClass("leaf");  
  
  // remove href attribute from first link of "expanded" menu list items, i.e. toggle only
  jQuery(".menu li.expanded>a").removeAttr("href").css("cursor","pointer");  
     
  // hide nested ul on click, preventing inheritance on children
  jQuery(".menu li.expanded>a").click(function() {
    jQuery(this).parent().toggleClass("expanded collapsed");
    jQuery(this).next("ul").slideToggle("fast");
  });

  // show nested ul on click
  jQuery(".menu li.collapsed").click(function() {
    jQuery(this).toggleClass("expanded collapsed");
    jQuery(this).next("ul").slideToggle("fast");
  });
    
  // class fieldsets as expanded (visible) or collapsed (hidden)
  jQuery(".fieldset-wrapper:hidden").parent().addClass("wrapper-collapsed");
  jQuery(".fieldset-wrapper:visible").parent().addClass("wrapper-expanded");
        
  // toggle expanding/collapsing fieldset content via legend click
  jQuery("fieldset legend").click(function() {
    jQuery(this).parent().toggleClass("wrapper-expanded wrapper-collapsed");
    jQuery(this).next(".fieldset-wrapper").slideToggle("fast");
  });

  // remove toggle link tags from fieldset legend - can click whole legend
  jQuery("a.fieldset-title").find("span").remove();
  jQuery("a.fieldset-title").each(function() {
    jQuery(this).replaceWith( jQuery(this).text() );
  });
  
  jQuery("#block-views-outline-block h2").click(function() {
    jQuery(this).siblings(".content").slideToggle(300);
  });
  jQuery("#sidebar-first h2").click(function() {
    jQuery("#sidebar-first").toggleClass("toggle-sb");
    jQuery("#sidebar-first + #content").toggleClass("toggle-sb");
  });
});
