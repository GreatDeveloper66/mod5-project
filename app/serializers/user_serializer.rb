class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  def sequences
	self.object.sequences.map do |sequence|
		name: sequence.name,
		
	end
  end
end
