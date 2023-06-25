import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pet from 'App/Models/Pet'

export default class PetsController {
  public async index({ response, auth }: HttpContextContract) {
    const pets = await auth.user!.related('pets').query()

    return response.json(pets)
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const pet = new Pet().fill(request.all())

    await auth.user!.related('pets').save(pet)

    return response.json(pet)
  }

  public async show({ response, auth, params }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.id).firstOrFail()

    return response.json(pet)
  }

  public async update({ request, response, auth, params }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.id).firstOrFail()

    await pet?.merge(request.all()).save()

    return response.json(pet)
  }

  public async destroy({ auth, params, response }: HttpContextContract) {
    const pet = await auth.user!.related('pets').query().where('id', params.id).firstOrFail()

    await pet?.delete()

    return response.json(pet)
  }
}
