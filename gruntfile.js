
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        shell: {
            connect: {
                command: 'node server.js'
            }
        },
        fixtures: {
            import_test_data: {
                src: ['fixtures/users.json', 'fixtures/models*.json'],
                models: async function () {  
                    return await loadModels();
                },
                options: {
                    //specify encoding, optional default utf-8
                    encoding: 'utf-8'
                }
            }
        }

    });
    grunt.registerTask('server', ['shell:connect','fixtures']);
    grunt.loadNpmTasks('sequelize-fixtures');
};