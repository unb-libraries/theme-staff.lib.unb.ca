jQuery(document).ready( function() { 
  // Fix menu list items not containing a submenu yet classed as "collapsed", eg. Import
  jQuery(".menu li:not(:has(ul))").removeClass("collapsed").addClass("leaf");  
  
  // remove href attribute from first link of "expanded" menu list items: act as toggle item
  jQuery(".menu li.expanded>a").removeAttr("href");
  //jQuery(".menu .menu li.expanded>a").removeAttr("href").css("cursor","pointer");
   
  // collapse submenu items by default; flag submenu as clicked/expanded if it contains the active link 
  jQuery(".menu .menu li.expanded").find('a:not(".active-trail")').next("ul").hide();
  jQuery(".menu .menu li.expanded a.active-trail").parent().toggleClass("clicked");
  
  // click to expand/collapse submenu items, cliced class adjust arrow icon
  jQuery(".menu .menu li.expanded>a").click(function() {
    jQuery(this).parent().toggleClass("clicked");
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

  // Views 'Outline' block h2 toggles Book hierarchy list links
  jQuery("#block-views-outline-block h2").click(function() {
    jQuery(this).siblings(".content").slideToggle(300);
  });

  // Override Open Framework responsive navigation menu button text: Navigation menu block title
  jQuery(".navbar-inner span.hide").text(function() {
    return jQuery(this).text().replace("Navigation menu", "Navigation");
  });
  
  // Design Requests page fix: all content hidden until 'edit-supervisor-approved' checkbox checked
  jQuery("#edit-supervisor-approved").click(function() { 
    jQuery(this).parents("div").next("div").find("fieldset").toggleClass("wrapper-expanded wrapper-collapsed");
  });
});
