class Category < ApplicationRecord
  has_many :asanacategories
  has_many :asanas, through: :asanacategories

  def self.createcategory(name,asanarray)
    self.create({:name => name})
    asanarray.each do |asana|
      Asanacategory.create({:category_id => self.id,
                             :asana_id => asana.id})
    end
  end
end
