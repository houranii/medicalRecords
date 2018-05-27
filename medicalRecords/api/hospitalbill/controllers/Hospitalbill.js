'use strict';

/**
 * Hospitalbill.js controller
 *
 * @description: A set of functions called "actions" for managing `Hospitalbill`.
 */

module.exports = {

  /**
   * Retrieve hospitalbill records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.hospitalbill.fetchAll(ctx.query);
  },

  /**
   * Retrieve a hospitalbill record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hospitalbill.fetch(ctx.params);
  },

  /**
   * Create a/an hospitalbill record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hospitalbill.add(ctx.request.body);
  },

  /**
   * Update a/an hospitalbill record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hospitalbill.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hospitalbill record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hospitalbill.remove(ctx.params);
  }
};
