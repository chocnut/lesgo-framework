"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _winston=_interopRequireDefault(require("winston")),_winstonSentryRavenTransport=_interopRequireDefault(require("winston-sentry-raven-transport")),_config=require("../config");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var transports=[new _winston["default"].transports.Console({level:"info",colorize:!0})];"local"===_config.app.env&&_config.app.debug&&transports.push(new _winston["default"].transports.File({filename:"logs/lesgo.log"})),_config.sentry.enabled&&transports.push(new _winstonSentryRavenTransport["default"]({dsn:_config.sentry.dsn,level:_config.sentry.level,config:{environment:_config.app.env,captureUnhandledRejections:!0,tags:{service:_config.app.service}}}));var loggerOptions={level:"info",format:_winston["default"].format.json(),defaultMeta:{environment:_config.app.env,service:_config.app.service},transports:transports},logger=_winston["default"].createLogger(loggerOptions),_default=logger;exports["default"]=_default;