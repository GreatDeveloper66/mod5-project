class Sequence < ApplicationRecord
  belongs_to :user
  has_many :asanasequences
  has_many :asanas, through: :asanasequences
  def self.createsequence(name,asanarray)
    total = self.totalduration(asanarray)

    newsequence = self.create({:name => name, :duration => total})
    sequenceid = newsequence.id

    asanarray.each_with_index do |asana, index|
      Asanasequence.create({:asana_id => asana.id,
                            :sequence_id => sequenceid,
                            :order => index})
    end
  end
  def addasana(asana)
    self.duration += asana.duration
    Asanasequence.create({:asana_id => asana.id,
                          :sequence_id => self.id,
                          :order => self.length})
  end
  def findasanasequences
    Asanasequence.all.select { |asequence| asequence.sequence_id === self.id}
  end
  def self.totalduration(asanarray)
    asanarray.reduce(0) { |sum,asana| sum + asana.duration }
  end

end
