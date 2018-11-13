// Share buttons
jQuery(document).ready(function ($) {

  $('.rrssb-buttons').rrssb({
    // required:
    title: '{{ page.title }}',
    url: '{{ page.url | absolute_url }}',

    // optional:
    description: '{{ page.content | strip_html | truncatewords:25}}',
    emailBody: '{{ page.content | strip_html | truncatewords:25}}\n\n{{ page.url | absolute_url }}'
  });
});

var GET_SHARE = "signup=true"

$(document).ready(function() {
  if (window.location.href.indexOf(GET_SHARE) != -1) {
    $("#signup").css("display","inherit");
  }
});
