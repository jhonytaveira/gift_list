class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  def to_json
    object.map { |category| self.class.new(category).as_json }
  end
end
