const {
    WXPay,
    WXPayUtil,
    WXPayConstants
} = require('./libs/WXPay');
const WXUniformMessage = require('./libs/WXUniformMessage');
const WXMINIMessage = require('./libs/WXMINIMessage');
const WXMINIUser = require('./libs/WXMINIUser');
const WXMINIQR = require('./libs/WXMINIQR');


module.exports = {
    WXPay,
    WXPayUtil,
    WXPayConstants,
    WXMINIMessage,
    WXUniformMessage,
    WXMINIUser,
    WXMINIQR
};