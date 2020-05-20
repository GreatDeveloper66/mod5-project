class Api::V1::AsanasController < ApplicationController
skip_before_action :authorized, only: [:index,:show]
	def index
		render json: Asana.all
	end
	def show
		@asana = Asana.find_by(id: params[:id])
		render json:@asana
	end
end