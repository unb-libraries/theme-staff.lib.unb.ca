<?php $myRawOutput = $row->field_body[0]['raw']['safe_value']; ?>

<?php if ($myRawOutput == $output): ?>
  <div class="untrimmed">
    <?php print $output; ?>
  </div>
<?php else: ?>
  <?php print $output; ?>
<?php endif; ?>