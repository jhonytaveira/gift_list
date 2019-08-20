class SubcategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :category_id

  def to_json
    object.map { |subcategory| self.class.new(subcategory).as_json }
  end
end
