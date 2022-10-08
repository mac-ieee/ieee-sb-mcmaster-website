'use strict';

/**
 * executive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::executive.executive');
