'use strict';

/**
 * Visitscost.js controller
 *
 * @description: A set of functions called "actions" for managing `Visitscost`.
 */

module.exports = {

  /**
   * Retrieve visitscost records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.visitscost.fetchAll(ctx.query);
  },

  /**
   * Retrieve a visitscost record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.visitscost.fetch(ctx.params);
  },

  /**
   * Create a/an visitscost record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.visitscost.add(ctx.request.body);
  },

  /**
   * Update a/an visitscost record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.visitscost.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an visitscost record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.visitscost.remove(ctx.params);
  }
};
