
/**
 * @file
 * Initiate Tooltip(s).
 *
 * @todo, Support content param position.
 */

(function($) {
  Drupal.behaviors.tips = {
    attach: function(context, settings) {
      $.each(settings.tips, function(i, val) {
        $.each(settings.tips[i], function(key) {
          // @todo, Support multiple tooltips per HTML selector?
          if (settings.tips[i][key].content == 'param') {
            // Content passed as param.
            $(i)[settings.tips[i][key].library](settings.tips[i][key].settings, settings.tips[i][key].content_param);
          } else {
            // Default implementation.
            $(i)[settings.tips[i][key].library](settings.tips[i][key].settings);
          }
        });
      });
    }
  };
}(jQuery));
