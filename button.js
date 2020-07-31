(function(){
    tinymce.create('tinymce.plugins.CitationsTools', {
    
        init: function(ed, url){
  
        },
        getInfo: function() {
          return {
            longname: 'Citations Tools Button',
            author: 'Plugin Author',
            authorurl: 'https://www.axosoft.com',
            version: "1.0"
          };
        }

        ed.addButton('citationsbtn', {
            title: 'Insert Paper Citation',
            cmd: 'CitationsBtnCmd',
            image: url + '/img/ct-icon.png'
          });

        ed.addCommand('CitationsBtnCmd', function(){
            var selectedText = ed.selection.getContent({format: 'html'});
            var win = ed.windowManager.open({
              title: 'Properties',
              body: [
                {
                  type: 'textbox',
                  name: 'auth',
                  label: 'Author/s',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'year',
                  label: 'Year',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'title',
                  label: 'Title',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'journal',
                  label: 'Journal',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'vol',
                  label: 'vol',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'code',
                  label: 'Doi',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'issue',
                  label: 'issue',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'arxiv',
                  label: 'arXive code',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'pages',
                  label: 'pages',
                  minWidth: 500,
                  value: ''
                },
                {
                  type: 'textbox',
                  name: 'pdfurl',
                  label: 'Pdf url',
                  minWidth: 500,
                  value: ''
                },
                {
                    type: 'textbox',
                    name: 'archiveurl',
                    label: 'archive.org url',
                    minWidth: 500,
                    value: ''
                  }
              ],
              buttons: [
                {
                  text: "Ok",
                  subtype: "primary",
                  onclick: function() {
                    win.submit();
                  }
                },
                {
                  text: "Skip",
                  onclick: function() {
                    win.close();
                    var returnText = '[ blockquote]' + selectedText + '[/blockquote ] ';
                    ed.execCommand('mceInsertContent', 0, returnText);
                  }
                },
                {
                  text: "Cancel",
                  onclick: function() {
                    win.close();
                  }
                }
              ],
              onsubmit: function(e){
                var params = [];
                if( e.data.auth.length > 0 ) {
                  params.push('auth="' + e.data.author + '"');
                }
                if( e.data.year.length > 0 ) {
                    params.push('year="' + e.data.author + '"');
                }
                if( e.data.title.length > 0 ) {
                  params.push('title="' + e.data.author + '"');
                }
                if( e.data.journal.length > 0 ) {
                    params.push('journal="' + e.data.author + '"');
                }
                if( e.data.vol.length > 0 ) {
                    params.push('vol="' + e.data.author + '"');
                }
                if( e.data.code.length > 0 ) {
                    params.push('code="' + e.data.author + '"');
                }
                if( e.data.issue.length > 0 ) {
                  params.push('issue="' + e.data.cite + '"');
                }
                if( e.data.arxiv.length > 0 ) {
                  params.push('arxiv="' + e.data.link + '"');
                }
                if( e.data.pages.length > 0 ) {
                    params.push('pages="' + e.data.author + '"');
                }
                if( e.data.pdfurl.length > 0 ) {
                    params.push('pdfurl="' + e.data.author + '"');
                }
                if( e.data.archiveurl.length > 0 ) {
                    params.push('archiveurl="' + e.data.author + '"');
                }
                if( params.length > 0 ) {
                  paramsString = ' ' + params.join(' ');
                }
                var returnText = '[ blockquote' + paramsString + ']' + selectedText + '[/blockquote ]';
                ed.execCommand('mceInsertContent', 0, returnText);
              }
            });
          });

    });
    
    tinymce.PluginManager.add( 'mytinymceplugin', tinymce.plugins.CitationsTools );
  })();