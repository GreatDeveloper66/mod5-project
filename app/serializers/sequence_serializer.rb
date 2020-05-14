class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :asanas
  def asanas
    self.object.asanas.map do |asana|
      {
        englishname: asana.englishname,
        sanskritname: asana.sanskritname,
        picurl: asana.picurl
      }
    end
  end
end
