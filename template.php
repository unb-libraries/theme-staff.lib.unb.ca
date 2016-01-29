<?php
/**
 * @file
 * Hooks for the staff_lib_unb_ca subtheme.
 */

/**
 * Implements hook_preprocess_node().
 */
function staff_lib_unb_ca_preprocess_node(&$variables) {
  if (isset($variables['content']['links']['comment']['#links']['comment-add'])) {
    // Buttonize the Add comment node link using Twitter Bootstrap classes.
    $variables['content']['links']['comment']['#links']['comment-add']['attributes']['class'][] = 'btn btn-default';
  }
}

/**
 * Implements hook_form_comment_form_alter().
 */
function staff_lib_unb_ca_form_comment_form_alter(&$form, &$form_state, $form_id) {
  switch ($form_id) {
    case 'comment_node_front_page_news_form':
      // Change the submit button text from 'Save' to 'Submit'.
      $form['actions']['submit']['#value'] = t('Submit');
      break;
  }
}
