const ejs = require ('ejs')

const render_document = (json, opts) => {
    return new Promise ((resolve, reject) => {
        if (json !== undefined) {
            json.__docCLI = (opts !== undefined && opts.cli && opts.cli === true);
            ejs.renderFile (__dirname + '/document.ejs', json, {  }, function (err, markup) {
                if (err) {
                    reject (err);
                    // throw err;
                } else
                    resolve (markup);
            })
        } else
            throw "Input JSON is mandatory.";
    })
}

exports.renderHTML = render_document;