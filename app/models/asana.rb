class Asana < ApplicationRecord
  has_many :asanasequences
  has_many :sequences, through: :asanasequences
  has_many :asanacategories
  has_many :categories, through: :asanacategories

  def self.createasana(asanarray)
    self.create({:sanskritname => asanarray[0],
                  :englishname => asanarray[1],
                  :picurl => asanarray[2],
                  :duration => asanarray[3]})
  end
end
