<?php
/* Buttonize the Add comment node link using Twitter Bootstrap classes */
function staff_lib_unb_ca_preprocess_node(&$variables) {
  if (isset($variables['content']['links']['comment']['#links']['comment-add'])) {
    $variables['content']['links']['comment']['#links']['comment-add']['attributes']['class'][] = 'btn btn-default';
  }
}
