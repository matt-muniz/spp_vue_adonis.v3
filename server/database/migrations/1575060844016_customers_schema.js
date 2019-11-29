"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomersSchema extends Schema {
  up() {
    this.create("customers", table => {
      table.increments();
      table.string("first_name");
      table.string("last_name");
      table.string("childs_name");
      table.integer("childs_age");
      table.string("number", 10);
      table.string("email");
      table.string("event").defaultTo("Birthday Party");
      table.date("date");
      table.integer("numKids").defaultTo(0);
      table.decimal("price").defaultTo(0);
      table.string("time");
      table.boolean("one_character");
      table.boolean("two_characters");
      table.boolean("additional_hour");
      table.boolean("full_sheet_cake");
      table.boolean("fifteen_min_rental");
      table.boolean("thirty_min_rental");
      table.boolean("vanilla");
      table.boolean("chocolate");
      table.boolean("cotton_candy");
      table.boolean("popcorn");
      table.boolean("premium_snacks");
      table.boolean("jape");
      table.boolean("zumbini");
      table.boolean("premium_cake");
      table.boolean("piniata");
      table.string("character_one_name").defaultTo("null");
      table.string("character_two_name").defaultTo("null");
    });
  }

  down() {
    this.drop("customers");
  }
}

module.exports = CustomersSchema;
