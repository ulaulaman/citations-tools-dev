<?php

function tiny_mce_add_buttons( $plugins ) {
    $plugins['mytinymceplugin'] = CT__PLUGIN_DIR . 'button.js';
    return $plugins;
  }
  
  function tiny_mce_register_buttons( $buttons ) {
    $newBtns = array(
      'citationsbtn'
    );
    $buttons = array_merge( $buttons, $newBtns );
    return $buttons;
  }

add_action( 'init', 'tiny_mce_new_buttons' );

function tiny_mce_new_buttons() {
  add_filter( 'mce_external_plugins', 'tiny_mce_add_buttons' );
  add_filter( 'mce_buttons', 'tiny_mce_register_buttons' );
}