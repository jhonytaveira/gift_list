categories = {
  'Games': [{ name: 'Tec-Toy' }, { name: 'Playstation' }, { name: 'Nintendo-Wii-U' }],
  'Escolar': [{ name: 'Cadernos' }, { name: 'Dicionários' }, { name: 'Mesas e Cadeiras' }],
  'Hora do Banho': [{ name: 'Fraldas-Descartáveis' }, { name: 'Fraldas-de-Pano' }, { name: 'Higiene' }],
  'Quarto e Decoração': [{ name: 'Berços e Cercados' }, { name: 'Enxoval' }, { name: 'Móveis e Acessórios' }],
  'DVD e Blu-Ray': [{ name: 'CDs' }, { name: 'DVDs e Blu-ray' }, { name: 'Livros' }],
  'Brinquedos': [{ name: 'Bonecas' }, { name: 'Quebra-Cabeças' }, { name: 'Fantasias' }],
  'Moda e Acessórios': [{ name: 'Cama e Banho' }, { name: 'Moda Kids' }, { name: 'Calçados' }],
  'Mini Veículos e Cia': [{ name: 'Mini-Veículos-Elétricos' }, { name: 'Bicicletas' }, { name: 'Patins e Skates' }]
}

if Category.none?  && Subcategory.none?
  categories.each do |name, _|
    Category.create(name: name).tap { |category| category.subcategories.create(categories[name]) }
  end
end

if Product.none?
  Subcategory.all.each do |subcategory|
    5.times do
      product = Product.new

      product.name = subcategory.name.split(' ').first
      file_name = I18n.transliterate product.name.downcase.underscore

      file = File.open("app/assets/images/#{file_name}.jpg")
      product.subcategory = subcategory
      product.value = rand 100..1000
      product.quantity = rand 1..10
      product.image.attach(io: file, filename: file_name, content_type:'image/jpg')
      product.save
    end
  end
end
