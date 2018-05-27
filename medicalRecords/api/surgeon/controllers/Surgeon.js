'use strict';

/**
 * Surgeon.js controller
 *
 * @description: A set of functions called "actions" for managing `Surgeon`.
 */

module.exports = {

  /**
   * Retrieve surgeon records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.surgeon.fetchAll(ctx.query);
  },

  /**
   * Retrieve a surgeon record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.surgeon.fetch(ctx.params);
  },

  /**
   * Create a/an surgeon record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.surgeon.add(ctx.request.body);
  },

  /**
   * Update a/an surgeon record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.surgeon.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an surgeon record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.surgeon.remove(ctx.params);
  }
};
