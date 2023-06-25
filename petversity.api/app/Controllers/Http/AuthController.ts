import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const loginData = await auth.use('api').attempt(email, password, {
      expiresIn: '30 days',
    })

    return response.json({
      user: auth.user,
      token: loginData.token,
    })
  }

  public async register({ response, request, auth }: HttpContextContract) {
    const name = request.input('name')
    const email = request.input('email')
    const password = request.input('password')

    const newUser = new User()
    newUser.name = name
    newUser.email = email
    newUser.password = password

    await newUser.save()

    const loginData = await auth.use('api').login(newUser, {
      expiresIn: '30 days',
    })

    return response.json({
      user: auth.user,
      token: loginData.token,
    })
  }
}
