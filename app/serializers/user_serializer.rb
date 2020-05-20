class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  #def sequences
	#self.object.sequences.map do |sequence|
		#id: sequence.id,
		#name: sequence.name,
		#duration: sequence.duration
	#end
  #end
end
