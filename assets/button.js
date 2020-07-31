jQuery(function ($) {

    tinymce.create('tinymce.plugins.paperdata_plugin', {

        init: function (ed, url) {

            ed.addButton('paperdata_button', {
                title: 'Add Paper Data',
                text: 'Paper Data',
                cmd: 'ct_insert_shortcode'
            });

            ed.addCommand('ct_insert_shortcode', fuction () {

                var selected = tinyMCE.activeEditor.selection.getContent();
                var content;

                ed.windowManager.open({
                    title: 'Insert paper data',
                    body: [{
                        type: 'textbox',
                        name: 'auth',
                        label: 'Author/s'
                    },
                    {
                        type: 'textbox',
                        name: 'year',
                        label: 'Year'
                    },
                    {
                        type: 'textbox',
                        name: 'title',
                        label: 'Title'
                    },
                    {
                        type: 'textbox',
                        name: 'journal',
                        label: 'Journal'
                    }
                    ],
                    onsubmit: function (e) {
                        var shortcode = '[paperdata "' + e.data.auth + '" ';
                            if (e.data.year !== '') {
                                shortcode += ' height="' + e.data.year + '" ';
                            }
                            if (e.data.title !== '') {
                                shortcode += ' width="' + e.data.title + '" ';
                            }
							if (e.data.journal !== '') {
                                shortcode += ' width="' + e.data.journal + '" ';
                            }
                            shortcode += ' ]';

                            ed.insertContent(shortcode);
                    }
                });
            });

        }
    }
    )

    tinymce.PluginManager.add('paperdata_button', tinymce.plugins.paperdata_plugin);

});