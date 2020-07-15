exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          is_admin: true,
          name: "Klaus",
          user_code: "1234",
          created_at: knex.fn.now(),
        },
      ]);
    });
};
