const randomColor = require('./randomColor');

module.exports = function(name,lastName = ''){
    lastName = lastName == null ? name.charAt(1) : lastName.charAt(0);
    return 'https://ui-avatars.com/api/?size=1024&background=' + randomColor() + '&color=fff&name=' + name.charAt(0) + '+' + lastName;
}