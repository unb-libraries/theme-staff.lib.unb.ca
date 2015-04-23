<?php print ($row->_field_data['nid']['entity']->sticky) ? '<div class="sticky">' : ''; ?>

<?php foreach ($fields as $id => $field): ?>
  <?php if (!empty($field->separator)): ?>
    <?php print $field->separator; ?>
  <?php endif; ?>

  <?php print $field->wrapper_prefix; ?>
    <?php print $field->label_html; ?>
    <?php print $field->content; ?>
  <?php print $field->wrapper_suffix; ?>
<?php endforeach; ?>

<?php print ($row->_field_data['nid']['entity']->sticky) ? '</div>' : ''; ?>
