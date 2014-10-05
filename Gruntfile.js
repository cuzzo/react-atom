module.exports = function(grunt) {
  grunt.initConfig({
    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: "example/jsx",
            src: ["**/*.jsx"],
            dest: "example/components",
            ext: ".js"
          }
        ]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: "example/sass",
          src: "**/*.scss",
          dest: "example/css",
          ext: ".css"
        }]
      }
    },

    atom: {
      options: {
        molecule_path: "example",
        molecular_rules_path: "example/molecular-rules.js",
        split_molecules_path: "example/sass/split-molecules.scss",
        sass_import_path: "example/sass/_imports.scss"
      }
    },

    watch: {
      react: {
        files: ["example/jsx/**/*.jsx"],
        tasks: ["react"]
      },
      sass: {
        files: ["example/sass/**/*.scss"],
        tasks: ["sass"]
      },
      atom: {
        files: ["example/**/*.atom"],
        tasks: ["atom"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-react");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-atom-css");

  grunt.registerTask("dist", ["atom", "sass", "react"]);
};
