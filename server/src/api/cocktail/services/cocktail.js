'use strict';

/**
 * cocktail service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cocktail.cocktail');
