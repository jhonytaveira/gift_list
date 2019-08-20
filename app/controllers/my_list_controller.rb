class MyListController < ApplicationController
  def index
    render component: 'myList/index', props: props
  end

  private

  def props
    @props ||= {
      categories: CategorySerializer.new(Category.all).to_json,
      subcategories: SubcategorySerializer.new(Subcategory.all).to_json,
      total_products: Product.count,
      per_page: 8
    }
  end
end
