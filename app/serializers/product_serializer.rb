class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :value, :quantity, :image, :requested_quantity

  def to_json
    object.map { |product| self.class.new(product).as_json }
  end

  def value
    object.value.to_f
  end

  def image
    return unless object.image.attached?

    rails_blob_path(object.image, only_path: true)
  end
end
