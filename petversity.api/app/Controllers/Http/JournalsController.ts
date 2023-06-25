import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Journal from 'App/Models/Journal'

export default class PetsController {
  public async index({ response, params, auth }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.pet_id).firstOrFail()
    const journals = await Journal.query().where('pet_id', pet!.id)

    return response.json(journals)
  }

  public async store({ request, response, params, auth }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.pet_id).firstOrFail()
    const journal = new Journal().fill(request.all())

    await pet.related('journals').save(journal)

    return response.json(pet)
  }

  public async show({ response, auth, params }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.pet_id).firstOrFail()

    const journal = await Journal.query()
      .where('id', params.id)
      .where('pet_id', pet!.id)
      .firstOrFail()

    return response.json(journal)
  }

  public async update({ request, response, auth, params }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.pet_id).firstOrFail()

    const journal = await Journal.query()
      .where('id', params.id)
      .where('pet_id', pet!.id)
      .firstOrFail()

    await journal!.merge(request.all()).save()

    return response.json(journal)
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.pet_id).firstOrFail()

    const journal = await Journal.query()
      .where('id', params.id)
      .where('pet_id', pet!.id)
      .firstOrFail()

    await journal!.delete()

    return response.json(journal)
  }
}
