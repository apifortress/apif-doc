const ejs = require ('ejs')

const render_document = (json) => {
    return new Promise ((resolve, reject) => {
        if (json !== undefined) {
            ejs.renderFile (__dirname + '/doc.ejs', json, {  }, function (err, markup) {
                if (err) {
                    console.log ('gasp.');
                    throw err;
                } else
                    resolve (markup);
            })
        } else
            throw "Input JSON is mandatory.";
    })
}

exports.renderHTML = render_document;