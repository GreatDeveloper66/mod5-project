class User < ApplicationRecord
  has_secure_password
  has_many :sequences, dependent: :destroy
  validates :username, uniqueness: { case_sensitive: false }
  
	def create_sequences(name:'',sequence_array:[])
		id = self.id
		duration = sequence_array.reduce(0) { |sum,asana| sum + asana.duration }
		sequence_id = Sequence.create({name: name,duration: duration,user_id: id}).id
		sequence_array.each_with_index do |asana, index|
			Asanasequence.create({:asana_id => asana.id,
								:sequence_id => sequence_id,
								:order => index})
		end
	end  
end
