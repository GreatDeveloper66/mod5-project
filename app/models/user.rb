class User < ApplicationRecord
  has_secure_password
  has_many :sequences, dependent: :destroy
  validates :username, uniqueness: { case_sensitive: false }
  
  def create_sequences(sequence_array)
    id = self.id
    
    def self.createsequence(name:'',asanarray:[])
    
      total = self.totalduration(asanarray)
    

      newsequence = self.create({:name => name, :duration => total})
      sequenceid = newsequence.id

    asanarray.each_with_index do |asana, index|
      Asanasequence.create({:asana_id => asana.id,
                              :sequence_id => sequenceid,
                              :order => index})
      end
    end
    
  end
end
