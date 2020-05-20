class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :asanas

  def asanas
    self.object.asanas.map do |asana| 
      {
		id: asana.id,
        englishname: asana.englishname,
        sanskritname: asana.sanskritname,
        picurl: asana.picurl,
		duration: asana.duration
      }
    end
  end
end
