'use strict';

/**
 * Patientfile.js controller
 *
 * @description: A set of functions called "actions" for managing `Patientfile`.
 */

module.exports = {

  /**
   * Retrieve patientfile records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.patientfile.fetchAll(ctx.query);
  },

  /**
   * Retrieve a patientfile record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.patientfile.fetch(ctx.params);
  },

  /**
   * Create a/an patientfile record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.patientfile.add(ctx.request.body);
  },

  /**
   * Update a/an patientfile record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.patientfile.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an patientfile record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.patientfile.remove(ctx.params);
  }
};
