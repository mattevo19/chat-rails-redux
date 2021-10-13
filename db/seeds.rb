# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Message.destroy_all
User.destroy_all
Channel.destroy_all
puts 'all deleted'

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

names = %w(general berlin react)
nicknames = %w(matt annie josh steffen tree)

channels = names.map do |name|
  Channel.find_or_create_by(name: name)
end
puts 'channels created'

users = nicknames.map do |nickname|
  User.create(email: "#{nickname.downcase}@gmail.com", password: "testtest")
end
puts 'users created'

20.times do
  Message.create! user: users.sample, channel: channels.sample, content: Faker::Books::Dune.quote
end
puts 'messages created'

puts 'Channels:'
channels.each do |channel|
  puts "- #{channel.id}: #{channel.name}"
end