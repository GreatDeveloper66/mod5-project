class Api::V1::CategoriesController < ApplicationController
skip_before_action :authorized, only: [:index,:show]

	def index
		render json: Category.all
	end
	def show
		@category = Category.find_by(id: params[:id])
		render json: @category
	end
end
