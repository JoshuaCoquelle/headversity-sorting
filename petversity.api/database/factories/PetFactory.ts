import Factory from '@ioc:Adonis/Lucid/Factory'
import PetFactory from 'App/Models/Pet'

export default Factory.define(PetFactory, ({ faker }) => {
  const random = faker.helpers.arrayElement
  const dogOrCat = random(['dog', 'cat'])
  const maleOrFemale = random(['male', 'female'])

  return {
    user_id: 1, // admin seed
    name: faker.person.firstName(maleOrFemale as 'male' | 'female'),
    age: faker.number.int({ max: 15 }),
    breed: faker.animal[dogOrCat](),
    species: dogOrCat,
    gender: maleOrFemale,
  }
}).build()
