class Product < ApplicationRecord
  belongs_to :subcategory

  has_one_attached :image

  delegate :attachment, to: :image, allow_nil: true

  scope :by_name, -> value do
    where('lower(unaccent(name)) like ?', "%#{I18n.transliterate(value).downcase}%")
  end
end
