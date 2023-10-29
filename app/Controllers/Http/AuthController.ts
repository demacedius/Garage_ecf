import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class AuthController {
  public ShowLoginForm({ view }: HttpContextContract){
    return view.render('auth/login')
  }

  public async login({ auth, request, response }: HttpContextContract){
    const { email, password} = request.only(['email', 'password'])
      
    await auth.attempt(email,password)
    return response.redirect("/")
  
  }

  public ShowRegisterForm({ view}: HttpContextContract){
    return view.render('auth/register')
  }

  public async register({ auth, request, response}: HttpContextContract){
    const payload = request.only(['email', 'password'])
    
    const user = await User.create(payload)

    await auth.login(user)

    return response.redirect("/")
  }

  public async logout({auth, response}: HttpContextContract){
    await auth.logout()

    return response.redirect('/')
  }
}
