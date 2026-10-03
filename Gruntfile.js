module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      dist: {
        options: {
          compress: false,
        },
        files: {
          'styles.css': 'src/less/main.less',
        },
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/js/main.min.js': ['src/js/main.js'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less:dist', 'uglify:dist']);
};
