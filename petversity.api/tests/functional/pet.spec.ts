import { test } from '@japa/runner'
import User from 'App/Models/User'
import Pet from 'App/Models/Pet'

test.group('List pets', () => {
  test('get all user pets', async ({ assert, client }) => {
    const user = await User.findOrFail(1)

    const response = await client
      .get('/api/pets')
      .guard('api')
      .loginAs(user as User)

    const pets = response.body()

    assert.lengthOf(pets, 10)

    pets.forEach((pet) => {
      assert.properties(pet, [
        'id',
        'name',
        'species',
        'breed',
        'gender',
        'age',
        'user_id',
        'created_at',
        'updated_at',
      ])
    })

    response.assertStatus(200)
  })

  test('get a single user pet', async ({ assert, client }) => {
    const user = await User.findOrFail(1)

    const response = await client
      .get('/api/pets/1')
      .guard('api')
      .loginAs(user as User)

    const pet = response.body()

    assert.properties(pet, [
      'id',
      'name',
      'species',
      'breed',
      'gender',
      'age',
      'user_id',
      'created_at',
      'updated_at',
    ])

    assert.exists(pet)

    response.assertStatus(200)
  })

  test('create a user pet', async ({ assert, client }) => {
    const user = await User.findOrFail(1)

    const newPet = {
      user_id: user.id,
      name: 'foobar',
      age: 10,
      breed: 'Golden Retriever',
      species: 'dog',
      gender: 'male',
    }

    const response = await client
      .post('/api/pets')
      .json(newPet)
      .guard('api')
      .loginAs(user as User)

    const pet = response.body()

    assert.properties(pet, [
      'id',
      'name',
      'species',
      'breed',
      'gender',
      'age',
      'user_id',
      'created_at',
      'updated_at',
    ])

    response.assertStatus(200)
  })

  test('update a user pet', async ({ assert, client }) => {
    const user = await User.findOrFail(1)

    const response = await client
      .patch('/api/pets/1')
      .json({ name: 'foobar' })
      .guard('api')
      .loginAs(user as User)

    const petUpdated = await Pet.findOrFail(1)

    const pet = response.body()

    assert.properties(pet, [
      'id',
      'name',
      'species',
      'breed',
      'gender',
      'age',
      'user_id',
      'created_at',
      'updated_at',
    ])

    assert.equal(petUpdated.name, 'foobar')

    response.assertStatus(200)
  })

  test('delete a user pet', async ({ assert, client }) => {
    const user = await User.findOrFail(1)

    const response = await client
      .delete('/api/pets/1')
      .guard('api')
      .loginAs(user as User)

    const pet = await Pet.find(1)

    assert.notExists(pet)

    response.assertStatus(200)
  })
})
