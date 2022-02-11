source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.3'

gem 'rails', '~> 5.2.3'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.3'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 4.0', '>= 4.0.7'
gem 'react-rails', '~> 2.6'
gem 'pry-rails'
gem 'active_model_serializers', '~> 0.10.9'
gem 'jquery-rails'
gem 'bootsnap',        '>= 1.1.0', require: false

group :development, :test do
  gem 'rspec-rails', '~> 3.8'
  gem 'factory_bot_rails',         '~> 4.11', '>= 4.11.1'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 3.18'
  gem 'selenium-webdriver', '~> 3.142.0'
  gem 'webdrivers', '~> 4.1', '>= 4.1.2'
  gem 'shoulda-matchers', '4.0.0.rc1'
  gem 'database_cleaner', '~> 1.7'
  gem 'capybara-screenshot', '~> 1.0', '>= 1.0.22'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
