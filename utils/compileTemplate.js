const heml = require('heml');
const Template = require('../models/emailTemplate');

function compileTemplate(template, data, manual) {

    return new Promise((resolve, reject) => {
        if (manual) {
            heml(tmp(template, data))
                .then(({ html, metadata, errors }) => resolve(html))
        }
        else {
            Template.findOne({ name: template })
                .then(response => {
                    heml(tmp(response.content, data))
                        .then(({ html, metadata, errors }) => resolve(html))
                })
                .catch(err => reject(err))
        }
    })
}

function tmp(template, data) {
    const pattern = /{\s*(\w+?)\s*}/g; // {property}
    return template.replace(pattern, (_, token) => data[token] || '');
}


module.exports = compileTemplate;