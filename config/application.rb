require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module GiftList
  class Application < Rails::Application
    config.react.camelize_props = true

    config.load_defaults 5.2

    config.autoload_paths += %W(#{config.root}/serializers)
  end
end