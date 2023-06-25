import Factory from '@ioc:Adonis/Lucid/Factory'
import JournalFactory from 'App/Models/Journal'

export default Factory.define(JournalFactory, ({ faker }) => {
  const random = faker.helpers.arrayElement
  const ratings = [1, 2, 3, 4, 5]

  return {
    pet_id: random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    energy: random(ratings),
    appetite: random(ratings),
    walks: random(ratings),
    sleep: random(ratings),
  }
}).build()
