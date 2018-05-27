'use strict';

/**
 * Management.js controller
 *
 * @description: A set of functions called "actions" for managing `Management`.
 */

module.exports = {

  /**
   * Retrieve management records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.management.fetchAll(ctx.query);
  },

  /**
   * Retrieve a management record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.management.fetch(ctx.params);
  },

  /**
   * Create a/an management record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.management.add(ctx.request.body);
  },

  /**
   * Update a/an management record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.management.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an management record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.management.remove(ctx.params);
  }
};
