
	class Api::V1::Users::SequencesController < ApplicationController

		def create
			@name = params[:name]
			@user = User.find_by(id: params[:user_id])
			@asanas = params[:sequence][:asanas]
			@asanarray = @asanas.map do |asana|
				Asana.find_by(id: asana[:id])
			end	
			@newsequence = @user.create_sequence(name: @name,sequence_array: @asanarray)
			@sequences = @user.sequences
			render json: @sequences
		end
		def edit
			@sequence = Sequence.find_by(id: params[:id])
			render json: {sequence: SequenceSerializer.new(@sequence) }
		end
		def update
			@user = User.find_by(id: params[:user_id])
			@sequence_id = params[:id]
			@asanas = params[:asanas]
			@asanarray = @asanas.map do |asana|
				Asana.find_by(id: asana[:id])
			end	
			@user.update_sequence(sequence_id: @sequence_id,asana_array: @asanarray)
			@sequences = @user.sequences
			render json: @sequences
		end
		def destroy
			@sequence = Sequence.find_by(id: params[:id])
			@sequence.destroy
			render json: { message: 'sequence succesfully deleted' }
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
