import Factory from '@ioc:Adonis/Lucid/Factory'
import JournalFactory from 'App/Models/Journal'

export default Factory.define(JournalFactory, ({ faker }) => {
  const random = faker.helpers.arrayElement
  const fromOneToFiveArr = [1, 2, 3, 4, 5]

  return {
    pet_id: random(fromOneToFiveArr),
    energy: random(fromOneToFiveArr),
    appetite: random(fromOneToFiveArr),
    walks: random(fromOneToFiveArr),
    sleep: random(fromOneToFiveArr),
  }
}).build()
