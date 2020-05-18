module Users
	class Api::V1::SequencesController < ApplicationController

	skip_before_action :authorized, only: [:index,:show]

		def create
			render json: current_user.sequences
		end
		def update
		end
		def destroy
			@sequence = Sequence.find_by(id: params[:id])
			@sequence.destroy
			render json: { message: 'user succesfully deleted' }
		end
		def index
			@user = User.find_by(id: params[:user_id])
			render json: @user.sequences
		end
		def show
			id = params[:id]
			@sequence = Sequence.find_by(id: params[:id])
			render json: { sequence: SequenceSerializer.new(@sequence) }
		end


	private
		def sequence_params
			params.require(:sequence).permit(:name, :duration )
		end
	end
end