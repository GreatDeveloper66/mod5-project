class Category < ApplicationRecord
  has_many :asanacategories
  has_many :asanas, through: :asanacategories

  def self.createcategory(name: '',asanarray: [])
    id = self.create({:name => name}).id
    asanarray.each do |asana|
      Asanacategory.create({:category_id => id,
                             :asana_id => asana.id})
    end
  end

end
