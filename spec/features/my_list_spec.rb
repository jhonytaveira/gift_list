require 'rails_helper'

def make_dependencies!
  let(:category_vehicles) { create(:category, name: 'Veículos') }
  let(:category_game) { create(:category, name: 'Game') }
  let(:subcategory_ps) { create(:subcategory, name: 'Playstation', category: category_game) }
  let(:subcategory_bike) { create(:subcategory, name: 'Bicicletas', category: category_vehicles) }


  let!(:products_ps2) { create_list(:product, 4, name: 'PS2', subcategory: subcategory_ps, value: 500.00) }
  let!(:products_ps3) { create_list(:product, 4, name: 'PS3', subcategory: subcategory_ps, value: 80.00) }
  let!(:products_ps4) { create_list(:product, 4, name: 'PS4', subcategory: subcategory_ps, value: 120.00) }

  let!(:products_monark) do
    create_list(:product, 4, name: 'Monark', subcategory: subcategory_bike, value: 1600.00)
  end
  let!(:products_caloi) { create_list(:product, 4, name: 'Caloi', subcategory: subcategory_bike, value: 340.00) }
  let!(:products_monareta) do
    create_list(:product, 4, name: 'Monareta', subcategory: subcategory_bike, value: 980.00)
  end
end

feature 'MyList', js: true do
  context 'when typing product name on search field' do
    make_dependencies!

    scenario 'show products' do
      visit_my_list

      expect(page).to have_content('PS2')

      fill_in('product-search', with: 'Monark')

      expect(page).to have_content('Monark')
      expect(page).to have_content('5')
      expect(page).to have_content('R$ 1600,00')

      expect(page).to_not have_content('PS2')
    end
  end

  context 'when adding quantity for each product' do
    let!(:product) { create(:product, value: 100) }

    scenario 'calculates total value and items quantity' do
      visit_my_list

      quantity_field = "quantity-#{product.id}"

      expect(page).to have_content '0 itens com o total de R$ 0,00'

      select 3, from: quantity_field

      expect(page).to have_content '3 itens com o total de R$ 300,00'
    end
  end

  context 'when to choose a subcategory' do
    make_dependencies!
    scenario 'show only products from this is subcategory' do
      visit_my_list

      expect(page).to have_content('PS2')
      expect(page).to have_content('PS3')

      expect(page).to_not have_content('Monark')
      expect(page).to_not have_content('Caloi')

      check('Veículos', allow_label_click: true)
      click_link('Bicicletas')

      expect(page).to_not have_content('PS2')
      expect(page).to_not have_content('PS3')

      expect(page).to have_content('Monark')
      expect(page).to have_content('Caloi')
    end
  end
end
