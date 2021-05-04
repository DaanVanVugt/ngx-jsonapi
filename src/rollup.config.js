export default {
    input: './dist/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js',
    output: {
        file: './dist/ngx-jsonapi/bundles/ngx-jsonapi.umd.js',
        format: 'umd',
        name: 'ngx-jsonapi',
        sourcemap: true,
        globals: {
            '@angular/core': 'ng.core'
        }
    }
}
