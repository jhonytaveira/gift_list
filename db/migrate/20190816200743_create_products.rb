class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :quantity, null: false
      t.integer :requested_quantity, default: 0
      t.decimal :value
      t.string :image
      t.references :subcategory, foreign_key: true, index: true, null: false

      t.timestamps
    end
  end
end
