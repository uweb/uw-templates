module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    notify: {
      watch: {
        options: {
          title: 'Done',
          message: 'Templates rendered'
        }
      }
    },

    jade : {
       compile: {
          options: {
            data: {
              debug: false
            },
            pretty: true,
          },
          files: {
            "templates/basic.html": [ "jade/basic.jade" ],
            "templates/hero.html": [ "jade/hero.jade" ],
            "templates/no-sidebar.html": [ "jade/no-sidebar.jade" ],
            "templates/no-hero.html": [ "jade/no-hero.jade" ],
            "templates/thinstrip.html": [ "jade/thinstrip.standalone.jade" ],
            "templates/thinstrip.small.html": [ "jade/thinstrip.small.standalone.jade" ],
            // "templates/tiles.html": [ "jade/tiles.jade" ]
          }
        },
    },

     watch: {
      config : {
        files : ['gruntfile.js'],
        options : {
          reload: true
        }
      },
      jade : {
        files: [ 'jade/*.jade', 'jade/*/*.jade' ],
        tasks: [ 'default' ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask( 'default', [ 'jade', 'notify' ] );

};
