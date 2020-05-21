
	class Api::V1::Users::SequencesController < ApplicationController

		def create
			@name = params[:name]
			@user = User.find_by(id: params[:user_id])
			@asanas = params[:sequence][:asanas]
			@asanarray = @asanas.map do |asana|
				Asana.find_by(id: asana[:id])
			end	
			puts @asanarray
			@newsequence = @user.create_sequence(name: @name,sequence_array: @asanarray)
			@sequences = @user.sequences
			render json: @sequences
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
			@sequences = @user.sequences
			render json: @sequences
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
