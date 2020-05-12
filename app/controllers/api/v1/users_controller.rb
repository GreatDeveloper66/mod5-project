class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end
  def create
       @user = User.create(user_params)
       if(@user.valid?)
         render json: {userObj: UserSerializer.new(@user)}
       else
         render json: {error: 'user creation failed'}
       end
   end

  private
     def user_params
       params.require(:user).permit(:email, :username, :password)
     end

end
