class ProductsController < ApplicationController
  def index
    @products ||= Product.limit(params[:limit]).offset(params[:offset])

    render json: @products
  end

  def search
    @products ||= Product.by_name(params[:name]).limit(8)

    render json: @products
  end

  def by_category
    @subcategory ||= Subcategory.find(params[:subcategory_id])

    render json: @subcategory.products
  end
end
