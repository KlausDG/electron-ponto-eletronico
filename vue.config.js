module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/variables.scss"; @import "@/sass/mixins.scss";`
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        //Add also your database location
        extraResources: ['src/res/'] 
      },
      //This line: add knex and sqlite3
      externals: ['knex','sqlite3'],
      nodeIntegration: true
      // nodeModulesPath: ['./node_modules']
    }
  }
}
