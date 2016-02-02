require 'bundler'
Bundler.require()

set :views, File.expand_path('../views', __FILE__)
set :public, File.expand_path('../public', __FILE__)



get '/' do
  erb :index
end
