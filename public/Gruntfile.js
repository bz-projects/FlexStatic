module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
            browsers: ['last 10 versions', 'ie 8', 'ie 9'], 
              map: true
            },
            single_file: {
                src: 'src/css/style.css',
                dest: 'src/css/style.css'
            }
        },
        sass: {
          dist: {
            files: {
              'src/css/style.css': 'src/scss/style.scss'
            }
          },
        },
        watch: {
            css: {
                files: ['src/scss/*.scss'],
                tasks: ['sass','autoprefixer']
            }
        },
        prettify: {
          options: {
            config: '.prettifyrc'
          },
          all: {
            expand: true,
            cwd: '*',
            ext: '.html',
            src: ['*.html'],
            dest: 'public/*'
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-prettify');
    grunt.registerTask('default', ['watch']);
  };
  