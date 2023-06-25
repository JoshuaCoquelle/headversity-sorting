import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('register', 'AuthController.register')
  Route.post('login', 'AuthController.login')
}).prefix('auth')

Route.group(() => {
  Route.resource('pets', 'PetsController').apiOnly()
  Route.resource('pets.journals', 'JournalsController').apiOnly()
})
  .middleware('auth:api')
  .prefix('api')
