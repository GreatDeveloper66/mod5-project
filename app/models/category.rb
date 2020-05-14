class Category < ApplicationRecord
  has_many :asanacategories
  has_many :asanas, through: :asanacategories
end
