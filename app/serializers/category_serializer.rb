class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :asanas

  def asanas
    self.object.asanas.map do |asana|
      {
		id: asanas.id
        englishname: asana.englishname,
        sanskritname: asana.sanskritname,
        picurl: asana.picurl
      }
    end
  end
end
