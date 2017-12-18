
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'BAMF_BANANA', password: 'peanutbutterjellytime'},
        {id: 2, username: 'MercyPRO', password: 'battleMercy'},
        {id: 3, username: 'bobSaggot', password: 'AhBobSaggot!!'}
      ]);
    });
};
