class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create,:index]

    def index
      render json: User.all
    end
    
    def edit
      @user = User.find_by(id: params[:id])
      render json: {user: UserSerializer.new(@user) }
    end

    def update
      current_user.update(username: user_params[:username],email: user_params[:email])
      render json: {user: UserSerializer.new(current_user) }
      
      # current_user.update(email: params[:email], username: params[:username])
#       render json: {user: UserSerializer.new(current_user) }
    end

    def profile
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
      @user = User.create(user_params)
      if @user.valid?
        @token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end
    
    def destroy
      @user = User.find_by(id: params[:id])
      @user.destroy
      render json: { message: 'user succesfully deleted' }
    end

    private

    def user_params
      params.require(:user).permit(:email, :username,:password)
    end
end
